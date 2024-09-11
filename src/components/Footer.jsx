

const Footer = () => {
 const onSubmitHandler =(event) => {
   event.preventDefault()
 }

  return (
    <div className="bg-black text-gray-300 ">
        <div className=" container flex flex-col md:grid grid-cols-[3fr_1fr_1fr] gap-6 py-10 pt-32">

        
           <div className="w-full md:w-2/3 flex flex-col gap-1">
              <h2 className="text-[40px] font-bold">Get our News letter</h2>

               <label htmlFor="email" className="text-xl">Subscribe to our mailing list</label>
               <br />
               <form className="relative">
               <input className="py-3 px-4 w-full rounded-[48px] text-black outline-none border-none" required type="email" name="email" id="email" placeholder="Janetdoe@email.com"/>
               <button className="bg-pink text-white flex items-center absolute text-base font-semibold rounded-[48px] py-2 px-4 right-0 top-0 mt-1 mr-1 mb-1"  onSubmit={onSubmitHandler} type='submit'>Join</button>
               </form>
           </div>

            <div>
              <p className="text-xl font-medium mb-5">COMPANY</p>
              <ul className="flex flex-col gap-1 ">
                  <li>Home</li>
                  <li>About</li>
                  <li>Delivery</li>
                  <li>Privacy Policy</li>
               </ul>
            </div>

            <div>
              <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
              <ul className="flex flex-col gap-1 ">
                  <li>@fragrancehub.com</li>
                  <li>info@fragrancehub</li>
               </ul>
            </div>
        </div>

        <div>
          <hr />
           <p className="text-center pt-4 pb-2 text-sm">©Fragrancehub, 2024</p>
           <p className="text-center pb-4 text-sm">Developed by: <span className="font-bold">Gloria Inioluwa Okegbemi</span></p>
        </div>
    </div>
  )
}

export default Footer