import React, { FC } from "react";
import {
  PostEditWrapper,
  SInput,
  STextArea,
  SLabel,
  InputesBox,
} from "./styles";
import UploadImg from "../../../UploadImg";

const PostEdit: FC = () => {
  return (
    <PostEditWrapper>
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
