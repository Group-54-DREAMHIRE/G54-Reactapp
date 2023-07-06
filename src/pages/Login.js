import { Checkbox, Form, Input, message } from 'antd';
import { useEffect, useState } from 'react';
import ForgetPassword from '../Components/models/forget password/ForgetPassword';
import { AnimatePresence } from 'framer-motion';
import SignUp from './SignUp';



function Login({ handleLogin }) {
    const [isOpenFoget, setIsOpenForget] = useState(false);
    const onOpenForget = () => {
        setIsOpenForget(true);
    };
    const onCloseForget = () => {
        setIsOpenForget(false);
    };

    const [isOpenSignUp, setIsOpenSignUp] = useState(false);
    const onOpenSignUp = () => {
        setIsOpenSignUp(true);
    };
    const onCloseSignUp = () => {
        setIsOpenSignUp(false);
    };
    const [jwt, setJwt] = useState("");
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");

    const sendLoginRequest = () => {
        const reqBody = {
            username:username,
            password:password,
        };

        fetch("http://localhost:8080/api/auth/login",{
            headers: {
            "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(reqBody),
    })
        .then((response)=>{
            console.log(response);
            if(response.status === 200){
                return Promise.all([response.json(), response.headers]);
            }
                
            else return Promise.reject("Invalid login attempt");
        })
        .then(([body, headers])=>{
            
            console.log(headers.get('Authorization'));
        //     console.log(body);
        //    console.log( body.authorities[0].authority);
            
            
        })
        .catch((message)=>{
            alert(message);
        });
};
const onFinish = (values) => {
    console.log('Success:', values);
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
                            
                        >
                            
                                <label className='usernpass-w'>Username</label>
                                <Input className='inputu' placeholder="Username" value={username} onChange={(e)=>SetUsername(e.target.value)} required/>
                           
                            
                                <label className='usernpass-w'>Password</label>
                                <Input.Password placeholder="Password" className='inputp' value={password} required onChange={(e)=>SetPassword(e.target.value)}/>
                            
                            <Form.Item >
                                <div className="forget-w">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
                                    <span onClick={onOpenForget}>
                                        Forgot password
                                    </span>
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <button onClick={sendLoginRequest}>
                                    Log in
                                </button>
                            </Form.Item>
                            <div className="sign-up-w">
                                <label>Don't have an account?</label>
                                <label className='signup-w' onClick={onOpenSignUp}>Signup</label>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

           <AnimatePresence>
           {isOpenFoget && !isOpenSignUp && <ForgetPassword onCloseForget={onCloseForget}/>}
           {isOpenSignUp && !isOpenFoget && <SignUp onCloseSignUp={onCloseSignUp}/>}
           </AnimatePresence>
                
        </>
    )
}

export default Login
