import Title from '../components/Title'
import contact from "/contact.jpg"

const ContactUs = () => {
  return (
    <div className='container'>
        <div className="text-center text-2xl pt-10 border-t">
            <Title text1={"CONTACT"} text2={"US"}/>
        </div>

        <div className="my-10 flex flex-col justify-center  md:flex-row gap-10 mb-28">
            <img className='w-full md:max-w-[480px] rounded-lg' src={contact} alt="" />

            <div className="flex flex-col justify-center items-start gap-6 ">
                <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                <p className='text-gray-500'>001 Secret Place of MH <br />Under The Shadow of The Almighty</p>
                <p className='text-gray-500'>Tel: (411) 111-0123 <br />Email: admin@fragrancehub.com</p>
                <p className='font-semibold text-xl text-gray-600 '>Careers at Fragrance Hub</p>
                <p className='text-gray-500'>Learn more about our teams and job openings.</p>
                <button className='border border-pink px-8 py-3 rounded-lg shadow-md text-pink  cursor-pointertext-sm hover:bg-pink hover:text-white transition-all duration-500'>Explore Jobs</button>
            </div>
        </div>
    </div>
  )
}

export default ContactUs