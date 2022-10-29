import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../components/firebase/config"
import Loader from '../loader/loader';




const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false);


  const navigate = useNavigate()



  const registerUser = (e) => {
    e.preventDefault()
    if (password !== cPassword) {
      toast.error("Password do not match")
    }

    setIsLoading(true)



    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log(user);
        setIsLoading(false)
        toast.success("Registaration Successful...")
        navigate("/login")
      })
      .catch((error) => {
        toast.error(error.message)
        setIsLoading(false)
      });

  }


  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <div className="register-page">


        <div >
          <form className="register" onSubmit={registerUser}>
            <div>
              <h2 style={{ textAlign: "center", color: "orange" }}>Register</h2>
            </div>
            <div className="from">
              <div style={{ padding: "0px 0px 15px 0px" }}>
                <input type="text" placeholder='Email' required style={{ width: "350px" }} value={email} onChange={(e) =>
                  setEmail(e.target.value)} />
              </div>
              <div style={{ padding: "0px 0px 15px 0px" }}>
                <input type="password" placeholder='Password' required style={{ width: "350px" }} value={password} onChange={(e) =>
                  setPassword(e.target.value)} />
              </div>
              <div style={{ padding: "0px 0px 15px 0px" }}>
                <input type="password" placeholder='Conform Password' required style={{ width: "350px" }} value={cPassword} onChange={(e) =>
                  setCPassword(e.target.value)} />
              </div>
            </div>
            <div style={{ padding: "0px 00px 15px 0px" }}>
              <button type='submit' className='btn btn-primary btn-block' style={{ width: "350px" }} >Register</button>
            </div>

          </form>



          <p style={{ textAlign: "center" }}>Already an acount?<Link to="/login">Login</Link></p>

        </div>
        <div className="img">
          <img src="/asset/register.jpg" alt='register' width="500" style={{ marginTop: "120px" }} />
        </div>

      </div>
    </>
  )
}

export default Register;