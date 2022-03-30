import React, { FC, useState } from "react";
import { Button, Form, Input } from "antd";
import { rules } from "../../../utils/rules";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../../store/reducers/auth/action-creators";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

const LoginForm: FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useActions();

  const submit = () => {
    login(username, password);
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="User name"
        name="username"
        rules={[rules.required("Please enter username!")]}
      >
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "175px" }}
        />
      </Form.Item>
      <Form.Item
        label="password"
        name="password"
        rules={[rules.required("Please enter password")]}
      >
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
          style={{ marginLeft: "7px", width: "175px" }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
