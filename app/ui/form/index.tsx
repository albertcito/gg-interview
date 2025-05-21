import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import { IMaskInput } from 'react-imask';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { getModifiedValues } from './getModifiedValues';

type FieldType = {
  firstName?: string;
  lastName?: string;
  phone?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

interface BasicFormProps {
  initialValues?: Partial<FieldType>;
}

const stringOnlyNumbers = (value?:string) => `${value}`.replace(/\D/g, "");

const BasicForm: React.FC<BasicFormProps> = ({ initialValues = {} }) => {
  const [formValues, setFormValues] = useState<FieldType>(initialValues);
  const status = useMemo(() => getModifiedValues(formValues, initialValues), [formValues, initialValues]);
  return (
  <Form
    initialValues={initialValues}
    onFinish={onFinish}
    layout="vertical"
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    onValuesChange={(_, allValues) =>setFormValues(allValues)}
  >
    <Form.Item<FieldType>
      label="First Name"
      name="firstName"
      className={clsx(
        'p-2! rounded-md',
        status.firstName ? 'bg-green-50' : '',
      )}
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Last Name"
      name="lastName"
      className={clsx(
        'p-2! rounded-md',
        status.lastName ? 'bg-green-50' : '',
      )}
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Phone"
      name="phone"
      className={clsx(
        'p-2! rounded-md',
        status.phone ? 'bg-green-50' : '',
      )}
      rules={[{ required: true, message: 'Please input your phone!' }]}
    >
      <IMaskInput
        mask={'(000) 0000 000'}
        className="ant-input css-dev-only-do-not-override-vrrzze ant-input-outlined ant-input-status-success"
        unmask={false}
      />
    </Form.Item>

    <pre>
      {JSON.stringify(status, null, 2)}
    </pre>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BasicForm;