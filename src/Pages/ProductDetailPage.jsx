import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import SimilarProducts from "../components/SimilarProducts";
import { ShopContext } from "../Context/ShopContext";


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
  

const ProductDetailPage = () => {
    const {id} = useParams()
    const [productData, setProductData] = useState(false);
    const {addToCart} = useContext(ShopContext)

    const fetchProductData = async () => {
      const product =  products.find((product) => product.id === parseInt(id));
            if (product) {
                setProductData(product)
                return null
            }
    }

    useEffect(() => {
      fetchProductData()
    
    },[id, products])

    
  return productData?(
    <div className="container transition-opacity ease-in duration-500 opacity-100 grid place-items-center py-10">
      <div className="flex items-center gap-12 flex-col sm:flex-row max-w-[800px]"> 
        
       <div className=" relative w-60 h-60 shadow-md ">
          <img className=" w-full h-full object-cover  flex-1" src={productData.img} alt={productData.name} />
          <div className="absolute bottom-0 left-0 p-2 rounded-tr-xl font-bold bg-gray-200 text-gray-700 text-sm uppercase">
            <p>{productData.name}</p>
          </div>
       </div>

       {/* product info */}
      <div className="flex-1">
      <h1 className="text-2xl font-semibold">{productData.name}</h1>
      <div className="flex mt-2 items-center">
          <MdOutlineStar size={15}/>
          <MdOutlineStar size={15}/>
          <MdOutlineStar size={15}/>
          <MdOutlineStar size={15}/>
          <MdOutlineStar className="text-ash" size={15}/>
         <p className="text-sm pl-2">({productData.review})</p>
      </div>
      <p className="font-medium mt-2 text-3xl">£{productData.price}</p>
       <p className="mt-4 text-gray-500 md:w-4/5">Get the new {productData.name}, long-lasting refreshing scent made from beautiful flowers combined to make you feel elegant</p>
       <button onClick={() => addToCart(productData.id)} className=" mt-5 btns active:bg-rose-500 sm:w-">Add to cart</button>

            <hr className="mt-6 sm:w-4/5"/>

       <div className="flex flex-col text-gray-500 text-sm gap-1 mt-6">
         <p>100% Original Product.</p>
         <p>Cash on delivery is available on this product.</p>
         <p>Easy return and exchange policy within 7 days.</p>
       </div>
     </div>

    </div>
        {/* SimilarProducts */}
        <SimilarProducts 
        category={productData.category} 
        subCategory={productData.subCategory}
        />
  </div>
  ): <div className="opacity-0"></div>
}

export default ProductDetailPage