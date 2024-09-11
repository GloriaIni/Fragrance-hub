import { useState } from "react"
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";


const schema = z.object({
    name: z.string().min(1, "Name must not be empty").max(20, "Name must not exceed 20 characters").regex(/^[A-Za-z\s\-]+$/, { message: 'Name can only contain letters, spaces, and hyphens' }),
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters long").regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' }).regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' }).regex(/\d/, { message: 'Password must contain at least one digit' }).regex(/[@$!%*?&]/, { message: 'Password must contain at least one special character (@, $, !, %, *, ?, &)' })
})

const Login = () => {

    const [currentState, setCurrentState] = useState('Sign Up');
    const navigate = useNavigate();
    const {register, 
         handleSubmit,
         setError,
         formState: {errors, isSubmitting}
    } = useForm({
        defaultValues: {
            name: "",
            password: "",
            email: ""
        },
        resolver: zodResolver(schema)
    })

    const handleSignUp = async (data) => {
        try {
          // Simulate a sign-up process
          await new Promise((resolve) => setTimeout(resolve, 1000));
          navigate("/payment");
        } catch (error) {
          setError("root", { message: "This email is already taken" });
        }
      };
    
      
      const handleLogin = async (data) => {
        try {
          
          await new Promise((resolve) => setTimeout(resolve, 1000));
          navigate("/payment");
        } catch (error) {
          setError("root", { message: "Login failed. Please try again." });
        }
      };
    
      const onSubmit = (data) => {
        if (currentState === 'Sign Up') {
          handleSignUp(data);
        } else {
          handleLogin(data);
        }
      };
  return (
    <div className="container text-roboto h-[70vh]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-12 mb-9 gap-y-8 text-gray-800">

            <div className="flex flex-col items-center gap-2 mb-2 mt-10">
                <p className="font-roboto text-3xl font-bold text-pink">{currentState}</p>
                <p className="w-14 h-1 rounded-lg bg-pink"></p>
            </div>

        
            {currentState === 'Login'? '' :  <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                   <FaUser size={20}/>
                </div>
                 <input {...register("name")} 
                    type="text" 
                    className="w-full px-12 rounded-md  py-2 bg-gray-100 border-2 focus:outline-none focus:ring-2 focus:ring-pink" 
                    placeholder="Name"
                 />
                  {errors.name && (<div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3"><RiErrorWarningFill />{errors.name.message}</div>)}
            </div>}

             {/* email field */}
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                   <MdEmail size={20}/>
                </div>
                <input  {...register("email")}
                    type="email" 
                    className="w-full px-12  py-2 rounded-md bg-gray-100 border-2  focus:outline-none focus:ring-2 focus:ring-pink" 
                    placeholder="Email"/>
                    {errors.email && (<div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3"><RiErrorWarningFill />{errors.email.message}</div>)}
            </div>

             {/* password field */}
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"> 
                    <FaLock  size={20}/>
                </div>
               <input {...register("password")}
                    type="password" 
                    className="w-full px-12 py-2 rounded-md bg-gray-100 border-2 focus:outline-none focus:ring-2 focus:ring-pink" 
                    placeholder="Password"
               />
               {errors.password && (<div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3"><RiErrorWarningFill />{errors.password.message}</div>)}
            </div>


            {currentState === "Login" && <div className="w-full  text-sm mt-[8px]">
                <p className="cursor-pointers text-gray-500" >Forgot password? <span className="font-bold text-pink">Click Here!</span></p>
            </div>}

            <div className="flex justify-between gap-4">
                {/* buttons */}
                    <button disabled={isSubmitting} type="submit" onClick={() => setCurrentState('Sign Up')} className={currentState === "Login"? "text-gray-400 bg-gray-200 px-8 py-2 mt-4 shadow-md rounded-full grid place-items-center" : 'cursor-pointer bg-pink text-white px-8 py-2 mt-4 shadow-md rounded-full grid place-items-center'}>{isSubmitting ? "Signing Up" : "Sign-Up"}</button> 

                    <button disabled={isSubmitting} type="submit" onClick={() => setCurrentState('Login')} className={currentState === "Sign Up"? "text-gray-400 bg-gray-200 px-8 py-2 mt-4 shadow-md rounded-full grid place-items-center" : 'cursor-pointer bg-pink text-white px-8 py-2 mt-4 shadow-md rounded-full grid place-items-center'}>{isSubmitting ? "Logging In" : "Login"}</button>
            </div>
            {errors.root && (<div className="text-red-500 text-sm">{errors.root.message}</div>)}
        </form>
    </div>
  )
}

export default Login