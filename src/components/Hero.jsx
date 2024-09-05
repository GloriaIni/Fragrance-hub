import heroimg from "/heroimg.svg"
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <div className="container hidden md:block pt-6 px-8">
        <div className=" bg-pink flex items-center justify-around rounded-[20px] h-[400px] lg:h-[540px] p-10">
            <div className="pl-3 flex flex-col flex-1 gap-5">
               <h1 className="text-white text-4xl leading-normal lg:text-[48px] font-inter font-semibold">Black Friday Deals up to 50% off</h1>
              <button className="text-pink shadow-md bg-white w-[150px] h-[48px] rounded-[15px] font-bold text-base grid place-items-center"><Link to={"./product"}>Shop now</Link></button>
            </div>

            <div className="flex-1"><img src={heroimg} alt="hero picture" className="object-cover"/></div>
        </div>
    </div>
  )
}

export default Hero