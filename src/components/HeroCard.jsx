

const HeroCard = ({img, title}) => {
  return (
    <div className="">
        <div className="">

          {/* create the mobile version */}
          <div className="hover:scale-105 transition-transform rounded-[15px] min-w-[120px] min-h-[104px] lg:rounded-[20px] md:max-w-[336px] md:max-h-[287px] overflow-hidden">
                <img className="object-cover h-full w-full" src={img} alt={title} />
          </div>
          
            <p className="text-black font-openSans text-center font-semibold text-[10px] py-3 md:text-lg ">{title}</p>
        </div>
    </div>
  )
}

export default HeroCard