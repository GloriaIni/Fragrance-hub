
import { FaBarsStaggered } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoPerson } from "react-icons/go";
import Cartbadge from "./Cartbadge";
import { useContext, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const MobileNavbar = () => {

  const [visible, setVisible] = useState(false)
  const {setShowSearch} = useContext(ShopContext)
  return (
  <>
    <div className="sticky top-0 bg-white z-10">
      <div className="container py-8 md:hidden">
         <div className="flex justify-between items-center">
            <h1 className="text-[20px] font-bold font-inter">Fragrance hub</h1>


            <div className="flex gap-4 text-black">
              <div>
              <CiSearch  onClick={() => setShowSearch(true)}size={20}/>
              </div>

              <Link to={"/cart"}>
                 <div className="relative">
                  <LiaShoppingBagSolid size={20}/>
                  <Cartbadge size="w-[11px] h-[11px]"/>
                 </div>
              </Link>
             
              <div className="group relative">
                    <Link to={"/login"}><GoPerson size={20}/></Link>
                  
               </div>
              <div className=""  >
              <FaBarsStaggered onClick={() => setVisible(true)} size={20}/>
              </div>
            </div>
        </div>
    </div>

 </div>

    {/* sidebar menu */}
    <div className={`absolute top-2 z-20 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full' : 'w-0'}`}>
      <div className='flex flex-col text-black'>
         <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <IoChevronBackOutline size={20}/> 
            <p>Back</p>
         </div>
         <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:nav-active' to={'/'}>Home</NavLink>
         <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:nav-active' to={'/product'}>Products</NavLink>
         <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:nav-active' to={'/contactus'}>Contact</NavLink>
      </div>
    </div>
</>  
  )
}

export default MobileNavbar