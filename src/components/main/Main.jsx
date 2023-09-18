import { useState, useEffect } from "react";
import About from "./parts/about/About";
import Portfolio from "./parts/portfolio/Portfolio";

const Main = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    portfolio: false,
  });

  useEffect(() => {
    const aboutTimeout = setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, about: true }));
    }, 5000);

    const portfolioTimeout = setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, portfolio: true }));
    }, 6000); 

    return () => {
      clearTimeout(aboutTimeout);
      clearTimeout(portfolioTimeout);
    };
  }, []); 

  const visibilityClass = (component) => {
    return component
      ? "transition duration-1000"
      : "transition duration-1000 opacity-0";
  };

  return (
    <main className="flex flex-col gap-y-8">
      <About visibility={visibilityClass(isVisible.about)} />
      <Portfolio visibility={visibilityClass(isVisible.portfolio)} />
    </main>
  );
};

export default Main;
