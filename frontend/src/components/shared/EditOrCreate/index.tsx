import React, { FC } from "react";
import {
  PostEditWrapper,
  SInput,
  STextArea,
  SLabel,
  InputesBox,
  SButton,
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
        <SLabel>Category</SLabel>
        <SInput placeholder="Category" />
        <SLabel>Meta Description</SLabel>
        <SInput placeholder="Meta Description" />
        <SLabel>Title Tag</SLabel>
        <SInput placeholder="Title Tag" />

        {/* 
        <SLabel>Content</SLabel>
        <STextArea placeholder="Content" /> */}

        <UploadImg />

        {/* <MyInput /> */}
      </InputesBox>
      <SButton>Submit</SButton>
    </PostEditWrapper>
  );
};

export default EditOrCreate;
