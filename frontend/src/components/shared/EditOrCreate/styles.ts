import { Input, Button, Form } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

export const PostEditWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 100px;
`;

export const SInput = styled(Input)<{ submitInput?: boolean }>`
  margin-bottom: 30px;

  ${(props) =>
    props.submitInput &&
    `
      width: 100px;
      margin-top: 20px;
      margin-bottom: 20px
  `}
`;

export const SButton = styled(Button)`
  margin-bottom: 30px;
`;

export const STextArea = styled(TextArea)`
  margin-bottom: 50px;
`;

export const SForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const SLabel = styled.label``;

export const SubmitInputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
