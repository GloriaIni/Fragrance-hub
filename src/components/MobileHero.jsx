import heroimg from "/heroimg.svg"
import { Link } from "react-router-dom"

const MobileHero = () => {
  return (
    
    <div className="container md:hidden pt-6 ">
    <div className="bg-pink flex items-center justify-between rounded-[20px] max-h-64 p-3">
        <div className="flex flex-col  flex-1 gap-3">
           <h1 className="text-white text-xl font-inter font-semibold ">50% Discount</h1>
          <p className="btnn w-2/3 shadow-md"><Link to={"/product"}>Shop now</Link></p>
        </div>

        <div className="flex-1"><img src={heroimg} alt="hero picture" className="object-cover"/></div>
    </div>
</div>

  )
}

export default MobileHero