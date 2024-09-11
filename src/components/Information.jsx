import PlaceOrderNav from "./PlaceOrderNav"
import { useForm } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  fullname: z.string().min(1, "Name must not be empty").max(30, "Name must not exceed 30 characters").regex(/^[A-Za-z\s\-]+$/, 'Name can only contain letters, spaces, and hyphens' ),
  email: z.string().email(),
  number: z.string().regex(/^\+?\d{10,15}$/, "Phone number is invalid!")
})


const Information = () => {
  
  const navigate = useNavigate()
  const {register, 
    handleSubmit,
    setError,
    formState: {errors, isSubmitting}
} = useForm({
   defaultValues: {
       fullname: "",
       email: "",
       number: ""
   },
   resolver: zodResolver(schema)
})

const onSubmit = async (data) => {
  try {
   await new Promise((resolve) => setTimeout(resolve, 3000));
   navigate("/address")
   
  } catch (error) {
   setError("root", {
       message: "This email is already taken"
   })
  }  
}

  return (
    <>
      <PlaceOrderNav />
      <div className="font-openSans w-full sm:w-[600px] container my-10 gap-7">
          <form onSubmit={handleSubmit(onSubmit)} >

            {/* name field */}
            <div className="relative flex flex-col gap-2 my-6 ">
              <label htmlFor="fullname" className="">Full Name</label>
              <input {...register("fullname")}
                type="text"
                placeholder="Full Name"
                className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
               />
                {errors.fullname && (<div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3"><RiErrorWarningFill />{errors.fullname.message}</div>)}
            </div>

            <div className=" relative flex flex-col gap-2 my-6">
              <label htmlFor="Email address" className="">Email Address</label>
              <input {...register("email")}
                type="email" 
                placeholder="Email address" 
                className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
               />
                  {errors.email && (<div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3"><RiErrorWarningFill />{errors.email.message}</div>)}
            </div>

            <div className="relative flex flex-col gap-2 my-6">
              <label htmlFor="Phone number" className="">Phone Number</label>
               <input {...register("number")}
                 type="text" 
                  placeholder="Phone number" 
                  className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                  
                />
                   {errors.number && (<div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3"><RiErrorWarningFill />{errors.number.message}</div>)}
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

export default Information