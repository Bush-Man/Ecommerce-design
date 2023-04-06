
import "./SingleProduct.css";
import Hoe from "../../images/Hoe.jpg";
import Navbar from "../../Components/Navbar/Navbar.jsx";
//import SimilarProducts from "../../Components/SimilarProducts/SimilarProducts";

import person1 from "../../images/Himg/person 1.jpeg";
import person2 from "../../images/Himg/person 2.jpeg";
import person3 from "../../images/Himg/person 3.jpeg";
import person4 from "../../images/Himg/person 4.jpeg";
import star from "../../images/Himg/star.png";
import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
//import { useLocation } from "react-router-dom";
const SingleProduct = () => {
   // const location = useLocation();
    //const productId = location.pathname.split("/")[2];
    
    const Prod = {
        _id: 1,
        image: Hoe,
        rating:5,
        name: "Garden Rake Head for Land Farrowing, Normal steel iron metal",
        available: true,
        prodRev: [
            { name: "John", rev: "The Best" },
            { name: "Jackline", rev: "Durable" }],
        brand: "Alibaba",
        quantity: 1,
        
        type:"Steel",
        price: "Ksh 10",
        
    }
    useEffect(() => {
        window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
    })
  
    
    return (
        <>
        <Navbar />
        <div className="parentDiv">
        
        
            
            {/*product image and purchase info*/}
      <section className='prodWrapper'>
          <div className="prodRight">
                    <img src={Prod.image} alt="" />
                    <span>Add to Wishlist</span>
          </div>
            <div className="prodCenter">
                <div className="prodCenterWrapper">

              <div className="prodDesc">
                  
                  {Prod.name}
              </div>
              
              <div className="prodRate">
                    <span>
                                Rating <span className="rateValDes">{Prod.rating}
                                    
                                </span>
                                
                  </span>
                  <span>Reviews ({Prod.prodRev.length})</span>
                        </div>
                        <div className="priceDiv">
                            <span className="newPric">{Prod.price}</span>
                            <span className="oldPric">Ksh 15</span>
                            <span className="prctOff">50% discount</span>
                        </div>
                        
              <div className="quantity">
                  Quantity: 
                    <div>
                    <span style={{paddingLeft:"10px",paddingRight:"10px"}} >-</span>
                  {Prod.quantity} 
                  <span>+</span>
              </div>
                        </div>
                        
                        <div className="prodInfo">
                    <h3>Product Information</h3>
                  <div><span style={{fontWeight:"bold"}}>Company</span><span>{Prod.brand}</span></div>
                  <div><span  style={{fontWeight:"bold"}}>Type</span><span>{Prod.type}</span></div>
              </div>
            </div>
               <div className="prodBottom">
              <button className="btnCart">
                  ADD TO CART
              </button>
              <button className="btnBuy">
                  BUY NOW
              </button>
      </div>
              
          </div>
           <div className="otherInfo">
                    <h4>Product Description</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis doloribus, cupiditate, incidunt quia eos, necessitatibus nostrum pariatur cum soluta voluptatum qui perferendis officia. Recusandae veniam natus repellendus sequi quasi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officiis recusandae vitae hic, voluptatem optio quae cumque reprehenderit odio officia aperiam asperiores expedita minima vel culpa. Fugiat illo nisi necessitatibus?
                </p>
            </div>
         
        </section>
                    <hr style={{ maxWidth: "78%", color: "grey" }} className="hrLine"/>
                  
                    
            <section className="reviews">
                    
                        <h1>Product Rating and Customer Feedbacks</h1>
                        <div className="rating">
                                Rating Summary
                        </div>
                        <div className="feedBacks">
                            
                              {/*review card start */}
                                <div className="revCard" >
                                    <div className="revCardTop">
                                    <img src={person1} alt="" />
                                    <div>
                                     <span>Faith Wendy</span>
                                    <span className="ratingStarsCard">
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                    </span>
                                    </div>
                                        
                                    </div>
                                   <div className="revCardBtm">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odit atque fugit, sunt blanditiis debitis rem vero cumque accusamus hic excepturi numquam minus placeat eligendi. Non exercitationem eaque labore facere!
                                    </p>
                                   </div>


                                </div>
                                {/*review card end */}
                                {/*review card start */}
                                <div className="revCard" >
                                    <div className="revCardTop">
                                    <img src={person2} alt="" />
                                    <div>
                                     <span>Lisa M.</span>
                                    <span className="ratingStarsCard">
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                    </span>
                                    </div>
                                        
                                    </div>
                                   <div className="revCardBtm">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odit atque fugit, sunt blanditiis debitis rem vero cumque accusamus hic excepturi numquam minus placeat eligendi. Non exercitationem eaque labore facere!
                                    </p>
                                   </div>


                                </div>
                            {/*review card end */}
                            {/*review card start */}
                                <div className="revCard" >
                                    <div className="revCardTop">
                                    <img src={person3} alt="" />
                                    <div>
                                     <span>Johnte</span>
                                    <span className="ratingStarsCard">
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                    </span>
                                    </div>
                                        
                                    </div>
                                   <div className="revCardBtm">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odit atque fugit, sunt blanditiis debitis rem vero cumque accusamus hic excepturi numquam minus placeat eligendi. Non exercitationem eaque labore facere!
                                    </p>
                                   </div>


                                </div>
                            {/*review card end */}
                            {/*review card start */}
                                <div className="revCard" >
                                    <div className="revCardTop">
                                    <img src={person4} alt="" />
                                    <div>
                                     <span>Naomi</span>
                                    <span className="ratingStarsCard">
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                        <img src={star} alt=""/>
                                    </span>
                                    </div>
                                        
                                    </div>
                                   <div className="revCardBtm">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odit atque fugit, sunt blanditiis debitis rem vero cumque accusamus hic excepturi numquam minus placeat eligendi. Non exercitationem eaque labore facere!
                                    </p>
                                   </div>


                                </div>
                            {/*review card end */}
                          
                            </div>
                            <h3 style={{color:"var(--mainColor)"}}>See More</h3>
                        
                        
                        
                    </section>
                    
     
            
              
    </div>
   <Footer />
    </>
  )
}

export default SingleProduct