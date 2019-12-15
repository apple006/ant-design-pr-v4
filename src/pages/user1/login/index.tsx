import React, { Component } from 'react';

import { Tabs, Form, Input, Icon, Button, Checkbox, Alert } from 'antd';

import styles from './style.less';
import { uuid } from '@/utils/utils';
import { connect } from 'dva';
import { FormComponentProps } from 'antd/es/form';

const captchaBaseUrl = 'http://localhost:9000/common/captcha/image';

const FormItem = Form.Item;

@connect(({ login1, loading }: { login1: any; loading: any }) => ({
  login1,
  submitting: loading.effects['login1/login'],
}))
class Index extends Component<FormComponentProps> {
  state = {
    captchaUrl: '',
    captchaId: '',
    type: 'account',
  };

  componentDidMount(): void {
    this.changeCaptcha();
  }

  changeCaptcha = () => {
    const captchaId = uuid();
    this.setState({
      captchaId,
      captchaUrl: `${captchaBaseUrl}?captchaId=${captchaId}&timestap=${new Date().getTime()}`,
    });
  };

  login = () => {
    // @ts-ignore
    const {
      form: { validateFields },
      dispatch,
    } = this.props;
    const { type, captchaId } = this.state;
    validateFields((err: any, values: any) => {
      const values1 = values;
      if (!err) {
        if (type === 'account') {
          delete values1.mobile;
          delete values1.code;
          values1.captchaId = captchaId;
        } else {
          delete values1.userName;
          delete values1.password;
          delete values1.captcha;
        }
        dispatch({
          type: 'login1/login',
          payload: {
            ...values1,
            type,
          },
          callback: (response: { status: string }) => {
            if (response.status === 'error') {
              this.changeCaptcha();
            }
          },
        });
      }
    });
  };

  /**
   * 切换登陆方式
   * @param value
   */
  changeLoginType = (value: string) => {
    this.setState({
      type: value,
    });
  };

  renderMessage = (content: string) => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { captchaUrl, type } = this.state;
    // @ts-ignore
    const {
      form: { getFieldDecorator },
      submitting,
      login1,
    } = this.props;

    return (
      <div className={styles.main}>
        <Form>
          <Tabs onChange={this.changeLoginType}>
            <Tabs.TabPane tab="账户秘密登陆" key="account">
              {login1.status === 'error' &&
                type === 'account' &&
                !submitting &&
                this.renderMessage(login1.errMsg)}
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [
                    {
                      required: true,
                      message: '请输入用户名',
                    },
                  ],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码',
                    },
                  ],
                })(
                  <Input
                    type="password"
                    size="large"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />,
                )}
              </FormItem>
              <FormItem className={styles.captcha}>
                {getFieldDecorator('captcha', {
                  rules: [
                    {
                      required: true,
                      message: '请输入验证码',
                    },
                  ],
                })(
                  <Input
                    size="large"
                    suffix={<img alt="" onClick={this.changeCaptcha} src={captchaUrl} />}
                    prefix={<Icon type="folder" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />,
                )}
              </FormItem>
            </Tabs.TabPane>
            <Tabs.TabPane tab="手机号登陆" key="mobile">
              <FormItem>
                {getFieldDecorator('mobile')(
                  <Input
                    size="large"
                    prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('code')(
                  <Input
                    size="large"
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />,
                )}
              </FormItem>
            </Tabs.TabPane>
          </Tabs>
          <FormItem>
            {getFieldDecorator('rememberMe', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>自动登陆</Checkbox>)}
          </FormItem>
          <Button loading={submitting} onClick={this.login} block type="primary" size="large">
            登陆
          </Button>
        </Form>
      </div>
    );
  }
}

const LoginForm = Form.create()(Index);
export default LoginForm;
