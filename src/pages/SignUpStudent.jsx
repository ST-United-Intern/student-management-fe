/* eslint-disable no-unused-vars */
import { Col, Row, Input, Button, Form } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import axios from "axios";

import "../assets/login/login.css";

const SignUpStudent = () => {
  const API_URL = "http://localhost:3000/auth/register/student";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    const userData = {
      username: username,
      password: password,
      code: code,
    };

    try {
      const response = await axios.post(API_URL, userData);
      if (response.status === 201) {
        setRegistrationStatus("Đăng ký thành công");
      } else {
        setRegistrationStatus("Đăng ký thất bại: " + response.data.message);
      }
    } catch (error) {
      setRegistrationStatus("Đăng ký thất bại: có lỗi xảy ra");
      console.error("Lỗi khi đăng ký:", error);
    }
  };

  return (
    <div className="login-session">
      <Row className="login-container">
        <Col className="left_side_login" span={12}></Col>
        <Col className="right_side_login" span={24} lg={12}>
          <Form className="form-login" onFinish={handleSubmit}>
            <Form.Item className="form-logo">
              <img
                className="login-image"
                src="https://hinhnen4k.com/wp-content/uploads/2023/02/anh-gai-xinh-2k4-1.png"
              />
            </Form.Item>
            <h3>Welcome to Contests</h3>
            <p>Login to the Dashboard</p>
            <Form.Item
              className="form-name"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                value={username}
                onChange={handleUsernameChange}
                className="input-name"
                placeholder="Enter your username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
              />
            </Form.Item>

            <Form.Item
              className="form-password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                value={password}
                onChange={handlePasswordChange}
                className="input-password"
                placeholder="Input password"
                prefix={<KeyOutlined className="site-form-item-icon" />}
                size="large"
              />
            </Form.Item>

            <Form.Item
              className="form-name"
              name="code"
              rules={[{ required: true, message: "Please input your code!" }]}
            >
              <Input
                value={code}
                onChange={handleCodeChange}
                className="input-name"
                placeholder="Enter your code"
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
              />
            </Form.Item>

            <Form.Item className="sub-btn">
              <Button htmlType="submit" size="large">
                Sign up student
              </Button>
            </Form.Item>
            <p>{registrationStatus}</p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignUpStudent;
