import React, { Component, Fragment } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import {
  Card,
  Form,
  Input,
  DatePicker,
  Icon,
  Tooltip,
  InputNumber,
  Radio,
  Select,
  Button,
} from 'antd';
import styles from './style.less';
import { connect } from 'dva';

const FormItem = Form.Item;
const { TextArea } = Input;

const { RangePicker } = DatePicker;

class Index extends Component {
  onSubmit = (e: React.FormEvent) => {
    const { form, dispatch } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err: any, values: any) => {
      console.log(err, values);
      if (!err) {
        dispatch({
          type: 'formAndbasicForm/submitRegularForm',
          payload: values,
        });
      }
    });
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };
    const {
      form: { getFieldDecorator, getFieldValue },
      submitting,
    } = this.props;

    return (
      <PageHeaderWrapper content={<FormattedMessage id="formandbasic-form.basic.description" />}>
        <Card bordered={false}>
          <Form onSubmit={this.onSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="formandbasic-form.title.label" />}
            >
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'formandbasic-form.title.required' }),
                  },
                ],
              })(
                <Input
                  placeholder={formatMessage({ id: 'formandbasic-form.title.placeholder' })}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="formandbasic-form.date.label" />}
            >
              {getFieldDecorator('date', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'formandbasic-form.date.required' }),
                  },
                ],
              })(
                <RangePicker
                  style={{ width: '100%' }}
                  placeholder={[
                    formatMessage({ id: 'formandbasic-form.placeholder.start' }),
                    formatMessage({ id: 'formandbasic-form.placeholder.end' }),
                  ]}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="formandbasic-form.goal.label" />}
            >
              {getFieldDecorator('goal', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'formandbasic-form.goal.required' }),
                  },
                ],
              })(
                <Input.TextArea
                  placeholder={formatMessage({ id: 'formandbasic-form.goal.placeholder' })}
                  autoSize={{ minRows: 4, maxRows: 4 }}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="formandbasic-form.standard.label" />}
            >
              {getFieldDecorator('standard', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'formandbasic-form.standard.required' }),
                  },
                ],
              })(
                <TextArea
                  style={{ minHeight: 32 }}
                  placeholder={formatMessage({ id: 'formandbasic-form.standard.placeholder' })}
                  rows={4}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <Fragment>
                  <FormattedMessage id="formandbasic-form.client.label" />
                  <em className={styles.optional}>
                    <FormattedMessage id="formandbasic-form.form.optional" />
                    <Tooltip title={<FormattedMessage id="formandbasic-form.label.tooltip" />}>
                      <Icon type="info-circle-o" style={{ marginRight: 4 }} />
                    </Tooltip>
                  </em>
                </Fragment>
              }
            >
              {getFieldDecorator('client')(
                <Input
                  placeholder={formatMessage({ id: 'formandbasic-form.client.placeholder' })}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  <FormattedMessage id="formandbasic-form.invites.label" />
                  <em className={styles.optional}>
                    <FormattedMessage id="formandbasic-form.form.optional" />
                  </em>
                </span>
              }
            >
              {getFieldDecorator('invites')(
                <Input
                  placeholder={formatMessage({ id: 'formandbasic-form.invites.placeholder' })}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  <FormattedMessage id="formandbasic-form.weight.label" />
                  <em className={styles.optional}>
                    <FormattedMessage id="formandbasic-form.form.optional" />
                  </em>
                </span>
              }
            >
              {getFieldDecorator('weight')(
                <InputNumber
                  placeholder={formatMessage({ id: 'formandbasic-form.weight.placeholder' })}
                  min={0}
                  max={100}
                />,
              )}
              <span className="ant-form-text">%</span>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="formandbasic-form.public.label" />}
              help={<FormattedMessage id="formandbasic-form.label.help" />}
            >
              {getFieldDecorator('public', {
                initialValue: '1',
              })(
                <Radio.Group>
                  <Radio value="1">
                    <FormattedMessage id="formandbasic-form.radio.public" />
                  </Radio>
                  <Radio value="2">
                    <FormattedMessage id="formandbasic-form.radio.partially-public" />
                  </Radio>
                  <Radio value="3">
                    <FormattedMessage id="formandbasic-form.radio.private" />
                  </Radio>
                </Radio.Group>,
              )}
            </FormItem>
            {getFieldValue('public') === '2' ? (
              <FormItem {...formItemLayout} label=" " colon={false}>
                {getFieldDecorator('publicUsers')(
                  <Select mode="multiple" allowClear>
                    <Select.Option value="1">
                      <FormattedMessage id="formandbasic-form.option.A" />
                    </Select.Option>
                    <Select.Option value="2">
                      <FormattedMessage id="formandbasic-form.option.B" />
                    </Select.Option>
                    <Select.Option value="3">
                      <FormattedMessage id="formandbasic-form.option.C" />
                    </Select.Option>
                  </Select>,
                )}
              </FormItem>
            ) : null}
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                <FormattedMessage id="formandbasic-form.form.submit" />
              </Button>
              <Button style={{ marginLeft: 8 }}>
                <FormattedMessage id="formandbasic-form.form.save" />
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Form.create(
  connect(({ loading, formAndbasicForm }) => ({
    formAndbasicForm,
    submitting: loading.effects['formAndbasicForm/submitRegularForm'],
  })),
)(Index);
