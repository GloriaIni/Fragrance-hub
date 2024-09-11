import { IoMdCheckmark } from "react-icons/io";
import ReactDOM from "react-dom"

const Modal = ({ message, onClose }) => {
   return ReactDOM.createPortal(
    <div className="container font-roboto fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center gap-4 z-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm  h-[50vh] w-[90vw] sm:w-[5 w-50vw] grid place-items-center">
        <div className=" border-2 border-pink rounded-full  w-20 h-20 flex items-center justify-center mx-auto ">
        <IoMdCheckmark className="text-pink m-3 " size={60}/>
        </div>
        
        <h2 className="text-2xl font-semibold ">Payment Successful!</h2>
        <p className="font-medium">We'll send you a shipping confirmation email as soon as your order ships.</p>
        <button
          onClick={onClose}
          className="bg-pink font-semibold shadow-md text-white px-6 py-3 rounded-md hover:bg-red-400"
        >
          See Order
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal
