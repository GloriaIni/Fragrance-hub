import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext";


const PopUp = () => {
    const { popup} = useContext(ShopContext);
 
      if (!popup.isVisible) return null;
  return (
    <div className="fixed bottom-4 left-4 z-50 font-roboto">
    <div className="bg-pink p-4 rounded-lg shadow-lg w-full">
        <h2 className="text-xs text-white font-semibold">{popup.message}</h2>
    </div>
</div>
  )
}


export default PopUp