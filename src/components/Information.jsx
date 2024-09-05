import { useNavigate } from "react-router-dom"
import PlaceOrderNav from "./PlaceOrderNav"
import { useEffect, useState } from "react";


const Information = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    number: ''
  });

  // check validity
  const [isFormValid, setIsFormValid] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  useEffect(() => {
    const { fullname, email, number } = formData;

    // Simple validation: check if all fields are non-empty
    setIsFormValid(fullname.trim() !== '' && email.trim() !== '' && number.trim() !== '');
  }, [formData]);


  const updateSubmit = async (event) => {
    event.preventDefault()

    await new Promise((resolve) => setTimeout(resolve, 1000));

    navigate("/address")
  };

  return (
    <>
      <PlaceOrderNav />
      <div className="font-openSans w-full sm:w-[600px] container my-10 gap-4">
          <form onSubmit={updateSubmit} >
            <div className="flex flex-col gap-2 my-6">
              <label htmlFor="fullname" className="">Full name</label>
              <input type="text"
               name="fullname"  
               id="fullname"
               placeholder="Full name"
               className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
               value={formData.fullname}
               onChange={handleChange}
               />
            </div>

            <div className="flex flex-col gap-2 my-6">
              <label htmlFor="Email address" className="">Email address</label>
              <input type="email" 
              name="email" 
              id="email"
              placeholder="Email address" 
              className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
              value={formData.email}
              onChange={handleChange}
               />
            </div>

            <div className="flex flex-col gap-2 my-6">
              <label htmlFor="Phone number" className="">Phone number</label>
               <input type="number" 
                name="number"
                id="number" 
                placeholder="Phone number" 
                className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                value={formData.number}
                onChange={handleChange}
                />
            </div>
              
              <button type="submit" 
                 disabled={!isFormValid}
                 className={`w-full text-sm my-8 px-8 py-2.5 rounded-[10px] font-bold shadow-md ${isFormValid? " bg-pink text-white cursor-pointer hover:bg-red-400" : "bg-gray-300 text-white cursor-not-allowed"}`}>Continue</button>
          </form>
      </div>
    </>
   
  )
}

export default Information