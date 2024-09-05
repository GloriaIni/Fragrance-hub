
import { useNavigate } from "react-router-dom"
import PlaceOrderNav from "./PlaceOrderNav"
import { useEffect, useState } from "react";

const Address = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    postal: '',
    state: '',
    country: ''
  });

  // check validity
  const [isFormValid, setIsFormValid] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  useEffect(() => {
    const { address, city, postal, state, country} = formData;

    // Simple validation: check if all fields are non-empty
    setIsFormValid(address.trim() !== '' && city.trim() !== '' && postal.trim() !== '' && state.trim() !== '' && country.trim() !== '');
  }, [formData]);


  const updateSubmit = async (event) => {
    event.preventDefault()

    await new Promise((resolve) => setTimeout(resolve, 1000));

    navigate("/payment")
  };

  return (
    <>
    <PlaceOrderNav />
    <div className="font-openSans w-full sm:w-[600px] container my-10 gap-4">
        <form onSubmit={updateSubmit} >
          <div className="flex flex-col gap-2 my-6">
            <label htmlFor="address" className="">Address</label>
            <input type="text"
             name="address"  
             id="address"
             placeholder="Address"
             className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
             value={formData.address}
             onChange={handleChange}
             />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <div className="flex flex-1 flex-col gap-2 mb-3">
                  <label htmlFor="city" className="">City</label>
                  <input type="text" 
                  name="city" 
                  id="city"
                  placeholder="City" 
                  className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                  value={formData.city}
                  onChange={handleChange}
                  />
              </div>

              <div className="flex flex-1 flex-col gap-2 mb-3">
                  <label htmlFor="postalcode" className="">Postal code</label>
                  <input type="number" 
                  name="postal" 
                  id="postal"
                  placeholder="Postal Code" 
                  className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                  value={formData.postal}
                  onChange={handleChange}
                  />
              </div>
          </div>

          <div className="flex gap-2 flex-col sm:flex-row sm:gap-4">
              <div className="flex flex-1 flex-col gap-2 my-3">
                  <label htmlFor="state" className="">State</label>
                  <input type="text" 
                  name="state" 
                  id="state"
                  placeholder="State" 
                  className="ppx-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                  value={formData.state}
                  onChange={handleChange}
                  />
              </div>

              <div className="flex flex-1 flex-col gap-2 my-3">
                  <label htmlFor="country" className="">Country</label>
                  <input type="text" 
                  name="country" 
                  id="country"
                  placeholder="Country" 
                  className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                  value={formData.country}
                  onChange={handleChange}
                  />
              </div>
          </div>
            
            <button type="submit" 
               disabled={!isFormValid}
               className={`w-full text-sm my-8 px-8 py-2.5 rounded-[10px] font-bold shadow-md ${isFormValid? " bg-pink text-white cursor-pointer hover:bg-red-400" : "bg-gray-300 text-white cursor-not-allowed"}`}>Continue</button>
        </form>
    </div>
  </>
 
  )
}

export default Address