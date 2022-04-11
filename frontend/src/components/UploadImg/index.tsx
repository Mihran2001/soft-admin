import React, { FC } from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props = {
  // name: "file",
  action: "http://localhost:3000/posts/edit",
  accept: ".png,.jpeg,.doc,.jpg",
  showUploadList: { showRemoveIcon: true },
  headers: {
    authorization: "authorization-text",
  },
  onChange(info: any) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  beforeUpload: (file: any) => {
    console.log("File content", file);
    return false;
  },
};

const UploadImg: FC = () => {
  return (
    <Upload {...props} listType="picture">
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
};

export default UploadImg;
