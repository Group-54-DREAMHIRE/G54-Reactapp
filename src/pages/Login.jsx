import { Form, Input } from 'antd'
import React from 'react'

const Login = () => {
  return (
    <>
      <h1>
        DreamHire Login
      </h1>
      <label htmlFor="">Email</label>
      <input type="email" />
      <label htmlFor="">Password</label>
      <input type="password" />
    </>
  )
}

export default Login
