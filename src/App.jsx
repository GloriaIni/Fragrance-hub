import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from "./Pages/Home"
// import Product from "./Pages/Product"
import Navbar from "./components/Navbar"
import MobileNavbar from "./components/MobileNavbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
// import ProductDetailPage from "./Pages/ProductDetailPage"
// import Cart from "./Pages/Cart"
// import PlaceOrder from "./Pages/PlaceOrder"
import ShopContextProvider from "./Context/ShopContext"
// import Information from "./components/Information"
// import Payment from "./components/Payment"
// import Address from "./components/Address"
// import Orders from "./Pages/Orders"
// import Login from "./Pages/Login"
// import ContactUs from "./Pages/ContactUs"
import { lazy, Suspense } from "react"

const Home = lazy(() => wait(5000).then(() => import("./Pages/Home")))
const Product = lazy(() => wait(3000).then(() => import("./Pages/Product")))
const ProductDetailPage = lazy(() => wait(3000).then(() => import("./Pages/ProductDetailPage")))
const Cart = lazy(() => wait(2000).then(()  => import("./Pages/Cart")))
const PlaceOrder = lazy(() => wait(2000).then(() => import("./Pages/PlaceOrder")))
const Orders = lazy(() => wait(1000).then(() => import("./Pages/Orders")))
const Login = lazy(() => wait(2000).then(() => import("./Pages/Login")))
const Information = lazy(() => wait(1000).then(() => import("./components/Information")))
const Payment = lazy(() => wait(3000).then(() => import("./components/Payment")))
const Address = lazy(() => wait(1000).then(() => import("./components/Address")))
const ContactUs = lazy(() => wait(2000).then(() => import("./Pages/ContactUs")))

function App() {
  return (
    <>
        <BrowserRouter>
         <div className="px-4; sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          
         </div>
            <ShopContextProvider>
            <Suspense fallback={<div className=" animate-fadeInOut h-[100vh] flex items-center justify-center">
              <h1 className=" text-[20px] font-bold font-inter">Fragrance.hub</h1>
            </div>}>
                <Navbar />
                <MobileNavbar />
                <SearchBar />
                   <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/product" element={<Product />} />
                      <Route path="/product/:id" element={<ProductDetailPage />} />
                      <Route path="/productdetail/:id"  element={<ProductDetailPage />} />
                      <Route path="/cart" element={<Cart />}/>
                      <Route path="/placeorder" element={<PlaceOrder />} />
                      <Route path="/orders" element={<Orders />}/>
                      <Route path="/login" element={<Login />}/>
                      <Route path="/contactus" element={<ContactUs />}/>
                      <Route path="/cart/product" element={<Product />} />
                      <Route path="/information" element={<Information />} />
                      <Route path="/payment" element={<Payment />} />
                      <Route path="/address" element={<Address />}/>
                    </Routes>
                <Footer />
              </Suspense>  
            </ShopContextProvider>
        </BrowserRouter>
    </>
  )
}
function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

export default App