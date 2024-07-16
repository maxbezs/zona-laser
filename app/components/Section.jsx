import H3 from "./H3";
import Accordion from "./Accordion";

const Section = ({ title, content }) => {
  return (
    <div className="mt-6 rounded-xl bg-[#ECDAC9] p-4 sm:max-w-2xl sm:w-full sm:mx-auto">
      <H3>{title}</H3>
      {content.map((item, index) =>
        typeof item === "string" ? (
          <p key={index} className="font-opensans text-wrap	">
            {item}
          </p>
        ) : (
          <ul key={index} className="list-disc ml-5">
            {item.list.map((listItem, listIndex) =>
              typeof listItem === "string" ? (
                <li key={listIndex}>{listItem}</li>
              ) : (
                <li key={listIndex}>
                  <Accordion title={listItem.title}>
                    {listItem.content}
                  </Accordion>
                </li>
              )
            )}
          </ul>
        )
      )}
    </div>
  );
};

export default Section;
