import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

function Login({handleLogin}) {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <div className="login-main-con-w">
                <div className="pic-con-w">
                    This is pic con
                </div>
                <div className="form-con-main">
                    <div className="form-con">
                        <h2>Login to DREAMHIRE</h2>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <label className='usernpass-w'>Username</label>
                                <Input className='inputu' placeholder="Username" />
                            </Form.Item>
                            <Form.Item

                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <label className='usernpass-w'>Password</label>
                                <Input.Password placeholder="Password" className='inputp' />
                            </Form.Item>
                            <Form.Item >
                                <div className="forget-w">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
                                    <span>
                                        Forgot password
                                    </span>
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <button onClick={handleLogin}>
                                    Log in
                                </button>
                            </Form.Item>
                            <div className="sign-up-w">
                                <label>Don't have an account?</label>
                                <label className='signup-w'>Signup</label>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
