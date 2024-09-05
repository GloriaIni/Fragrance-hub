import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"


function Cartbadge({size}) {
  const {getCartCount} = useContext(ShopContext)
  return (
    <div className={`absolute bg-pink text-white text-[8px] ${size} right-0 top-0 rounded-full grid place-items-center`}>
       {getCartCount()}
    </div>
  )
}

export default Cartbadge
