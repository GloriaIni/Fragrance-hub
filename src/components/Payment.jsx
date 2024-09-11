import PlaceOrderNav from './PlaceOrderNav'
import Mastercard from "/Mastercard.svg"
import Visa from "/Visa.svg"
import paypal from "/paypal.svg"
import pcard from "/pcard.svg"
import mcard from "/mcard.svg"
import vcard from "/vcard.svg"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from 'react'
import Modal from "./Modal"


const schema = z.object({
  cardnumber: z.string().min(13, 'Card number must be at least 13 digits')
  .max(19, 'Card number cannot exceed 19 digits').regex(/^\d{13,19}$/, 'Card number must only contain digits'),
  cardholdername: z.string()
    .min(1, 'Cardholder name is required')
    .regex(/^[A-Za-z\s]+$/, 'Cardholder name must only contain letters and spaces'),
  expirydate: z.string()
    .regex(/^(0[1-9]|1[0-2])\/(\d{2})$/, 'Invalid expiry date').refine(value => {
      const [month, year] = value.split('/').map(Number);
      const expiry = new Date(`20${year}-${month}-01`);
      const today = new Date();
      today.setDate(today.getDate() + 1); 
      return expiry > today;
    }, 'Card is expired'),
  cvv: z.string() .length(3, 'CVV must be 3 digits')
  .regex(/^\d{3}$/, 'Invalid CVV'),
  billingAddressSameAsShipping: z.boolean().refine(value => value === true, 'You must agree to use the same billing address as the shipping address'),
});


const cardTypeLogo = {
  visa: vcard,
  mastercard: mcard,
  paypal: pcard
};

const Payment = () => {
   const [cardNumber, setCardNumber] = useState('');
   const [formattedCardNumber, setFormattedCardNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [cardLogo, setCardLogo] = useState(mcard); 
  const [cardholderName, setCardholderName] = useState('');
 const navigate = useNavigate()
  const {register, 
    handleSubmit,
    setError,
    watch,
    setValue,
    formState: {errors, isSubmitting}
  } = useForm({
  defaultValues: {
    cardnumber: '',
    cardholdername: '',
    expirydate: '',
    cvv: '',
    billingAddressSameAsShipping: false,
  },
  resolver: zodResolver(schema)
  })


  const billingAddressSameAsShipping = watch('billingAddressSameAsShipping');
  const expiryDate = watch('expirydate');


  const handleExpiryDateChange = (e) => {
  let value = e.target.value.replace(/[^\d]/g, '');
  if (value.length > 2) {
    value = `${value.slice(0, 2)}/${value.slice(2)}`;
  }
  if (value.length > 5) {
    value = value.slice(0, 5);
  }
  setValue('expirydate', value);
};


const handleCardNumberChange = (e) => {
  const rawValue = e.target.value.replace(/\D/g, ''); 
  setCardNumber(rawValue);
  setFormattedCardNumber(rawValue); 
  setValue('cardnumber', rawValue); 
};


    // card type
   const detectCardType = (number) => {
  if (/^4/.test(number)) {
    setCardLogo(vcard);
  } else if (/^5[1-5]/.test(number)) {
    setCardLogo(mcard);
  } else if (/^6/.test(number)) {
    setCardLogo(pcard);
  } else {
    setCardLogo(mcard);
  }
};

useEffect(() => {
  if (cardNumber) {
    detectCardType(cardNumber);
  }
}, [cardNumber]);



  useEffect(() => {
    if (expiryDate) {
      setValue('expirydate', expiryDate);
    }
  }, [expiryDate]);


  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowModal(true); 
    } catch (error) {
      setError("root", { message: "Submission error" });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/orders"); 
  };

  return (
    <>
      <PlaceOrderNav />
      <div className="container w-full sm:w-[600px] my-10 font-openSans">
          <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 p-2 px-3 cursor-pointer">
                <img className='hidden md:block' src={Mastercard} alt="" />
                <img className='block md:hidden' src={mcard} alt="" />
              </div>

              <div className="flex items-center gap-3 p-2 px-3 cursor-pointer">
                <img className='hidden md:block' src={Visa} alt="" />
                <img className='block md:hidden' src={vcard} alt="" />
                </div>

              <div className="flex items-center gap-3 p-2 px-3 cursor-pointer">
                  <img className='hidden md:block' src={paypal} alt="" />
                  <img className='block md:hidden' src={pcard} alt="" />
              </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Card Number */}
              <div className=" relative flex flex-col gap-2 my-6">
                <label htmlFor="cardNumber" className="">Card Number</label>
                <div className="relative ">
                    <input    {...register('cardnumber')}
                    type="text"
                    placeholder="**** **** ****** 8954"
                    className=" font-semibold block w-full px-24 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink " 
                     value={formattedCardNumber} 
                     onChange={handleCardNumberChange}/>
                    
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                       <img src={cardLogo} alt="" />
                    </div>
                </div>
                {errors.cardnumber && (
                  <div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3">
                    <RiErrorWarningFill />{errors.cardnumber.message}
                  </div>
                )}
              </div>
                   {/* Card Name */}
              <div className=" relative flex flex-col gap-2 my-6">
                <label htmlFor="cardholdername" className="">Cardholder Name</label>
                <input     {...register('cardholdername')}
                type="text"
                placeholder="Cardholder Name"
                className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink " 
                value={cardholderName} 
                onChange={(e) => {
                  const value = e.target.value.replace(/[^A-Za-z\s]/g, ''); 
                  setCardholderName(value);
                  setValue('cardholdername', value);
                }}
                />
                   {errors.cardholdername && (
              <div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3">
                <RiErrorWarningFill />{errors.cardholdername.message}
              </div>
            )}
              </div>

                           {/* Expiry Date */}
              <div className="flex gap-4">
                    <div className=" relative flex flex-1 flex-col gap-2 mb-3 min-w-0">
                        <label htmlFor="expirydate" className="">Expiry Date</label>
                      <input    {...register('expirydate')}
                          type="text" 
                          placeholder='mm/yy'
                          className='px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink'

                           maxLength={5} 
                           value={expiryDate}
                           onChange={handleExpiryDateChange}
                          />
                                {errors.expirydate && (
                                <div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3">
                                  <RiErrorWarningFill />{errors.expirydate.message}
                                </div>
                              )}
                    </div>

                            {/* CVV */}
                    <div className=" relative flex flex-1 flex-col gap-2 mb-3 min-w-0">
                        <label htmlFor="cvv" className="">CVV</label>
                        <input   {...register('cvv')}
                        type="text" 
                        placeholder="cvv" 
                        className="px-3.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink" 
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          setValue('cvv', value.slice(0, 3));
                        }}
                        />
                                  {errors.cvv && (
                      <div className="absolute top-full left-0 mt-1 text-red-500 text-xs flex items-center gap-1 pl-3">
                        <RiErrorWarningFill />{errors.cvv.message}
                      </div>
                    )}
                    </div>
          </div>

                        {/* Checkbox for Billing Address */}
           <div className="relative flex flex-col gap-2 my-6">
            <label className="flex items-center gap-2 text-xs">
              <input
                type="checkbox"
                {...register('billingAddressSameAsShipping')}
                className="  rounded "
              />
              <span className="text-gray-500">Billing address same as shipping address</span>
            </label>
            {errors.billingAddressSameAsShipping && (
              <div className="text-red-500 text-xs flex items-center gap-1 mt-1 pl-3">
                <RiErrorWarningFill />{errors.billingAddressSameAsShipping.message}
              </div>
            )}
          </div>


          <button
                type="submit" 
                 className="w-full text-sm my-8 px-8 py-2.5 rounded-[10px] font-bold shadow-md bg-pink text-white cursor-pointer hover:bg-red-400"
                 disabled={isSubmitting}
                 > {isSubmitting ? 
                  <div
                    className="inline-block h-7 w-7 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                  </div> : "Proceed to pay"}
               </button>
          </form>

          {showModal && (
        <Modal
          onClose={handleCloseModal}
        />
      )}
      </div>
      
    </>
  )
}

export default Payment