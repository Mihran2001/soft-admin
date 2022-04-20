import React, { FC, useEffect, useMemo, useState } from "react";
import {
  PostEditWrapper,
  SInput,
  STextArea,
  SButton,
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
import { formItems } from "constants/postFormItems";
import { createPostInitialData } from "constants/postFormItems";

interface IEditOrCreate {
  isEdit?: {};
  onSubmit?: any;
  postData?: any;
}

const EditOrCreate: FC<IEditOrCreate> = ({ isEdit, onSubmit, postData }) => {
  // console.log("postDataaaaaaaaaaaaa", postData);

  const findedPostData = useMemo(() => {
    if (isEdit) {
      return postData;
    } else {
      return createPostInitialData;
    }
  }, [postData, isEdit]);

  return (
    <PostEditWrapper>
      <TextEditor />
      <SForm
        onFinish={onSubmit}
        layout={"vertical"}
        initialValues={findedPostData}
      >
        {formItems.map((item) => {
          return (
            <SForm.Item name={item.name} label={item.label}>
              <SInput placeholder={item.label} />
            </SForm.Item>
          );
        })}
        <UploadImg />

        <SubmitInputBox>
          <SButton htmlType="submit">Submit</SButton>
        </SubmitInputBox>
      </SForm>
    </PostEditWrapper>
  );
};

export default EditOrCreate;
