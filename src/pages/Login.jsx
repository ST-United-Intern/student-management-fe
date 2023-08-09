import { Col, Row, Input, Button, Form } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import "../assets/login/login.css";

const Login = () => {
  return (
    <div className="login-session">
      <Row className="login-container">
        <Col className="left_side_login" span={12}></Col>
        <Col className="right_side_login" span={24} lg={12}>
          <Form className="form-login">
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
                className="input-password"
                placeholder="Input password"
                prefix={<KeyOutlined className="site-form-item-icon" />}
                size="large"
              />
            </Form.Item>

            <Form.Item className="sub-btn">
              <Button htmlType="submit" size="large">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
