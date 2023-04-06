import React from 'react'
import "./Cart.css";
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Footer from '../../Components/Footer/Footer';
const Cart = () => {
    const prodCart = {
        img: "https://img.freepik.com/free-psd/contemporary-living-room-mockup-psd-interior-design_53876-129130.jpg?w=2000",
        desc:"Chair sofa Material",
        sellerID: "234634748",
        quantity: "5",
        price: "Ksh 5,000",
        oldPrice:"Ksh 4,000",
        total:"Ksh 25,000"

        
        
    }
  return (
      <> 
          <Navbar />
          <div className="cartParentDiv">
               
              <section className="cartSection">
                  <div className='cartProducts'>
                      
                 {/*Single cart product start*/}
                <div className="cartProdLeftSide">
                    <div className="cartCardTop">
                          
                      <img src={prodCart.img} alt="" className='prodCartImg'/>
                      <div className='cartProdDesc'>
                          <span>{prodCart.desc}</span>
                          <span>SellerID: {prodCart.sellerID}</span>

                          
                      </div>
                      <div className='cartProdPrice'>
                          <span className='cartPrice' >{prodCart.price}</span>
                          <span className='cartOldPrice'>{prodCart.oldPrice}</span>
                          
                      </div>
                    
                      
                  
                      </div>
                      <div className="cartCardBottom">
                          <button className="btnRemove">REMOVE ITEM</button>
                          <div className='quantityBtns'>
                              <span>-</span>
                              <span>{prodCart.quantity}</span>
                              <span>+</span>
                          </div>
                      </div>
                      
                      
              </div>
                  {/* Single Cart product end */}
                    {/*Single cart product start*/}
                <div className="cartProdLeftSide">
                    <div className="cartCardTop">
                          
                      <img src={prodCart.img} alt="" className='prodCartImg'/>
                      <div className='cartProdDesc'>
                          <span>{prodCart.desc}</span>
                          <span>SellerID: {prodCart.sellerID}</span>

                          
                      </div>
                      <div className='cartProdPrice'>
                          <span className='cartPrice' >{prodCart.price}</span>
                          <span className='cartOldPrice'>{prodCart.oldPrice}</span>
                          
                      </div>
                    
                      
                  
                      </div>
                      <div className="cartCardBottom">
                          <button className="btnRemove">REMOVE ITEM</button>
                          <div className='quantityBtns'>
                              <span>-</span>
                              <span>{prodCart.quantity}</span>
                              <span>+</span>
                          </div>
                      </div>
                      
                      
              </div>
                  {/* Single Cart product end */}
                    {/*Single cart product start*/}
                <div className="cartProdLeftSide">
                    <div className="cartCardTop">
                          
                      <img src={prodCart.img} alt="" className='prodCartImg'/>
                      <div className='cartProdDesc'>
                          <span>{prodCart.desc}</span>
                          <span>SellerID: {prodCart.sellerID}</span>

                          
                      </div>
                      <div className='cartProdPrice'>
                          <span className='cartPrice' >{prodCart.price}</span>
                          <span className='cartOldPrice'>{prodCart.oldPrice}</span>
                          
                      </div>
                    
                      
                  
                      </div>
                      <div className="cartCardBottom">
                          <button className="btnRemove">REMOVE ITEM</button>
                          <div className='quantityBtns'>
                              <span>-</span>
                              <span>{prodCart.quantity}</span>
                              <span>+</span>
                          </div>
                      </div>
                      
                      
              </div>
                  {/* Single Cart product end */}
                    {/*Single cart product start*/}
                <div className="cartProdLeftSide">
                    <div className="cartCardTop">
                          
                      <img src={prodCart.img} alt="" className='prodCartImg'/>
                      <div className='cartProdDesc'>
                          <span>{prodCart.desc}</span>
                          <span>SellerID: {prodCart.sellerID}</span>

                          
                      </div>
                      <div className='cartProdPrice'>
                          <span className='cartPrice' >{prodCart.price}</span>
                          <span className='cartOldPrice'>{prodCart.oldPrice}</span>
                          
                      </div>
                    
                      
                  
                      </div>
                      <div className="cartCardBottom">
                          <button className="btnRemove">REMOVE ITEM</button>
                          <div className='quantityBtns'>
                              <span>-</span>
                              <span>{prodCart.quantity}</span>
                              <span>+</span>
                          </div>
                      </div>
                      
                      
              </div>
                  {/* Single Cart product end */}
                  </div>
                  {/* Checkout card start */}
              <div className="checkoutCard">
                      <h3 style={{fontWeight:"700"}}>PRICE SUMMARY</h3>
                      <div className='checkoutCardBody'>
                          <div>
                              <h3>{`Price (${prodCart.quantity} items)`}</h3>
                              <h4>{prodCart.total}</h4>
                          </div>
                          <div>
                              <h3>Total Discount</h3>
                              <h4>{prodCart.total - (prodCart.oldPrice * prodCart.quantity)}</h4>
                          </div>
                          <div>
                              <h3>Total Amount</h3>
                              <h4>{prodCart.total}</h4>
                          </div>
                      
                      </div>
                      <button className="btnCheckOut">PLACE YOUR ORDER</button>
                    
                     
                  </div>
                  {/* Checkout card end */}
              </section>
             
              
          </div>
          <Footer />
    </>
  )
}

export default Cart