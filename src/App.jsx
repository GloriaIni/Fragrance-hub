import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import Navbar from "./components/Navbar"
import MobileNavbar from "./components/MobileNavbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import ProductDetailPage from "./Pages/ProductDetailPage"
import Cart from "./Pages/Cart"
import PlaceOrder from "./Pages/PlaceOrder"
import ShopContextProvider from "./Context/ShopContext"
import Information from "./components/Information"
import Payment from "./components/Payment"
import Address from "./components/Address"
import Orders from "./Pages/Orders"
import Login from "./Pages/Login"
import ContactUs from "./Pages/ContactUs"


function App() {
  return (
    <>
        <BrowserRouter>
         <div className="px-4; sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          
         </div>
            <ShopContextProvider>
                <Navbar />
                <MobileNavbar />
                <SearchBar />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/product" element={<Product />} />
                      <Route path="/product/:id" element={<ProductDetailPage />} />
                      <Route path="/productdetail/:id" element={<ProductDetailPage />} />
                      <Route path="/cart" element={<Cart />}/>
                      <Route path="/placeorder" element={<PlaceOrder />} />
                      <Route path="/information" element={<Information />} />
                      <Route path="/payment" element={<Payment />} />
                      <Route path="/address" element={<Address />}/>
                      <Route path="/orders" element={<Orders />}/>
                      <Route path="/login" element={<Login />}/>
                      <Route path="/contactus" element={<ContactUs />}/>
                    </Routes>
                    <Footer />
            </ShopContextProvider>
        </BrowserRouter>
    </>
  )
}

export default App