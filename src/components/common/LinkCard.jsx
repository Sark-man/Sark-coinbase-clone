import { FaArrowRightLong } from "react-icons/fa6";

function LinkCard({image, topic}){
  return (
    <a className="flex gap-5">
      <div>
        <img src={image} alt={topic} className="w-16 h-16 object-contain"></img>
      </div>
      <div>
        <p className="text-main font-bold">{topic}</p>
        <p className="text-gray-600 text-main">See more <FaArrowRightLong /> </p>
      </div>
    </a>
  )
}
export default LinkCard;