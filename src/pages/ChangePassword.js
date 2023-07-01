import { AnimatePresence, motion } from "framer-motion";
function ChangePassword() {
  return (
    <>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}

     className="change-main-w">
        <h1>Change Password</h1>
        <p className='ready'>Ready to jump back in?</p>
        <div className="form-con-w">
          <h3>Change Password</h3>
          <form>
            <label >Old Password</label>
            <input type="password" />
            <label >New Password</label>
            <input type="password" />
            <label >Confirm Password</label>
            <input type="password" />
            <button>Update</button>
          </form>
        </div>
      </motion.div>
    </>
  )
}

export default ChangePassword
