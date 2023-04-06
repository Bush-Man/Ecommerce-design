import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
      <div className='navBar'>
          <div className="leftSide">
              <Link className='links' to="/">
              <div className="logo">Bush Man Shop</div>
              </Link>
          </div>
          <div className="centerPart">
              
                  <input type="text" name="searchBar" className='searchBar' placeholder='#Find an item quickly' />
                  <button className="btnSearch">Search</button>
          
          </div>
          <div className="rightPart">
              <div className="auth">
                  <Link className='links' to="/login">
                  <button className='btnAuth'>Login</button>
                  </Link>
              </div>
              <Link className='links' to="/sell">
                  
              <div className="joinUs">
                  <button className='btnSell'>Sell Online</button>
              </div>
              </Link>
              <div className='selectBtn'>
                  <h1 style={{ fontSize: "12px", fontWeight:"bold"}}>More</h1>
                  <select >
                      <option value=""></option>
                      <option value="">Help</option>

                  </select>
              </div>
              <Link className="links" to="/cart">
              <div className="cartContainer">
                  <span className='cartAmnt'>0</span>
                  <span className='cartIcon'>cart</span>
              </div>
              </Link>
          </div>
    </div>
  )
}

export default Navbar