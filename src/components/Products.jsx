import ProductCard from "./ProductCard";
import Title from "./Title";

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


const Products = () => {
  return (
    <>
    <div className="container grid place-items-center">
         <div className="text-center pt-8 pb-4 text-2xl md:text-3xl">
         <Title text1={'BEST'} text2={'SELLER'}/>
         </div>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-2 md:gap-5 ">
            {products.slice(8,16).map((product, index) => (
                <ProductCard 
                key={index}
                id={product.id}
                name={product.name}
                img={product.img}
                price={product.price}
                review={product.review}
                />
            ))}
        </div>
    </div>
    </>
  )
}

export default Products