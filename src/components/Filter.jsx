import { useContext, useEffect, useState } from "react";
import {IoChevronForward } from "react-icons/io5";
import Title from "./Title"
import LatestItem from "./LatestItem";
import { ShopContext } from "../Context/ShopContext";

const myProducts = [
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
const Filter = () => {
    const {search, setSearch} = useContext(ShopContext)
    const [showFilter,setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState("relevant")

    const toggleCategory = (e) => {
      if (category.includes(e.target.value)) {
         setCategory(prev => prev.filter(item => item !== e.target.value))
      } else {
        setCategory(prev => [...prev,e.target.value])
      }
    }

    const toggleSubCategory = (e) => {
      if (subCategory.includes(e.target.value)) {
        setSubCategory(prev => prev.filter(item => item !== e.target.value))
      }else {
        setSubCategory(prev => [...prev, e.target.value])
      }
    }


    const applyFilter = ( ) => {
        let productCopy = myProducts.slice();

        if (search && setSearch) {
          productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        
        if (category.length > 0) {
          productCopy = productCopy.filter(item => category.includes(item.category))
        }

        if (subCategory.length > 0) {
          productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProducts(productCopy)
    }

    const sortProduct = () => {
      let filterCopy = filterProducts.slice()

      switch (sortType) {
        case "low-high":
              setFilterProducts(filterCopy.sort((a,b) => (a.price - b.price)))
          break;
      
        case "high-low":
            setFilterProducts(filterCopy.sort((a,b) => (b.price - a.price)))
        break;

        default:
          applyFilter()
          break;
      }
    }

    useEffect(() => {
      applyFilter()
    },[category, subCategory, search, setSearch])


    useEffect(() => {
      sortProduct()
    },[sortType])


  return (
    <div className="container flex flex-col md:flex-row gap-1 md:gap-10 md:pt-10 border-t font-openSans"> {/* filter */}
    <div className="min-w-60">
       <p onClick={() => setShowFilter(!showFilter)} className="m-2 text-xl flex items-center cursor-pointer gap-2">
        FILTERS
        <IoChevronForward  className={`sm:hidden ${showFilter? 'rotate-90' : ""}`} size={20}/>
       </p>
       

         {/* Category */}
    <div className={`border border-ash pl-5 py-3 mt-6 ${showFilter? '' : 'hidden'} sm:block`}>
         <p className="mb-3 text-sm font-medium">CATEGORIES</p>
         <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={toggleCategory}/> Men
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange={toggleCategory}/> Women
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Children"} onChange={toggleCategory}/> Children
            </p>
        </div>
    </div>

          {/* SubCategory */}
          <div className={`border border-ash pl-5 py-3 my-5 ${showFilter? '' : 'hidden'} sm:block`}>
         <p className="mb-3 text-sm font-medium">TYPE</p>
         <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"New Trending"} onChange={toggleSubCategory}/> New Trending
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Niche Perfumes"} onChange={toggleSubCategory} /> Niche Perfumes
            </p>
        </div>
    </div>
    </div>
    {/* Right side */}
    <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* sort */}
          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-ash text-sm px-2">
            <option value="relevant">Relevant</option>
            <option value="low-high">Sort by: Low to high</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* products */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {filterProducts.map((item, index) => (
        <LatestItem
        key={index}
        name={item.name}
        id={item.id}
        price={item.price}
        img={item.img}
        />
      ))}
        </div>
    </div>
    </div>
  )
}

export default Filter