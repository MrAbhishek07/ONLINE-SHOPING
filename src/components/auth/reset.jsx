import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../firebase/config';


const Reset = () => {

  const [email, setEmail] = useState("")

  const resetPassword = (e) => {
    e.preventDefault()

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your email for link")
      })
      .catch((error) => {
        toast.error(error.message)
      });

  }

  return (
    <div className="reset-page">
      <div className="img">
        <img src="/asset/reset.jpg" alt='reset' width="400" style={{ marginTop: "120px" }} />
      </div>

      <div >
        <form onSubmit={resetPassword} className="reset">
          <div>
            <h2 style={{ textAlign: "center", color: "orange" }}>Reset Password</h2>
          </div>
          <div className="from">
            <div style={{ padding: "0px 0px 15px 0px" }}>
              <input type="text" placeholder='Email' required style={{ width: "350px" }} value={email} onChange={(e) =>
                setEmail(e.target.value)} />
            </div>
          </div>
          <div style={{ padding: "0px 00px 15px 0px" }}>
            <button type='submit' className='btn btn-primary btn-block' style={{ width: "350px" }} >Reset Password</button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <Link to="/login">- Login</Link>
            </p>
            <p>
              <Link to="/register">- Register</Link>
            </p>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Reset;