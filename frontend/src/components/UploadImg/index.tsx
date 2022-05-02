import React, { FC } from "react";
import { Upload, Button, UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { customUpload } from "./customRequest";

export const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const UploadImg: FC<UploadProps | any> = (props) => {
  const handleChange = (info: any) => {
    console.log("info", info);

    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      props.setDisabledButton(false);
    }
  };
  return (
    <Upload
      accept=".png,.jpeg,.jpg"
      listType="picture"
      customRequest={customUpload}
      maxCount={1}
      {...props}
      onChange={handleChange}
    >
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
};

export default UploadImg;
