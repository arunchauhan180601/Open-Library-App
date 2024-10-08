import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Shop from "./Pages/shop"
import Footer from "./Components/Footer/Footer"

import Trending_books from "./Components/Assets/Trending-Books.jpg"
import Classic_books from "./Components/Assets/Classic-books.avif"
import Recently_Returned from "./Components/Assets/Recently-Returned.jpg"



function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} > </Route>
          <Route path="/trending" element={<ShopCategory banner={Trending_books} category="Trending" />} > </Route>
          <Route path="/classic" element={<ShopCategory banner={Classic_books} category="Classic" />} > </Route>
          <Route path="/recently_returned" element={<ShopCategory banner={Recently_Returned} category="Recently_Returned" />} > </Route>
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} ></Route>
          </Route>

          <Route path="/cart" element={<Cart />} ></Route>
          <Route path="/login" element={<LoginSignup />} ></Route>

        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
