import { useState } from "react";
import images from "../../../../assets/images/projects/index";
import Button from "./parts/Button";
import Slide from "./parts/Slide";

const FIRST_IMG_INDEX = 0;
const LAST_IMG_INDEX = images.length - 1;

const Portfolio = ({ visibility }) => {
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
    <section
      className={`flex justify-between lg:justify-evenly items-center px-2 lg:px-0  py-8 border-2 border-green-600 rounded-3xl ${visibility}`}
    >
      {/* 
        <h3><h3>
        <div>
          <button />
          <slide />
          <button />
        <div />
        <p></p>
      */}
      
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
