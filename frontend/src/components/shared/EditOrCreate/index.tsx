import React, { FC, useState } from "react";
import {
  PostEditWrapper,
  SInput,
  STextArea,
  SLabel,
  SForm,
  SubmitInputBox,
} from "./styles";
import UploadImg from "../../UploadImg";
import TextEditor from "../../TextEditor";
import { IPostTableData } from "../../../store/reducers/posts/types";
import { createPostApi, instance } from "../../../api/instance";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useAsyncActions } from "hooks/useActions";

interface IEditOrCreate {
  isEdit?: {};
  onSubmit?: any;
}

const EditOrCreate: FC<IEditOrCreate> = ({ isEdit, onSubmit }) => {
  const { createPost } = useAsyncActions();
  const submit = async (values: any) => {
    createPostApi(values, createPost);
  };

  return (
    <PostEditWrapper>
      <TextEditor />
      <SForm onFinish={submit} layout={"vertical"}>
        <SForm.Item name="title" label="Title">
          {/* <SLabel>Title</SLabel> */}
          <SInput placeholder="Title" />
        </SForm.Item>

        <SForm.Item name="url" label="URL">
          <SInput placeholder="URL" />
        </SForm.Item>

        <SForm.Item name="category" label="Category">
          <SInput placeholder="Category" />
        </SForm.Item>

        <SForm.Item name="parentCategory" label="Parent Category">
          <SInput placeholder="Parent Category" />
        </SForm.Item>

        <SForm.Item name="metaDescription" label="Meta Description">
          <SInput placeholder="Meta Description" />
        </SForm.Item>

        <SForm.Item name="titleTag" label="Title Tag">
          <SInput placeholder="Title Tag" />
        </SForm.Item>

        {/* 
        <SLabel>Content</SLabel>
        <STextArea placeholder="Content" /> */}

        <UploadImg />

        {/* <MyInput /> */}
        <SubmitInputBox>
          <SInput submitInput={true} type="submit" value="Submit" />
        </SubmitInputBox>
      </SForm>
    </PostEditWrapper>
  );
};

export default EditOrCreate;
