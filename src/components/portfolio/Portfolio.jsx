import { useState } from "react";
import images from "../../assets/images/projects/index";
import Button from "./parts/Button";
import Slide from "./parts/Slide";

const FIRST_IMG_INDEX = 0;
const LAST_IMG_INDEX = images.length - 1;

const Portfolio = () => {

  const [currentIndex, setCurrentIndex] = useState(FIRST_IMG_INDEX);

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
    <section className="flex justify-evenly items-center py-8 border-2 border-green-600 rounded-3xl">
      {/* H2 Projects Title */}
      <Button
        currentIndex={currentIndex}
        boundaryIndex={FIRST_IMG_INDEX}
        changeSlide={() => changeSlide("prev")}
        icon={"<"}
      />
      <Slide currentIndex={currentIndex} images={images} />
      <Button
        currentIndex={currentIndex}
        boundaryIndex={LAST_IMG_INDEX}
        changeSlide={() => changeSlide("next")}
        icon={">"}
      />
    </section>
  );
};

export default Portfolio;
