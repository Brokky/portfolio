import React from "react";
import { useState, useEffect } from "react";
import MatrixRain from "./parts/MatrixRain";
import Name from "./parts/Name";
import Links from "./parts/Links";

const NAME_TEXT = " Daniel Brokk ";
const JOB_TEXT = "Frontend Developer";
const CODE_TEXT = "10 PRINT 'Hello World!'\n20 GOTO 10";

const TYPING_STATUS = {
  NAME: "name",
  JOB: "job",
  CODE: "code",
};

const Header = () => {
  const [displayedText, setDisplayedText] = useState({
    name: "",
    job: "",
    code: "",
    typingStatus: TYPING_STATUS.NAME,
  });

  const [codeDelay, setCodeDelay] = useState(false);

  useEffect(() => {
    if (codeDelay) return;

    const interval = setInterval(() => {
      setDisplayedText((prevText) => {
        const { name, job, code, typingStatus } = prevText;
        const nextNameChar = NAME_TEXT[prevText.name.length];
        const nextJobChar = JOB_TEXT[prevText.job.length];
        const nextCodeChar = CODE_TEXT[prevText.code.length];

        if (nextNameChar) {
          return {
            ...prevText,
            name: name + nextNameChar,
            typingStatus:
              name.length === NAME_TEXT.length - 1 ? TYPING_STATUS.JOB : typingStatus,
          };
        } else if (nextJobChar) {
          return {
            ...prevText,
            job: job + nextJobChar,
            typingStatus:
              job.length === JOB_TEXT.length - 1 ? TYPING_STATUS.CODE: typingStatus,
          };
        } else if (nextCodeChar) {
          return {
            ...prevText,
            code: code + nextCodeChar,
          };
        }

        if (!nextCodeChar) {
          setCodeDelay(true);
          setTimeout(() => {
            setDisplayedText({
              ...prevText,
              code: "",
            });
            setCodeDelay(false);
          }, 1000);
        }

        return prevText;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [codeDelay]);

  return (
    <header className="flex flex-col gap-y-6 xl:flex-row justify-between items-center min-h-[8rem] px-4">
      <MatrixRain displayedText={displayedText} />
      <Name displayedText={displayedText} />
      <Links displayedText={displayedText} />
    </header>
  );
};

export default Header;
