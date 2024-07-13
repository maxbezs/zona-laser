const Section = ({ title, content }) => {
  return (
    <div className="mt-6">
      <h2
        className="tracking-wider	
 font-bold font-cfont text-orange-700 text-2xl"
      >
        {title}
      </h2>
      {content.map((item, index) =>
        typeof item === "string" ? (
          <p key={index}>{item}</p>
        ) : (
          <ul key={index} className="list-disc ml-5">
            {item.list.map((listItem, listIndex) => (
              <li key={listIndex}>{listItem}</li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default Section;
