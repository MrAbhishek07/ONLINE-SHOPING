import React, { useState } from 'react'
import './auth.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/config';
import { toast } from 'react-toastify';
import Loader from '../loader/loader';


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()



    const loginUser = (e) => {
        e.preventDefault()
        setIsLoading(true)


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                // const user = userCredential.user;
                setIsLoading(false);
                toast.success("Login Successful...!")
                navigate("/")

            })
            .catch((error) => {
                setIsLoading(false)
                toast.error(error.message);
            });
    }
    //Login with google//
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // const user = result.user;
                toast.success("Login Successfully...")
                navigate("/")
            }).catch((error) => {
                toast.error(error.message)
            });

    }


    return (
        <>
            {isLoading && <Loader />}
            <div className="login-page">
                <div className="img">
                    <img src="/asset/login.jpg" alt='login' width="700" style={{ marginTop: "120px" }} />
                </div>

                <div >
                    <form onSubmit={loginUser} className="register">
                        <div>
                            <h2 style={{ textAlign: "center", color: "orange" }}>Login</h2>
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
                        </div>
                        <div style={{ padding: "0px 00px 15px 0px" }}>
                            <button type='submit' className='btn btn-primary btn-block' style={{ width: "350px" }} >Login</button>
                        </div>
                        <div className="reset-coloumn">
                            <Link to="/reset">Reset Password</Link>
                        </div>
                        <p style={{ textAlign: "center" }}>-- or --</p>
                    </form>
                    <button className='btn btn-danger btn-block' style={{ width: "350px" }} onClick={signInWithGoogle} ><FaGoogle />Login with Google</button>
                    <span className='register'>



                        <p>Don't have an acount?<Link to="/register">Register</Link></p>
                    </span>

                </div>

            </div>
        </>


    )
}

export default Login;