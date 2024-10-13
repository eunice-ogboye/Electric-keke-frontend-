import { about_descriptions, about_titles } from "@/constants";
import Flexibility from "./earn/Flexibility";
import BriefingBox from "./BriefingBox";

const PageBriefing = ({ type = "main" }) => {
  return (
    <section id="about" className="page-brief-container">
      <div className="">
        {type === "earn" && <Flexibility />}

        {type === "main" && (
          <BriefingBox
            brief={{
              briefClass: "w-full tablet:w-[58%]",
              introTitle: "About Us",
              title: about_titles.one,
              description: about_descriptions.one,
              image: "/about.png",
              imgClass: "main-image",
              showBtn: true,
            }}
          />
        )}

        {type === "about" && (
          <BriefingBox
            brief={{
              briefClass: "w-full tablet:w-[52%]",
              title: about_titles.one,
              description: about_descriptions.three,
              image: "/briefings/about-clip.gif",
              imgClass: "gif-image",
            }}
          />
        )}

        {type === "earn" && (
          <BriefingBox
            brief={{
              image: "/earn_about_bg.png",
              imgClass: "earn-image",
            }}
            type={type}
          />
        )}
      </div>
    </section>
  );
};

export default PageBriefing;
