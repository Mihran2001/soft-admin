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
import { formItems } from "constants/postFormItems";
import { createPostInitialData } from "constants/postFormItems";

interface IEditOrCreate {
  isEdit?: {};
  onSubmit?: any;
  postData?: any;
}

const EditOrCreate: FC<IEditOrCreate> = ({ isEdit, onSubmit, postData }) => {
  const [editorContent, setEditorContent] = useState("");
  const findedPostData = useMemo(() => {
    if (isEdit) {
      return postData;
    } else {
      return createPostInitialData;
    }
  }, [postData, isEdit]);

  const onFinish = (values: any) => {
    return onSubmit({ ...values, content: editorContent });
  };

  // console.log("editorContent", editorContent);

  return (
    <PostEditWrapper>
      <TextEditor
        editorContent={editorContent}
        setEditorContent={setEditorContent}
      />

      <SForm
        onFinish={onFinish}
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
