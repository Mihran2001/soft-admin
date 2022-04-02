import React, { FC } from "react";
import {
  PostEditWrapper,
  SInput,
  STextArea,
  SLabel,
  InputesBox,
} from "./styles";
import UploadImg from "../../UploadImg";
import TextEditor from "../../TextEditor";
// import MyInput from "../../TestComponent";

interface IEditOrCreate {
  data?: {};
}

const EditOrCreate: FC<IEditOrCreate> = ({ data }) => {
  return (
    <PostEditWrapper>
      <TextEditor />
      <InputesBox>
        <SLabel>Title</SLabel>
        <SInput placeholder="Title" />
        <SLabel>URL</SLabel>
        <SInput placeholder="URL" />

        {/* 
        <SLabel>Content</SLabel>
        <STextArea placeholder="Content" /> */}

        <UploadImg />
        {/* <MyInput /> */}
      </InputesBox>
    </PostEditWrapper>
  );
};

export default EditOrCreate;
