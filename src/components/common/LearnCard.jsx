function LearnCard({image, category, title, description, imageHeight = "h-auto", imageWidth = "w-full"}){
  return (
    <>
      <div className="flex flex-col gap-3 flex-1">
        <img
          src={image}
          alt={title}
          className={`w-full rounded-xl mb-4 ${imageHeight} ${imageWidth}`}
        />
        <p className="text-main text-gray-600 font-bold">
          {category}
        </p>
        <h3 className="sub-subheading font-medium">
          {title}
        </h3>
        <p className="text-main">
          {description}
        </p>
      </div>
    </>
  )
}
export default LearnCard;