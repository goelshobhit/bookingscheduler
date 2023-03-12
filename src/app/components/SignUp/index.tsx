/**
 *
 * SignUp
 *
 */
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input, Card } from 'antd';
import styled from 'styled-components/macro';
import { useSignUpSlice } from 'app/pages/SignUp';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const SignUp = memo(() => {
  const { actions } = useSignUpSlice();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (values: any) => {
    dispatch(actions.createUser(values));
    onReset();
  };

  return (
    <Div>
      <Card>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: 10 }}
            >
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Div>
  );
});

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
