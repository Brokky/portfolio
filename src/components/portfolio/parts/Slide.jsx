import { useState } from "react";

const Slide = ({ currentIndex, images }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, src, url, description, alt } = images[currentIndex];

  return (
    <article className="flex flex-col items-center gap-8 w-2/5">
      <h3 className="text-4xl font-bold">{name}</h3>
      <div
        className="relative flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={src}
          alt={alt}
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
        {description}
      </p>
    </article>
  );
};

export default Slide;
