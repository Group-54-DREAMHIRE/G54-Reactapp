import { AnimatePresence, motion} from "framer-motion";

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



function ForgetPassword({ onCloseForget }) {

    return (

        <>
            < div onClick={onCloseForget} className="forget-motion-con-w">
                <motion.div
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="for-in" onClick={(e) => e.stopPropagation()}>
                    <div className="c1">
                        <lable onClick={onCloseForget} className='close'>X</lable>
                    </div>
                    <h1>Forget Password</h1>
                    <label className='txt'>Enter your email and we'll send you a link to reset your password</label>
                    <form onSubmit={onCloseForget}>
                        <input type="email" placeholder='Enter your email' id="valEmail" required />
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Submit
                        </motion.button>
                    </form>
                    <lable onClick={onCloseForget}>Back to login</lable>
                </motion.div>
            </div>
        </>

    )
}

export default ForgetPassword
