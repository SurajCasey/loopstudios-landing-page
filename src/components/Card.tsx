interface CardProps {
    mobile: string
    desktop: string
    title: string
}

const Card = ({mobile, desktop, title}: CardProps) => {
  return (
    <div className='w-fit relative group cursor-pointer'>
        <div>
            {/* Mobile image */}
            <img src={mobile} alt={title} className="block md:hidden h-30 object-cover"/>


            {/* Tablet image */}
            <img
            src={mobile}
            alt={title}
            className="hidden md:block lg:hidden w-[608px] h-[120px] object-top"
            />


            {/* Desktop image */}
            <img src={desktop} alt={title} className="hidden lg:block w-full h-auto object-cover" />

            <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-75 '></div>
        </div>
        <div 
            className='w-[160px] h-12 lg:h-16 absolute left-5 bottom-5 lg:left-10 lg:bottom-8 text-white 
            font-light text-3xl group-hover:text-black leading-[100%]'
        >
            {/* {title.split(" ").map((word, i)=> ( */}
                {/* <span key={i}> */}
                    {title}
                    {/* {word} <br /> */}
                {/* </span>
            ))} */}
        </div>  
    </div>
  )
}

export default Card
