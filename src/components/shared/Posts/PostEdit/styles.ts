import { Input } from "antd";
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
  /* width: 50%; */
  margin-bottom: 50px;
`;

export const STextArea = styled(TextArea)`
  /* width: 50%; */
  margin-bottom: 50px;
`;

export const InputesBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const SLabel = styled.label``;
