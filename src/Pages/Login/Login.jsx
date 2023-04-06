import React, {useState } from 'react'
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserFunction } from '../../Redux/AuthActions.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.authReducer);
    console.log(currentUser);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(loginUserFunction({ email, password }));
        //navigate(`{homepage/:userId}`) to home page with user
        navigate("/");

    }

  return (
      <div className='login'>
          <div className='loginLogo'>
              <Link className='links' to="/">
              <img src="" alt="name" />
              <h3>Bush Man Shop</h3>
              </Link>
          </div>
          <div className="wrapper">
          <div >
            <form onSubmit={handleSubmit} className="loginCenter" >
              <section>
              <label >Email</label>
              <input type="text" name="email" placeholder='email...' onChange={(e)=>setEmail(e.target.value)} required />
              </section>
              <section>
              <label >Password</label>
                      <input type="text" name="password" placeholder='password...' onChange={(e)=>setPassword(e.target.value)} required />
                      <div className='passVisible'>Show</div>
            </section>
              <button className='btnLogin' type='submit'>LOGIN</button>
            </form>   
            </div>

              <div className="bottom">
                  <Link className='links' to="/reset">
                   <div className="reset">
                  <h3>Forgot Password ?</h3>
                      <span style={{color:"var(--mainColor)",textDecoration:"underline"}}>Reset</span>
              </div>
                  </Link>
                  <Link className='links' to="/register">
              <div className="create">
                  <h3>Don't have an Account ?</h3>
                  <span style={{color:"var(--mainColor)",textDecoration:"underline"}}>Create One</span>
              </div>
                </Link>
           </div>
          </div>
          
    </div>
  )
}

export default Login