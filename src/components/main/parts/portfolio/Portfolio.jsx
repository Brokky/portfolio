import { useState } from "react";
import images from "../../../../assets/images/projects/index";
import Button from "./parts/Button";
import Slide from "./parts/Slide";

const FIRST_IMG_INDEX = 0;
const LAST_IMG_INDEX = images.length - 1;

const Portfolio = ({ visibility }) => {
  const [currentIndex, setCurrentIndex] = useState(FIRST_IMG_INDEX);
  const { name, src, url, description, alt } = images[currentIndex];

  const changeSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "prev" && prevIndex > FIRST_IMG_INDEX)
        return prevIndex - 1;

      if (direction === "next" && prevIndex < LAST_IMG_INDEX)
        return prevIndex + 1;

      return prevIndex;
    });
  };

  return (
    <section
      className={`flex flex-col lg:justify-evenly gap-y-6 lg:gap-y-12 px-4 py-8 border-2 border-green-600 rounded-3xl ${visibility}`}
    >
      <h3 className="flex justify-center items-center text-2xl lg:text-5xl text-center font-mono font-bold tracking-wides min-h-[4rem]">
        {name}
      </h3>
      <div className="flex justify-between lg:justify-center">
        <Button
          currentIndex={currentIndex}
          boundaryIndex={FIRST_IMG_INDEX}
          changeSlide={() => changeSlide("prev")}
          icon={"<"}
        />
        <Slide src={src} url={url} alt={alt} />
        <Button
          currentIndex={currentIndex}
          boundaryIndex={LAST_IMG_INDEX}
          changeSlide={() => changeSlide("next")}
          icon={">"}
        />
      </div>
      <p className="italic text-center min-h-[3rem]">{description}</p>
    </section>
  );
};

export default Portfolio;
