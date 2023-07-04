import { AnimatePresence, motion } from "framer-motion";

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
                        <input type="email" />
                        <label >Password</label>
                        <input type="password" />
                        <label >Confirm Password</label>
                        <input type="password" />
                        <div className="button-con">
                            <button>Create Account</button>
                        </div>
                    </form>
                    <lable onClick={onCloseSignUp}>Back to login</lable>
                </motion.div>
            </div>
        </>

    )
}

export default SignUp
