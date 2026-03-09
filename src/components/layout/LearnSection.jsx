import LearnCard from "../common/LearnCard"

function LearnSection({heading, subheading, cards, btntext}){
  return (
    <section className="px-10 py-20 border-b border-gray-200">
      <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="subheading font-bold">{heading}</h2>
      < p className="text-main text-gray-600">{subheading}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {
          cards.map((card, index) => (
            <LearnCard
              key={index}
              image={card.image}
              category={card.category}
              title={card.title}
              description={card.description}
            />
          ))
        }
      </div>
      <div className="flex justify-center">
        <button className="btn-primary">{btntext}</button>
      </div>
      </div>
    </section>
  )
}
export default LearnSection;