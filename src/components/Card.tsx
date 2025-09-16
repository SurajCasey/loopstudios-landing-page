interface CardProps {
    image: string
    title: string
}

const Card = ({image, title}: CardProps) => {
  return (
    <div className='w-fit relative group cursor-pointer'>
        <div>
            <img src={image} alt="Deep Earth" />
            <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-75 '></div>
        </div>
        <div 
            className='absolute left-10 bottom-8 text-white 
            font-light text-3xl group-hover:text-black'
        >
            {title.split(" ").map((word, i)=> (
                <span key={i}>
                    {word} <br />
                </span>
            ))}
        </div>  
    </div>
  )
}

export default Card
