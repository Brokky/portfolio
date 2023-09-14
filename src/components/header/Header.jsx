import { useState, useEffect } from "react";
import MatrixRain from "./parts/MatrixRain";
import Name from "./parts/Name";
import Links from "./parts/Links";

const Header = () => {
  // states for typing text with blinking cursor
  const [displayedText, setDisplayedText] = useState({
    name: "",
    job: "",
    code: "",
    typingStatus: "name",
  });

  const name = " Daniel Brokk ";
  const job = "Frontend Developer";
  const code = "10 PRINT 'Hello World!'\n20 GOTO 10";

  // delay for matrix rain
  const [codeDelay, setCodeDelay] = useState(false);

  // typing text effect
  useEffect(() => {
    if (codeDelay) return;

    const interval = setInterval(() => {
      setDisplayedText((prevText) => {
        const nextNameChar = name[prevText.name.length];
        const nextJobChar = job[prevText.job.length];
        const nextCodeChar = code[prevText.code.length];

        if (nextNameChar) {
          return {
            ...prevText,
            name: prevText.name + nextNameChar,
            typingStatus:
              prevText.name.length === name.length - 1
                ? "job"
                : prevText.typingStatus,
          };
        } else if (nextJobChar) {
          return {
            ...prevText,
            job: prevText.job + nextJobChar,
            typingStatus:
              prevText.job.length === job.length - 1
                ? "finished"
                : prevText.typingStatus,
          };
        } else if (nextCodeChar) {
          return {
            ...prevText,
            code: prevText.code + nextCodeChar,
          };
        }

        if (!nextCodeChar && !codeDelay) {
          setCodeDelay(true);
          setTimeout(() => {
            setDisplayedText({
              ...prevText,
              code: "",
            });
            setCodeDelay(false);
          }, 500);
        }

        return prevText;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [codeDelay]);

  return (
    <header className="flex justify-between items-center px-4">
      <MatrixRain displayedText={displayedText} />
      <Name displayedText={displayedText}/>
      <Links displayedText={displayedText}/>
    </header>
  );
};

export default Header;
