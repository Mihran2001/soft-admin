import React, { FC, useState } from "react";
// import { Button, Form, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { rules } from "../../../utils/rules";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../../store/reducers/auth/action-creators";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions, useAsyncActions } from "../../../hooks/useActions";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { SForm, SButton, SInput } from "./styles";

const LoginForm: FC = () => {
  const location: any = useLocation();
  const navigate = useNavigate();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAsyncActions();

  const from = location.state?.from?.pathname || "/";

  const submit = () => {
    login(username, password).then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <SForm onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <SForm.Item
        // label="User name"
        name="username"
        rules={[rules.required("Please enter username!")]}
      >
        {/* <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "175px" }}
        /> */}
        <SInput
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          onChange={(e) => setUsername(e.target.value)}
        />
      </SForm.Item>
      <SForm.Item
        // label="password"
        name="password"
        rules={[rules.required("Please enter password")]}
      >
        {/* <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
          style={{ marginLeft: "7px", width: "175px" }}
        /> */}
        <SInput
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </SForm.Item>
      <SForm.Item>
        <SButton type="primary" htmlType="submit" loading={isLoading}>
          Login
        </SButton>
      </SForm.Item>
    </SForm>
  );
};

export default LoginForm;
