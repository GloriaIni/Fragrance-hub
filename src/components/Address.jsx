
import { useNavigate } from "react-router-dom"
import PlaceOrderNav from "./PlaceOrderNav"
import { useForm } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  postal: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid postal code format"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required")
})

const Address = () => {
  
      const navigate = useNavigate()
      const {register, 
            handleSubmit,
            setError,
            setValue,
            formState: {errors, isSubmitting}
        } = useForm({
          defaultValues: {
            address: '',
            city: '',
            postal: '',
            state: '',
            country: ''
          },
          resolver: zodResolver(schema)
    })

    const onSubmit = async (data) => {
      try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      navigate("/login")
      
      } catch (error) {
      setError("root", {
          message: "Submission error"
      })
      }  
    }
    

      return (
        <>
        <PlaceOrderNav />
        <div className="font-openSans w-full sm:w-[600px] container my-10 gap-7">
            <form onSubmit={handleSubmit(onSubmit)}>

              {/* Address field */}
              <div className="relative flex flex-col gap-2 my-6">
                <label htmlFor="address" className="">Address</label>
                <input  {...register("address")}
                type="text"
                placeholder="Address"
                className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                />
                 {errors.address && (
              <div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3">
                <RiErrorWarningFill />{errors.address.message}
              </div>
            )}
              </div>

                 {/* city field */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="relative flex flex-1 flex-col gap-2 mb-3">
                      <label htmlFor="city" className="">City</label>
                      <input {...register("city")}
                      type="text" 
                      placeholder="City" 
                      className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                      maxLength={10}/>
                      {errors.city && (
                  <div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3">
                    <RiErrorWarningFill />{errors.city.message}
                </div>
              )}
                  </div>
                     
                     {/* postal field */}
                  <div className="relative flex flex-1 flex-col gap-2 mb-3">
                      <label htmlFor="postalcode" className="">Postal code</label>
                      <input  {...register("postal")}
                      type="number" 
                      placeholder="Postal Code" 
                      className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                      maxLength={10}/>
                        {errors.postal && (
                      <div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3">
                        <RiErrorWarningFill />{errors.postal.message}
                      </div>
                       )}
                  </div>
              </div>

                       {/* State field */}
              <div className=" flex gap-2 flex-col sm:flex-row sm:gap-4">
                  <div className="relative flex flex-1 flex-col gap-2 my-3">
                      <label htmlFor="state" className="">State</label>
                      <input   {...register("state")}
                      type="text" 
                      placeholder="State" 
                      className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                      maxLength={10}/>
                    {errors.state && (
                        <div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3">
                          <RiErrorWarningFill />{errors.state.message}
                        </div>
                     )}

                  </div>

                         {/* Country field */}
                  <div className="relative flex flex-1 flex-col gap-2 my-3">
                      <label htmlFor="country" className="">Country</label>
                      <input  {...register("country")}
                      type="text" 
                      placeholder="Country" 
                      className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                    maxLength={10}/>
                        {errors.country && (
                      <div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3">
                        <RiErrorWarningFill />{errors.country.message}
                      </div>
              )}
                  </div>
              </div>
                
              <button
                type="submit" 
                 className="w-full text-sm my-8 px-8 py-2.5 rounded-[10px] font-bold shadow-md bg-pink text-white cursor-pointer hover:bg-red-400"
                 disabled={isSubmitting}
                 > {isSubmitting ? 
                  <div
                    className="inline-block h-7 w-7 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                  </div> : "Continue"}
               </button>
            </form>
        </div>
      </>
    
      )
}

export default Address