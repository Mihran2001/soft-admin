import { Input, Button } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

export const PostEditWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 100px;
`;

export const SInput = styled(Input)`
  margin-bottom: 30px;
`;

export const STextArea = styled(TextArea)`
  margin-bottom: 50px;
`;

export const InputesBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const SLabel = styled.label``;

export const SButton = styled(Button)`
  margin-top: 20px;
`;
