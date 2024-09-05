import { useEffect, useState } from "react"
import Title from "./Title";
import LatestItem from "./LatestItem";

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

const SimilarProducts = ({category,subCategory}) => {
    const [related,setRelated] = useState([]);

    useEffect(() => {

      if (products.length > 0) {
        let productCopy = products.slice()

        productCopy = productCopy.filter((item) => category === item.category);
        productCopy = productCopy.filter((item) => subCategory === item.subCategory);

        setRelated(productCopy.slice(0,4))
      }
    },[products])
    
  return (
    <div className="my-24  grid place-items-center">
        <div className="text-center text-3xl  py-2">
            <Title text1={"SIMILAR"} text2={"PRODUCTS"} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-6">
            {related.map((item, index) => (
                <LatestItem 
                   key={index}
                   id={item.id}
                   name={item.name}
                   price={item.price}
                   img={item.img}
                />
            ))}
        </div>
    </div>
  )
}

export default SimilarProducts