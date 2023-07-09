import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const dropIn = {
    hidden: {
        opacity: 0, scale: 0.3,
        transition: {
            duration: 1.3,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
        }

    },
    visible: {
        opacity: 1, scale: 1
    },
    exit: {
        opacity: 0, scale: 0.5,
        transition: {
            duration: 0.5,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01]
        }
    }
};



function SignUp({ onCloseSignUp }) {

    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");

    const inputs = {
        username: email,
        password: password
    };

    const onRegister = () => {
        fetch("http://localhost:8080/api/v1/candidate/saveCandidate", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer khghewhgfdse",
            },
            method: "POST",
            body: JSON.stringify(inputs),
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    return Promise.all([response.json(), response.headers]);
                }

                else return Promise.reject("Invalid login attempt");
            })
            .then(([body, headers]) => {

                console.log(headers.get('Authorization'));



            })
            .catch((message) => {
                alert(message);
            });
    };


return (

    <>
        < div onClick={onCloseSignUp} className="signup-motion-con-w">
            <motion.div
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="for-in" onClick={(e) => e.stopPropagation()}>
                <div className="c1">
                    <lable onClick={onCloseSignUp} className='close'>X</lable>
                </div>
                <h1>Create Account</h1>

                <form>
                    <label >Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                    <label >Password</label>
                    <input type="password" onChange={(e) => setEmail(e.target.value)} required />
                    <label >Confirm Password</label>
                    <input type="password" />
                    <div className="button-con">
                        <button onClick={onRegister}>Create Account</button>
                    </div>
                </form>
                <lable onClick={onCloseSignUp}>Back to login</lable>
            </motion.div>
        </div>
    </>

)
}

export default SignUp
