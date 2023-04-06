import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
          <div className="footer-top">
              <div className="item">
                  <h3>ABOUT</h3>
                  <div>
              <span>Contact Us</span>
            <span>About Us</span>
            <span>Team</span>
            <span>PartnerShip Program</span>
            
                  </div>
              
          </div>
          <div className="item">
          <h3>HELP</h3>
          <div>
            <span>Payments</span>
            <span>Delivery</span>
            <span>FAQ</span>
            <span>Cancellation and Return</span>
            <span>Become a seller</span>


          </div>
          </div>
          <div className="item">
          <h3>POLICY</h3>
          <div>
            <span>Return Policy</span>
            <span>Terms of Use</span>
            <span>Seller Policy</span>
            <span>Privacy</span>
            <span>SiteMap</span>
          </div>
        </div>
        <div className="item">
          <h3>SOCIAL</h3>
          <div>
            <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
          </div>

        </div>
        <div className="item">
          <h3>JOIN US</h3>
          <div>
            <span>Become a seller</span>
          <span>Affiliate program</span>
          </div>
        </div>
          </div>
          <div className="footerBottom">
              <p>Copyright @ 2023</p>
          </div>
    </div>
  )
}

export default Footer