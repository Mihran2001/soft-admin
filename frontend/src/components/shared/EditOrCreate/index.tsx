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
import { instance } from "../../../api/instance";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

// import axios from "axios";

// import MyInput from "../../TestComponent";

interface IEditOrCreate {
  isEdit?: {};
}

const EditOrCreate: FC<IEditOrCreate> = ({ isEdit }) => {
  const submit = async (values: any) => {
    // console.log(values);
    // instance.post("admin/post", {
    //   // id: "2fasfafsa31421",
    //   title: "fagfsaaaaasa",
    //   content: "ffsasa",
    //   category: "fsfsaa",
    //   parentCategory: "ffsasa",
    //   titleTag: "ffsasa",
    //   metaDescription: "fsafsaa",
    //   url: "fsasf",
    //   image: "fsfsa",
    // });
    const postCreate = await instance.post("admin/post", values);
    // console.log(postCreate);
    // await instance.post("admin/post");
    // console.log("allPOsts", allPosts);
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
          {/* <SLabel>URL</SLabel> */}
          <SInput placeholder="URL" />
        </SForm.Item>

        <SForm.Item name="category" label="Category">
          {/* <SLabel>Category</SLabel> */}
          <SInput placeholder="Category" />
        </SForm.Item>

        <SForm.Item name="parentCategory" label="Parent Category">
          {/* <SLabel>Category</SLabel> */}
          <SInput placeholder="Parent Category" />
        </SForm.Item>

        <SForm.Item name="metaDescription" label="Meta Description">
          {/* <SLabel>Meta Description</SLabel> */}
          <SInput placeholder="Meta Description" />
        </SForm.Item>

        <SForm.Item name="titleTag" label="Title Tag">
          {/* <SLabel>Title Tag</SLabel> */}
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
