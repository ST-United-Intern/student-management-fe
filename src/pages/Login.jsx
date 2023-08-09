import { Col, Row, Input, Button, Form } from "antd";
import { useState } from "react";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import axios from "axios";
import "../assets/login/login.css";

const Login = () => {
  const API_URL = "http://localhost:3000/auth/login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [setLoginStatus] = useState("");

  const goToSignIn = () => {
    history.push("/");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const userData = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post(API_URL, userData);
      console.log("<<<<<<  >>>>>>", response.data);
      console.log("<<<<<<  >>>>>>", response.status);
      if (response.status === 201) {
        setLoginStatus("Đăng nhập thành công");
      } else {
        setLoginStatus("Đăng nhập thất bại: " + response.data.message);
      }
    } catch (error) {
      setLoginStatus("Đăng nhập thất bại: có lỗi xảy ra");
      console.error("Lỗi khi đăng nhập:", error);
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
                src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-34.jpg"
              />
            </Form.Item>
            <h1>Welcome to meo</h1>

            <p>Login to the Dashboard</p>

            <Form.Item
              className="form-name"
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                className="input-name"
                placeholder="Enter your email"
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
                value={username}
                onChange={handleUsernameChange}
              />
            </Form.Item>

            <Form.Item
              className="form-password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                className="input-password"
                placeholder="Input password"
                prefix={<KeyOutlined className="site-form-item-icon" />}
                size="large"
              />
            </Form.Item>

            <Row>
              <Col span={12}>
                <Form.Item className="sub-btn">
                  <Button htmlType="submit" size="large">
                    Login
                  </Button>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item className="sub-btn">
                  <Button size="large" onClick={goToSignIn}>
                    Sign In
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
