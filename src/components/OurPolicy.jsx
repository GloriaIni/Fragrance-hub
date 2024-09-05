import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { PiHeadsetBold } from "react-icons/pi";

const OurPolicy = () => {
  return (
    <div className=" container flex flex-col md:flex-row justify-around gap-12 text-center py-20 text-xs text-gray-700">
        <div>
        <RiExchangeFundsLine className="m-auto mb-5" size={50}/>
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">We offer hassle free exchange policy</p>
          <p className="text-gray-400"><span className="font-bold">Condition:</span> <span>Items must be unused and unopened. Some exceptions may apply for defective or damaged items.</span></p>
        </div>

        <div>
        <TbRosetteDiscountCheck className="m-auto mb-5" size={50}/>
          <p className="font-semibold">7 Days Return Policy</p>
          <p className="text-gray-400">We provide 7 days free return policy</p>
          <p className="text-gray-400"><span className="font-bold">Exceptions:</span> <span>Used or opened items, special orders, or items bought on sale may not be eligible for return.</span></p>
        </div>

        <div>
        <PiHeadsetBold className="m-auto mb-5" size={50}/>
          <p className="font-semibold">Best Customer Support</p>
          <p className="text-gray-400">We provide 24/7 customer support</p>
          <p className="text-gray-400"><span className="font-bold">Methods:</span> <span>Customers can reach us through [email, phone, live chat, social media, etc.]</span></p>
        </div>
    </div>
  )
}

export default OurPolicy