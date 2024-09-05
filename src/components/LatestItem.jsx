import { Link } from "react-router-dom"

const LatestItem = ({id, img, name, price}) => {
  return (
    <Link className=' container text-ash cursor-pointer' to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img className="hover:scale-110 transition ease-in-out w-40 h-40 sm:w-60 sm:h-60 object-cover" src={img} alt={name} />
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="font-bold text-sm">£{price}</p>
      </div>
    </Link>
  )
}

export default LatestItem