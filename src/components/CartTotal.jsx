import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import Title from "./Title"


const CartTotal = () => {
    const {deliveryFee, getCartAmount} = useContext(ShopContext)
  return (
    <div className="container w-full">
        <div className="text-2xl">
            <Title text1={"CART"} text2={"TOTAL"}/>
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p>SubTotal</p>
                <p>£{getCartAmount()}.00</p>
            </div>

            <hr />

            <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>£{deliveryFee}.00</p>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg">
                <p>Total</p>
                <p>£{getCartAmount() === "0" ? "0" : getCartAmount() + deliveryFee}:00</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal