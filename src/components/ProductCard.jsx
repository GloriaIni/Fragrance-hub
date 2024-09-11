import { useContext } from "react";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { LazyLoadImage } from "react-lazy-load-image-component";



const ProductCard = ({img, name, price, review, id}) => {
  
  
  const {addToCart} = useContext(ShopContext)
  return (
   
        <div className="container my-6 m-auto text-xs sm:text-sm md:text-base text-ash ">

          {/* image */}
        <Link to={`/product/${id}`}>
          <LazyLoadImage effect="opacity" className=" hover:scale-110 transition ease-in-out w-40 h-40 sm:w-60 sm:h-60 object-cover" src={img} alt={name} />
        </Link>
        {/* info */}
        <div className="font-openSans text-black py-4 flex flex-col gap-y-1">
      
            <h3 className=" text-ash text-sm font-bold line-clamp-1">{name}</h3>
    
            <p className="text-base font-bold">£{price}</p>
            <div className="flex">
            <MdOutlineStar size={18}/>
            <MdOutlineStar size={18}/>
            <MdOutlineStar size={18}/>
            <MdOutlineStar size={18}/>
            <MdOutlineStar className="text-ash" size={18}/>
            </div>
            <p className="text-xs">{review} Reviews</p>
            <button  onClick={() => addToCart(id)} className="bg-white font-bold text-sm text-pink py-3 px-4 rounded-lg shadow-md hover:text-white hover:bg-pink active:bg-red-400">Add to cart</button>
        </div>
      </div>
    
  )
}

export default ProductCard