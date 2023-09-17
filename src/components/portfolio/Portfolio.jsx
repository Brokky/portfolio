import { useState } from "react";
import images from "../../assets/images/index";
import Button from "./parts/Button";
import Slide from "./parts/Slide";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [FIRST_IMG_INDEX, LAST_IMG_INDEX] = [0, images.length - 1];

  const getPrevImg = () => {
    if (currentIndex > FIRST_IMG_INDEX) {
      setCurrentIndex((curImg) => curImg - 1);
    }
  };
  const getNextImg = () => {
    if (currentIndex < LAST_IMG_INDEX) {
      setCurrentIndex((curImg) => curImg + 1);
    }
  };

  return (
    <section className="flex justify-evenly items-center py-8 border-2 border-green-600 rounded-3xl">
      {/* H2 Projects Title */}
      <Button
        currentIndex={currentIndex}
        wrongIndex={FIRST_IMG_INDEX}
        changeSlide={getPrevImg}
        icon={"<"}
      />
      <Slide 
        currentIndex={currentIndex}
      />
      <Button
        currentIndex={currentIndex}
        wrongIndex={LAST_IMG_INDEX}
        changeSlide={getNextImg}
        icon={">"}
      />
    </section>
  );
};

export default Portfolio;
