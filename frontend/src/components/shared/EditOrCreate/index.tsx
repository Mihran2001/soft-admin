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
import TextEditor, {
  serializeEditorValue,
  deserializeEditorValue,
} from "../../TextEditor";
import { formItems } from "constants/postFormItems";
import { postInitialData } from "constants/postFormItems";

interface IEditOrCreate {
  isEdit?: {};
  onSubmit?: any;
  postData?: any;
}

const EditOrCreate: FC<IEditOrCreate> = ({ isEdit, onSubmit, postData }) => {
  const [form] = SForm.useForm();
  const onFinish = (values: any) => {
    return onSubmit({
      ...values,
      content: serializeEditorValue(values.content),
    });
  };

  useEffect(() => {
    if (postData) {
      form.setFieldsValue({
        ...postData,
        content: deserializeEditorValue(postData.content),
      });
    }
  }, [form, postData]);
  return (
    <PostEditWrapper>
      <SForm
        onFinish={onFinish}
        layout={"vertical"}
        initialValues={postInitialData}
        form={form}
      >
        <SForm.Item name={"content"} label={"Content"}>
          <TextEditor />
        </SForm.Item>
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
