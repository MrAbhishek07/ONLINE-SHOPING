import React from 'react'
import './auth.css'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa"


function Login() {
    return (
        <div className="login-page">
            <div className="img">
                <img src="/asset/login.jpg" alt='login' width="700" style={{ marginTop: "120px" }} />
            </div>

            <div >
                <form className="register">
                    <div>
                        <h2 style={{ textAlign: "center", color: "orange" }}>Login</h2>
                    </div>
                    <div className="from">
                        <div style={{ padding: "0px 0px 15px 0px" }}>
                            <input type="text" placeholder='Email' required style={{ width: "350px" }} />
                        </div>
                        <div style={{ padding: "0px 0px 15px 0px" }}>
                            <input type="password" placeholder='Password' required style={{ width: "350px" }} />
                        </div>
                    </div>
                    <div style={{ padding: "0px 00px 15px 0px" }}>
                        <button className='btn btn-primary btn-block' style={{ width: "350px" }} >Login</button>
                    </div>
                    <div className="reset-coloumn">
                        <Link to="/reset">Reset Password</Link>
                    </div>
                    <p style={{ textAlign: "center" }}>-- or --</p>
                </form>
                <button className='btn btn-danger btn-block' style={{ width: "350px" }} ><FaGoogle />Login with Google</button>
                <span className='register'>



                    <p>Don't have an acount?<Link to="/register">Register</Link></p>
                </span>

            </div>

        </div>


    )
}

export default Login;