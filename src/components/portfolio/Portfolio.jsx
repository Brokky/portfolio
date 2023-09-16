import images from "../../assets/images/index";
import { useState } from "react";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const [isHovered, setIsHovered] = useState(false);

  const { name, src, url, description } = images[currentIndex];

  const [FIRST_IMG_INDEX, LAST_IMG_INDEX] = [0, images.length - 1];

  return (
    <section className="flex justify-evenly items-center py-8 border-2 border-green-600 rounded-3xl">
      {/* H2 Projects Title */}
      <button
        className={`text-8xl hover:scale-150 ${
          currentIndex === FIRST_IMG_INDEX && "invisible"
        }`}
        onClick={getPrevImg}
      >
        {"<"}
      </button>
      <article className="flex flex-col items-center gap-8 w-2/5">
        <h3 className="text-4xl font-bold">{name || "Project name"}</h3>
        <div
          className="relative flex justify-center items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={src}
            alt={`Screenshot of ${name} project`}
            className={`max-h-60 max-w-lg border-4 border-dashed border-green-400 rounded-3xl transition-opacity duration-500 ${
              isHovered && "opacity-30"
            }`}
          />
          <a
            href={url}
            target="_blank"
            rel="noopener"
            className={`absolute text-2xl border-2 border-green-400 bg-black rounded-full px-4 py-3 link-transform-opacity-500
             hover:scale-125 hover:border-black hover:bg-green-400 hover:text-black
            ${!isHovered && "opacity-0"}`}
          >
            View project
          </a>
        </div>
        <p className="italic text-center h-12">
          {description || "Project description"}
        </p>
      </article>
      <button
        className={`text-8xl hover:scale-150 ${
          currentIndex === LAST_IMG_INDEX && "invisible"
        }`}
        onClick={getNextImg}
      >
        {">"}
      </button>
    </section>
  );
};

export default Portfolio;
