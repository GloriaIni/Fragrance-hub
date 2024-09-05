import { useContext, useEffect, useState} from "react"
import { CiSearch } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";
import { useLocation } from "react-router-dom";


const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false)

    useEffect(() => {
       if (location.pathname.includes('product')) {
          setVisible(true)
       } else{
          setVisible(false)
       }
    },[location])


  return showSearch  && visible? (
    <div className="border-t border-b bg-pink text-center">
       <div className="inline-flex items-center justify-center border border-white bg-white px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
          <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" placeholder="Search" />
          <CiSearch />
       </div>
       <MdCancel onClick={() => setShowSearch(false)} className="inline cursor-pointer text-white border border-white rounded-full" size={20}/>
    </div>
  ) : null
}

export default SearchBar