import Title from "../components/Title";

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

const Orders = () => {
    
  return (
    <div className=" container border-t pt-12 font-openSans">
        <div className="text-2xl">
            <Title text1={"MY"} text2={"ORDERS"}/>
        </div>

        <div>
            {products.slice(1,4).map((item,index) => (
                <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-6 text-sm">
                        <img className="w-16 sm:w-20" src={item.img} alt="" />

                        <div>
                            <p className="sm:text-base font-medium font-openSans ">{item.name}</p>

                            <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                                <p className="text-lg">£{item.price}</p>
                                <p>Quantity:1</p>
                                <p>100ml</p>
                            </div>
                             <p className="mt-2">Date: 
                                 <span className="text-gray-400">25, Jul, 2034</span>
                             </p>

                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-between">
                        <div className="flex items-center gap-2">
                            <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                            <p className="text-sm md:text-base">Ready to ship</p>
                        </div>  
                        <button className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>         
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Orders