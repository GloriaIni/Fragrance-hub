import { NavLink } from "react-router-dom"

const PlaceOrderNav = ({isActive}) => {
  return (
    <div className="sm:container grid place-items-center max-w-[900px] my-5 font-openSans">
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 place-items-center sm:gap-10 cursor-pointer border-b-2 ">
            <span className="block sm:hidden">
              <NavLink to={'/information'}
              className={({ isActive }) => (isActive? "order-active" :`order-nav ${!isActive ? 'pointer-events-none' : ''}` )}
              >
              Personal info
              </NavLink>
            </span>

            <span className="hidden sm:block">
                <NavLink to={'/information'}
                className={({ isActive }) => (isActive? "order-active" : `order-nav ${!isActive ? 'pointer-events-none' : ''}`)}
                >
                Personal information
                </NavLink>
            </span>
            
            <NavLink to={'/address'}
            className={({ isActive }) => (isActive? "order-active" : `order-nav ${!isActive ? 'pointer-events-none' : ''}`)}
            >
            Billing address
            </NavLink>

            <NavLink to={'/payment'}
            className={({ isActive }) => (isActive? "order-active" : `order-nav ${!isActive ? 'pointer-events-none' : ''}`)}
            >
            Payment method
            </NavLink>
            
        </div>
    </div>
  )
}

export default PlaceOrderNav