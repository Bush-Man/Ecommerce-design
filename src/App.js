
import './App.css';

import Home from './Pages/Home/Home';

import {
  createBrowserRouter,
  RouterProvider,
  
 
} from "react-router-dom";
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Cart from './Pages/Cart/Cart';
import OfferBanner from './Components/OfferBana/OfferBanner';
//import SimilarProducts from './Components/SimilarProducts/SimilarProducts';
//import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/login",
    element:<Login/>
  },
  {
    path: "/register",
    element:<Register/>
  },
  {
    path: "/product/:id",
    element: <SingleProduct />
    
  },
  {
    path: "/cart",
    element:<Cart />


  }
])
function App() {

  return (
    <div className='App'>
      <OfferBanner />
      <RouterProvider router={router}/>
        
      
    </div>
  )
}

export default App;
