import React, { FC } from "react";
import {
  PostEditWrapper,
  SInput,
  STextArea,
  SLabel,
  InputesBox,
} from "./styles";
import UploadImg from "../../../UploadImg";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const PostEdit: FC = () => {
  return (
    <PostEditWrapper>
      <Editor
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        // editorStyle={<h1>dsa</h1>}
      />
      <InputesBox>
        <SLabel>Title</SLabel>

        <SInput placeholder="Title" />
        <SLabel>Content</SLabel>

        <STextArea placeholder="Content" />
        <UploadImg />
      </InputesBox>
    </PostEditWrapper>
  );
};

export default PostEdit;
