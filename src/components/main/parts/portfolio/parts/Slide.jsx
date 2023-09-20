import React from "react";
import { useState } from "react";

const Slide = ({ src, url, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="flex flex-col items-center gap-12 w-3/5">
      <div
        className="relative flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={src}
          alt={alt}
          className={`max-h-60 max-w-[10rem] md:max-w-md lg:max-w-lg border-4 border-dashed border-green-400 rounded-3xl transition-opacity duration-500 ${
            isHovered && "opacity-30"
          }`}
        />
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className={`absolute text-md md:text-xl lg:text-2xl border-2 border-green-400 bg-black rounded-full px-4 py-3 link-transform-opacity-500
         hover:scale-125 hover:border-black hover:bg-green-400 hover:text-black
        ${!isHovered && "opacity-0"}`}
        >
          View project
        </a>
      </div>
    </article>
  );
};

export default Slide;
