import clsx from 'clsx';
import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

type FieldType = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  zipCode?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

interface BasicFormProps {
  initialValues: Partial<FieldType>;
}

function areEquals<T>(original: T, current: T) {
  return original === current;
}

const BasicForm: React.FC<BasicFormProps> = ({ initialValues }) => {
  const [formValues, setFormValues] = useState<FieldType>(initialValues);
  return (
  <Form
    initialValues={initialValues}
    onFinish={onFinish}
    layout="vertical"
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    onValuesChange={(_, allValues) =>setFormValues(allValues)}
  >
    <pre>
      {JSON.stringify(formValues)}
      </pre>
    <Form.Item<FieldType>
      label="First Name"
      name="firstName"
      className={clsx(
        'p-2! rounded-md',
        areEquals(formValues?.firstName, initialValues?.firstName) ? '' : 'bg-green-50',
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
        areEquals(formValues?.lastName, initialValues?.lastName) ? '' : 'bg-green-50',
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
        areEquals(formValues?.phone, initialValues?.phone) ? '' : 'bg-green-50',
      )}
      rules={[{ required: true, message: 'Please input your phone!' }]}
    >
      <IMaskInput
        mask={'(000) 0000 000'}
        className="ant-input css-dev-only-do-not-override-vrrzze ant-input-outlined ant-input-status-success"
        unmask={false}
      />
    </Form.Item>

    <Form.Item<FieldType>
      label="Zip Code"
      name="zipCode"
      className={clsx(
        'p-2! rounded-md',
        areEquals(formValues?.zipCode, initialValues?.zipCode) ? '' : 'bg-green-50',
      )}
      rules={[{ required: true, message: 'Please input your zip code!' }]}
    >
      <IMaskInput
        mask={'00000-0000'}
        className="ant-input css-dev-only-do-not-override-vrrzze ant-input-outlined ant-input-status-success"
        unmask={false}
      />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BasicForm;