
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoPerson } from "react-icons/go";
import Cartbadge from "./Cartbadge";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

function Navbar() {
   const {setShowSearch} = useContext(ShopContext);
  return (
    <div className="sticky top-0 bg-white z-10">
        <div className="container hidden md:block">
            <div className="flex justify-between items-center py-8 px-8">
                <h1 className="text-[20px] font-bold font-inter"><NavLink to={'/'}>
                Fragrance hub
                  </NavLink></h1>

                <div className="flex gap-8 cursor-pointer">
                  <NavLink to={'/'}
                  className={({ isActive }) => (isActive? "navi" : "navs")}
                  >
                    Home
                  </NavLink>
                  
                  <NavLink to={'/product'}
                  className={({ isActive }) => (isActive? "navi" : "navs")}
                  >
                    Products
                  </NavLink>

                  <NavLink to={'/contactus'}
                  className={({ isActive }) => (isActive? "navi" : "navs")}
                  >
                    Contact
                  </NavLink>
                
                </div>

                <div className="flex gap-6 text-black cursor-pointer">
                  <div onClick={() => setShowSearch(true)} >
                  <CiSearch size={25} />
                  </div>
                  <Link to={"/cart"}>
                      <div className="relative">
                          <LiaShoppingBagSolid size={25}/>
                          <Cartbadge size="w-[12px] h-[12px]"/>
                     </div>
                  </Link>
                 
                  <div>
                    <Link to={"/login"}><GoPerson size={25}/></Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar