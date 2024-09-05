
import PlaceOrderNav from './PlaceOrderNav'
import Mastercard from "/Mastercard.svg"
import Visa from "/Visa.svg"
import paypal from "/paypal.svg"
import pcard from "/pcard.svg"
import mcard from "/mcard.svg"
import vcard from "/vcard.svg"
import { useNavigate } from 'react-router-dom'

const Payment = () => {
 const navigate = useNavigate()
  return (
    <>
      <PlaceOrderNav />
      <div className="container w-full sm:w-[600px] my-10 font-openSans">
          <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 p-2 px-3 cursor-pointer">
                <img className='hidden md:block' src={Mastercard} alt="" />
                <img className='block md:hidden' src={mcard} alt="" />
              </div>

              <div className="flex items-center gap-3 p-2 px-3 cursor-pointer">
                <img className='hidden md:block' src={Visa} alt="" />
                <img className='block md:hidden' src={vcard} alt="" />
                </div>

              <div className="flex items-center gap-3 p-2 px-3 cursor-pointer">
                  <img className='hidden md:block' src={paypal} alt="" />
                  <img className='block md:hidden' src={pcard} alt="" />
              </div>
          </div>

          <form action="">
              <div className="flex flex-col gap-2 my-6">
                <label htmlFor="cardnumber" className="">Card Number</label>
                <div className="relative ">
                    <input type="number"
                    name="number"  
                    id="number"
                    placeholder="**** **** ****** 8954"
                    className=" block w-full px-16 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink " 
                    />
                    
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                       <img src={mcard} alt="" />
                    </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 my-6">
                <label htmlFor="cardname" className="">Card Name</label>
                <input type="text"
                name="cardname"  
                id="cardname"
                placeholder="Card Name"
                className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink " 
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <div className="flex flex-1 flex-col gap-2 mb-3">
                  <label htmlFor="city" className="">Expiry Date</label>
                 <input type="date" 
                 name="date" 
                 id="date" 
                 className='px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink'/>
              </div>

              <div className="flex flex-1 flex-col gap-2 mb-3">
                  <label htmlFor="cvv" className="">CVV</label>
                  <input type="number" 
                  name="cvv" 
                  id="cvv"
                  placeholder="cvv" 
                  className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                  />
              </div>
          </div>

          <div className="">
            <p>Billing address same as shipping address</p>
          </div>

          <button onClick={() => navigate("/orders")}
               className="w-full text-sm my-8 px-8 py-2.5 rounded-[10px] font-bold shadow-md  bg-pink text-white cursor-pointer hover:bg-red-400">Proceed to pay</button>
          </form>
      </div>
      
    </>
  )
}

export default Payment