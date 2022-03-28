import React, { FC } from "react";
import {
  PostEditWrapper,
  SInput,
  STextArea,
  SLabel,
  InputesBox,
} from "./styles";
import UploadImg from "../../../UploadImg";
import { Editor, EditorState } from "draft-js";
import TextEditor from "../../../TextEditor";

const PostEdit: FC = () => {
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
      </InputesBox>
    </PostEditWrapper>
  );
};

export default PostEdit;
