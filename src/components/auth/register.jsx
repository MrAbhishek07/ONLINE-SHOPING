import React from 'react'
import { Link } from 'react-router-dom';


function Register() {
  return (

    <div className="register-page">


      <div >
        <form className="register">
          <div>
            <h2 style={{ textAlign: "center", color: "orange" }}>Register</h2>
          </div>
          <div className="from">
            <div style={{ padding: "0px 0px 15px 0px" }}>
              <input type="text" placeholder='Email' required style={{ width: "350px" }} />
            </div>
            <div style={{ padding: "0px 0px 15px 0px" }}>
              <input type="password" placeholder='Password' required style={{ width: "350px" }} />
            </div>
            <div style={{ padding: "0px 0px 15px 0px" }}>
              <input type="password" placeholder='Conform Password' required style={{ width: "350px" }} />
            </div>
          </div>
          <div style={{ padding: "0px 00px 15px 0px" }}>
            <button className='btn btn-primary btn-block' style={{ width: "350px" }} >Register</button>
          </div>

        </form>



        <p style={{textAlign:"center"}}>Already an acount?<Link to="/login">Login</Link></p>

      </div>
      <div className="img">
        <img src="/asset/register.jpg" alt='register' width="500" style={{ marginTop: "120px" }} />
      </div>

    </div>
  )
}

export default Register;