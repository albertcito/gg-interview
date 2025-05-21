import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import { IMaskInput } from 'react-imask';
import type { FormProps } from 'antd';
import { Button, Form, Select } from 'antd';
import { getModifiedValues } from './getModifiedValues';


const schools = [
  {
    bid: 1,
    name: 'Depaul University',
  },
  {
    bid: 2,
    name: 'University of Illinois at Chicago',
  },
  {
    bid: 3,
    name: 'Illinois Institute of Technology',
  },
  {
    bid: 4,
    name: 'University of Illinois at Urbana-Champaign',
  },
];

type FieldType = {
  schools?: number[];
  zipCode?: string;
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


const AddressForm: React.FC<BasicFormProps> = ({ initialValues = {} }) => {
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
    <pre>
      {JSON.stringify(formValues)}
    </pre>
    <Form.Item
      label="Schools"
      name="schools"
      className={clsx(
        'p-2! rounded-md',
        status.schools ? 'bg-green-50' : '',
      )}
    >
      <Select
        options={schools.map((school) => ({
          label: school.name,
          value: school.bid,
        }))}
        allowClear
        mode="multiple"
      />
    </Form.Item>

    <Form.Item<FieldType>
      label="Zip Code"
      name="zipCode"
      className={clsx(
        'p-2! rounded-md',
        status.zipCode ? 'bg-green-50' : '',
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

export default AddressForm;