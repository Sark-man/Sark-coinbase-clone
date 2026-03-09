function LearnTopic({subtopic, topic}) {
  return (
    <div>
      <p className="font-bold text-gray-700">
        {subtopic}
      </p>
      <p className="text-main font-bold">
        {topic}
      </p>
    </div>
  )
}
export default LearnTopic;