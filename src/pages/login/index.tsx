import React, { Component, FormEvent } from 'react'
import { Button, Form, Input, Icon } from 'antd';
import { FormComponentProps } from "antd/lib/form/Form";

import router from 'umi/router';
import Banner from './banner/index'
import style from './style.less';

function hasErrors(fieldsError: any) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

interface LoginState {
    loading: boolean,
    message: string,
    isMount: boolean
}
class Login extends Component<FormComponentProps, LoginState> {
    state = {
        loading: false,
        message: '',
        isMount: false
    }
    constructor(props: FormComponentProps) {
        super(props)
    }
    componentDidMount() {
        const { form: { validateFields, setFieldsValue } } = this.props;
        // 一开始禁用提交按钮
        validateFields(() => void 0);

        // 开发时方便测试，填写表单
        if (process.env.NODE_ENV === 'development') {
            setFieldsValue({ userName: 'admin', password: '123456' });
        }

        setTimeout(() => this.setState({ isMount: true }), 200);
    }

    handleOnSubmit = (e: FormEvent) => {
        e && e.preventDefault();
        this.setState({ loading: true });
        this.props.form.validateFields((err, values) => {

            router.push('/');
            this.setState({ loading: false });
        })
    }

    hasErrors = () => {
    }
    public render() {
        const {
            getFieldDecorator,
            getFieldError,
            getFieldsError,
            isFieldTouched,
            getFieldsValue
        } = this.props.form;
        const { loading, message, isMount } = this.state;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        const formItemStyleName = isMount ? 'formItem active' : 'formItem';
        return (
            <div className={style.root}>
                <div className={style.left}>
                    <Banner />
                </div>
                <div className={style.right}>
                    <div className={style.box}>
                        <Form onSubmit={this.handleOnSubmit} className={style.inputLine}>
                            <div className={style.header}>
                                欢迎登陆
                            </div>
                            <div className={formItemStyleName}>
                                <Form.Item>{getFieldDecorator('userName', {
                                        rules: [{ required: true }]
                                    })(
                                        <Input  allowClear={true} autoFocus={true} prefix={<Icon type="user"style={{ fontSize: 13 }}/>} placeholder="用户名"/> 
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('userName', {
                                        rules: [{ required: true }]
                                    })(
                                        <Input  allowClear={true} autoFocus={true} prefix={<Icon type="user"style={{ fontSize: 13 }}/>} placeholder="用户名"/> 
                                    )}
                                </Form.Item>

                            </div>

                            <div className={formItemStyleName}>
                                <Button
                                    className={style.submitBtn}
                                    loading={loading}
                                    type="primary"
                                    htmlType="submit"
                                    disabled={hasErrors(getFieldsError())}
                                >
                                    登录
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form.create()(Login)
