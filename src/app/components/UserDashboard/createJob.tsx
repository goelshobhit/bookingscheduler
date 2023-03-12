/**
 *
 * LoadingPage
 *
 */
import React, { memo } from 'react';
import { Button, Form, Input, Select, Card } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const CreateJob = memo(({ customerId, createUserJob }: any) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const payload = { values, customerId };
    createUserJob(payload);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Card title="Create Job">
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="name" label="Task Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="type" label="Task Type" rules={[{ required: true }]}>
          <Select placeholder="Select a option for the task" allowClear>
            {[
              'REVIEW_SALES',
              'REVIEW_PURCHASES',
              'COMPUTE_TAX',
              'ADD_TAX_TO_BOOKS',
            ].map(item => (
              <Option value={item}>{item}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
});
