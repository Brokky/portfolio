import React from "react";
import { useState, useEffect } from "react";
import Contacts from "./parts/Contacts";
import CV from "../../assets/DanielBrokk-CV.pdf"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footerTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    return () => {
      clearTimeout(footerTimeout);
    };
  }, []);

  const visibilityClass = isVisible
    ? "transition duration-1000"
    : "transition duration-1000 max-h-0 opacity-0";

  return (
    <footer
      className={`flex flex-col items-center mt-12 border-t-2 border-green-600 ${visibilityClass}`}
    >
      <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-stretch w-full  italic">
        <Contacts />
        <div className="py-6 flex flex-col items-center">
          <h3 className="text-2xl lg:text-3xl font-mono border-b-2 border-green-600 inline-block hover:border-green-700 transition duration-300">
            Curriculum Vitae
          </h3>
          <a
            href={CV}
            download="DanielBrokk-CV.pdf"
            className="mt-4 lg:mt-10 px-4 py-2 text-green-300 border-2 border-green-300 hover:bg-green-300 hover:text-black rounded transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
      <p className="w-full text-center text-green-400 border-t-2 border-green-600 py-2">
        © 2023 Daniel Brokk. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
