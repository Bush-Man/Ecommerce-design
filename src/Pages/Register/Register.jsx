import React, { useState } from 'react'
import "./Register.css";
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserFunction } from '../../Redux/AuthActions.js';
const Register = () => {
  const dispatch = useDispatch();
  const {error,isLoading} = useSelector((state) => state.authReducer);
  const [user, setUser] = useState({ firstname: "", lastname: "", email: "", password: "", repeatpassword: "" });
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault()
    setUser({ ...user, [e.target.name]: e.target.value });

    
  }
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.repeatpassword) {
      dispatch(registerUserFunction(user));
      setSuccess((prev) => !prev);
      navigate("/login");
    }
    if (error) {
      setErr(true);
      setErrMessage(
        "User Already Exist"
      );
    } 
    if(user.password !== user.repeatpassword) {
      setErr(true);
      setErrMessage( 
        "Password Not Same");
    }
    
  }
  return (
    <div className='register'>
      <Link className='links' to="/">
      <div className='regLogo'>
        <img src="" alt="logo" />
        
      </div>
      </Link>
      <form className='regBody' onSubmit={handleSubmit} >   
        <span>
          {err && <span style={{color:"red",fontStyle:"italic",fontSize:"11px",fontWeight:"bold"}}>{errMessage}</span>}  
        </span>
        <span>
          {success && <span style={{color:"green",fontStyle:"italic",fontSize:"11px",fontWeight:"bold"}}>Thank You for joining us you have registered successfully.Login to your account.</span>} 
        </span>
        <section>
        <label >First Name</label>
        <input type="text" name="firstname"  onChange={handleChange} required/>
        </section>
        <section>
        <label >Last Name</label>
        <input type="text" name="lastname"  onChange={handleChange} required/>
        </section>
        <section>
        <label >Email</label>
        <input type="email" name="email"  onChange={handleChange} required />
        </section>
        <section>
        <label >Password</label>
        <input type="password" name="password" onChange={handleChange} required/>
        </section>
        <section>
        <label >Repeat Password</label>
        <input type="password" name="repeatpassword"  onChange={handleChange} required />
        </section>
        <button className='btnRegister' type='submit' disabled={isLoading}>REGISTER</button>
        
        <div className="regBottom">
         <Link className='links' to="/login">
              <div className="toLogin">
                  <h3>Already have an Account ?</h3>
                  <span style={{color:"var(--mainColor)",textDecoration:"underline"}}>Login</span>
              </div>
          </Link>
      </div>
    </form>
      
    </div>
  )
}

export default Register