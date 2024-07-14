import H3 from "./H3";

const Section = ({ title, content }) => {
  return (
    <div className="mt-6 rounded-xl bg-[#ECDAC9] p-4">
      <H3>{title}</H3>
      {content.map((item, index) =>
        typeof item === "string" ? (
          <p key={index} className="font-opensans">
            {item}
          </p>
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
