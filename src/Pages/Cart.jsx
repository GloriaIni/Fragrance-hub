import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext"
import Title from "../components/Title"
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from "../components/CartTotal";


const products = [
  {
    id: 0,
    name: "Prada parfum",
    price: 85.00,
    review: 60,
    img: "/Prada parfum.svg",
    category: "Men",
    subCategory: "Niche Perfumes"
  }, 

  {
    id: 1,
    name: "Chanel N5 Eau de Parfum",
    price: 50.00,
    review: 20,
    img: "/Chanel N5 Eau de Parfum.svg",
     category: "Men",
    subCategory: "New Trending"
  }, 


  {
    id: 2,
    name: "Whistbone white and black",
    price: 65.00,
    review: 30,
    img: "/Whistbone white and black.svg",
     category: "Women",
    subCategory: "New Trending"
  },


  {
    id: 3,
    name: "Chanel Grand Extrait",
    price: 55.00,
    review: 50,
    img: "/hotimg.svg",
     category: "Men",
    subCategory: "Niche Perfumes"
  }, 

  {
    id: 4,
    name: "Inspire perfume fragrance",
    price: 50.00,
    review: 70,
    img: "/Inspire perfume fragrance.svg",
     category: "Children",
    subCategory: "New Trending"
  },
  {
    id: 5,
    name: "Zara parfum",
    price: 38.00,
    review: 27,
    img: "/Zara parfum.svg",
     category: "Women",
    subCategory: "New Trending"
  },

  {
    id: 6,
    name: "Saint laurent",
    price: 56.00,
    review: 50,
    img: "/Saint laurent.svg",
     category: "Women",
    subCategory: "Niche Perfumes"
  },

  {
    id: 7,
    name: "Bleu de chanel",
    price: 70.00,
    review: 60,
    img: "/Bleu de chanel.svg",
     category: "Men",
    subCategory: "New Trending"
  }, 

  {
      id: 8,
      name: "Calvin klein Euphoria",
      price: 65.00,
      review: 73,
      img: "/Chanel N5 Eau de Parfum.svg",
       category: "Children",
    subCategory: "New Trending"
    }, 
  
   
    {
      id: 9,
      name: "Versace Eros Parfum",
      price: 85.00,
      review: 60,
      img: "/Versace Eros Parfum.svg",
       category: "Men",
    subCategory: "Niche Perfumes"
    }, 
  
    {
      id: 10,
      name: "Prada parfum",
      price: 85.00,
      review: 60,
      img: "/Prada parfum.svg",
       category: "Women",
    subCategory: "New Trending"
    }, 
    {
      id: 11,
      name: "Chanel coco noir",
      price: 45.00,
      review: 50,
      img: "/Chanel coco noir.svg",
       category: "Children",
    subCategory: "Niche Perfumes"
    },
    {
      id: 12,
      name: "Baccarat Rouge 540",
      price: 95.00,
      review: 75,
      img: "/trendimg.svg",
       category: "Men",
    subCategory: "Niche Perfumes"
    },


    {
      id: 13,
      name: "Chanel coco Mademoiselle",
      price: 80.00,
      review: 80,
      img: "/Chanel coco Mademoiselle.svg",
       category: "Men",
    subCategory: "New Trending"
    }, 
  
   
  {
    id: 14,
    name: "Givenchy L’interd",
    price: 45.00,
    review: 90,
    img: "/Givenchy L’interd.svg",
     category: "Children",
    subCategory: "New Trending"
  }, 

  
    {
      id: 15,
      name: "Amouage Gold",
      price: 60.00,
      review: 60,
      img: "/fridayimg.svg",
       category: "Women",
    subCategory: "Niche Perfumes"
    }
];

const Cart = () => {
const {cartItems, updateQuantity, navigate} = useContext(ShopContext)
const [cartData, setCartData] = useState([])

useEffect(() => {
  const tempData = [] 
  for (const itemId in cartItems) {
    if (cartItems[itemId] > 0) {
      tempData.push({
        id: parseInt(itemId),
        quantity:cartItems[itemId]
      })
    }
    }
  setCartData(tempData);
  
},[cartItems])

  return (
    <div className="container border-t pt-14 font-inter">
      <div className="text-2xl mb-3">
        <Title text1={"SHOPPING"} text2={"CART"} /> 
      </div>
      <div className="">
        {
          cartData.map((item,index) => {
            const productData = products.find((product) => product.id === item.id);
            if (productData) {
              return(
                <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                  <div className="flex items-start gap-6">
                    <img className="w-16 sm:w-20" src={productData.img} alt="" />
                    <div>
                      <p className="text-sm sm:text-lg font-medium">{productData.name}</p>
                      <div className="flex items-center gap-5 mt-2">
                        <p>£{productData.price}</p>
                        {/* the ml dropdown */}
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <input onChange={(e) => {e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item.id, Number(e.target.value))}} className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" name="number" min={1} defaultValue={item.quantity} />
                  <RiDeleteBin6Line onClick={() => updateQuantity(item.id, 0)} size={18} className="mr-4 cursor-pointer text-pink"/>
                </div>
              )   
            }
           
          })
        }
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
           <CartTotal />
           <div className="w-full text-center sm:text-end">
               <button onClick={() => navigate("/information")} className=" w-full sm:w-fit shadow-md bg-pink text-white text-sm my-8 px-8 py-3 rounded-[10px] font-bold">Proceed to checkout</button>
           </div>
        </div>
      </div>
    </div> 
  )
}

export default Cart