import { useState } from "react"
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";


const Login = () => {

    const [currentState, setCurrentState] = useState('Sign Up');
    const handleSubmit  = async (event) => {
        event.preventDefault()
    }

  return (
    <div className="container text-roboto">
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-12 mb-9 gap-4 text-gray-800">
            <div className="flex flex-col items-center gap-2 mb-2 mt-10">
                <p className="font-roboto text-3xl font-bold text-pink">{currentState}</p>
                <p className="w-14 h-1 rounded-lg bg-pink"></p>
            </div>

        
            {currentState === 'Login'? '' :  <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                   <FaUser size={20}/>
                </div>
                 <input type="text" name="name" id="name" className="w-full px-12 rounded-md  py-2 bg-gray-100 border-2 focus:outline-none focus:ring-2 focus:ring-pink" placeholder="Name" required/>
            </div>}
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                   <MdEmail size={20}/>
                </div>
                <input type="email" name="email" id="mail" className="w-full px-12  py-2 rounded-md bg-gray-100 border-2  focus:outline-none focus:ring-2 focus:ring-pink" placeholder="Email" required/>
            </div>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"> <FaLock  size={20}/></div>
               <input type="password" name="password" id="password" className="w-full px-12 py-2 rounded-md bg-gray-100 border-2 focus:outline-none focus:ring-2 focus:ring-pink" placeholder="Password" required/>
            </div>


            {currentState === "Sign Up"? "" :  <div className="w-full  text-sm mt-[8px]">
                <p className="cursor-pointers text-gray-500" >Forgot password? <span className="font-bold text-pink">Click Here!</span></p>
            </div>}

            <div className="flex justify-between gap-4">
                {/* buttons */}
                    <p onClick={() => setCurrentState('Sign Up')} className={currentState === "Login"? "text-gray-400 bg-gray-200 px-8 py-2 mt-4 shadow-md rounded-full grid place-items-center" : 'cursor-pointer bg-pink text-white px-8 py-2 mt-4 shadow-md rounded-full grid place-items-center'}>Sign Up</p> 
                    <p onClick={() => setCurrentState('Login')} className={currentState === "Sign Up"? "text-gray-400 bg-gray-200 px-8 py-2 mt-4 shadow-md rounded-full grid place-items-center" : 'cursor-pointer bg-pink text-white px-8 py-2 mt-4 shadow-md rounded-full grid place-items-center'}>Login</p>
            </div>
        </form>
    </div>
  )
}

export default Login