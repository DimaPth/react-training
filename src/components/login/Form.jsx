import { Row, Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

const SignForm = ({ title, handleClick, children, register }) => {
  const { isLoading, isError } = useSelector((state) => state.auth);
  const { setIsError } = useActions();
  return (
    <Row justify="center" align="middle" style={{ height: "calc(100vh - 150px)" }}>
      <Card>
        <Form
          name="normal_login"
          style={{ minWidth: "300px" }}
          initialValues={{
            remember: true,
          }}
          onFinish={(e) => (register ? handleClick(e.username, e.email, e.password) : handleClick(e.email, e.password))}
        >
          {isError && <div style={{ color: "red", marginBottom: "10px", textAlign: "center" }}>{isError}</div>}
          {register && (
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              onFocus={() => setIsError(null)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              {
                min: 6,
                message: "Use 6 characters or more for your password",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onFocus={(e) => setIsError(null)}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }} loading={isLoading}>
              {title}
            </Button>
            {children}
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

export default SignForm;
