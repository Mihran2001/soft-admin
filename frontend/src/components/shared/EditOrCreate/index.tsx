import React, { FC, useEffect, useState } from "react";
import {
  PostEditWrapper,
  SInput,
  SButton,
  SForm,
  SubmitInputBox,
} from "./styles";
import UploadImg, { normFile } from "../../UploadImg";
import TextEditor, {
  serializeEditorValue,
  deserializeEditorValue,
} from "../../TextEditor";
import { formItems } from "constants/postFormItems";
import { postInitialData } from "constants/postFormItems";
import axios from "axios";
import { uploadImg } from "api/instance";

interface IEditOrCreate {
  isEdit?: {};
  onSubmit?: any;
  postData?: any;
}

const EditOrCreate: FC<IEditOrCreate> = ({ isEdit, onSubmit, postData }) => {
  const [form] = SForm.useForm();
  const [disabledButton, setDisabledButton] = useState(true);

  const onFinish = (values: any) => {
    return onSubmit({
      ...values,
      content: serializeEditorValue(values.content),
      image: values.image[0].response.url,
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

        <SForm.Item
          name={"image"}
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <UploadImg
            action="http://localhost:9001/upload/image"
            // data={(file) => console.log("file in promise", file)}
            setDisabledButton={setDisabledButton}
          />
        </SForm.Item>

        <SubmitInputBox>
          <SButton htmlType="submit" disabled={disabledButton}>
            Submit
          </SButton>
        </SubmitInputBox>
      </SForm>
    </PostEditWrapper>
  );
};

export default EditOrCreate;
