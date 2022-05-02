import SkeletonButton from "antd/lib/skeleton/Button";
import {
  RcFile as OriRcFile,
  UploadRequestOption as RcCustomRequestOptions,
  UploadProps as RcUploadProps,
} from "rc-upload/lib/interface";

const convertBase64 = (file: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

function getError(option: any, xhr: XMLHttpRequest) {
  const msg = `cannot ${option.method} ${option.action} ${xhr.status}'`;
  const err = new Error(msg) as any;
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}

function getBody(xhr: XMLHttpRequest) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

export async function customUpload(option: RcCustomRequestOptions<any>) {
  console.log(option);

  // eslint-disable-next-line no-undef
  const xhr = new XMLHttpRequest();

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e: any) {
      if (e.total > 0) {
        e.percent = (e.loaded / e.total) * 100;
      }
      if (option.onProgress) {
        option.onProgress(e);
      }
    };
  }

  // eslint-disable-next-line no-undef
  const formData = new FormData();
  const { data } = option;
  if (data) {
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, item);
        });
        return;
      }

      formData.append(key, value as string | Blob);
    });
  }

  // eslint-disable-next-line no-undef
  const base64File = await convertBase64(option.file);

  formData.append("id", String(Date.now()));
  formData.append("type", (option.file as any).type.split("/")[1]);
  formData.append("url", base64File);

  xhr.onerror = function error(e) {
    if (option.onError) {
      option.onError(e);
    }
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      if (option.onError) {
        return option.onError(getError(option, xhr), getBody(xhr));
      }
    }

    if (option.onSuccess) {
      // SkeletonButton();
      return option.onSuccess(getBody(xhr), xhr);
    }
  };

  xhr.open(option.method, option.action, true);

  if (option.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }

  const headers = option.headers || {};

  if (headers["X-Requested-With"] !== null) {
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  }

  Object.keys(headers).forEach((h) => {
    if (headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  });

  xhr.send(formData);

  return {
    abort() {
      xhr.abort();
    },
  };
}
