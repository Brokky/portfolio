import { useState, useEffect } from "react";

function App() {
  // states for typing text with blinking cursor
  const [name, setName] = useState("");
  const [codeText, setCodeText] = useState("");
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  const fullName = " Daniel Brokk ";
  const gitHub = "GitHub";

  // random delay for simulating
  const getRandomDelay = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  // starting animation
  useEffect(() => {
    let i = 0;

    const typeName = () => {
      if (i < fullName.length - 1) {
        setName((prevText) => prevText + fullName[i]);

        i++;

        if (i === fullName.length - 1) {
          setIsTypingFinished(true);
          return;
        }

        setTimeout(typeName, getRandomDelay(50, 200));
      }
    };

    typeName();

    return () => {
      i = fullName.length - 1; // finish animation
    };
  }, []);

  useEffect(() => {
    if (isTypingFinished) {
      let codeTexts = [" 10 PRINT 'Hello, World!'", " 20 GOTO 10"];
      let currentTextIndex = 0;
      let charIndex = 0;

      const typeCodeText = () => {
        if (charIndex < codeTexts[currentTextIndex].length - 1) {
          console.log(codeTexts[currentTextIndex][charIndex]);
          setCodeText(
            (prevText) => prevText + codeTexts[currentTextIndex][charIndex]
          );
          charIndex++;
          setTimeout(typeCodeText, getRandomDelay(50, 200));
        } else {
          // После того как одна строка напечатана, переходим к следующей или начинаем сначала
          if (currentTextIndex === codeTexts.length - 1) {
            setTimeout(() => {
              // Добавляем задержку перед стиранием текста
              setCodeText("");
              currentTextIndex = 0;
              charIndex = 0;
              setTimeout(typeCodeText, getRandomDelay(50, 200));
            }, 1000); // Задержка в 1 секунду
          } else {
            setCodeText((prevText) => prevText + "\n");
            currentTextIndex++;
            charIndex = 0;
            setTimeout(typeCodeText, getRandomDelay(50, 200));
          }
        }
      };

      typeCodeText();
    }
  }, [isTypingFinished]);
  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col p-8 space-y-8">
      {/* Header */}
      <div className="flex">
        <div className="flex flex-col justify-between items-center space-x-4">
          <h1
            className="text-6xl font-mono bg-clip-text text-transparent bg-gradient-to-r
         from-green-400 to-green-700 shadow-lg transform transition-transform duration-700 delay-150 hover:scale-110 hover:shadow-xl
          focus:scale-110 focus:shadow-xl animate-pulse"
          >
            [{name}
            {!isTypingFinished && (
              <span className="text-green-400 blinking">|</span>
            )}
            ]
          </h1>
          <p className="text-2xl font-mono border-b-2 border-green-600 hover:border-green-700 transition duration-300 my-4">
            {isTypingFinished && ('Frontend Developer')}
          </p>
        </div>
        <p className="">GitHub</p>
      </div>

      {/* Matrix Digital Rain Effect */}
      <pre className="my-6 text-sm font-mono p-4 rounded text-green-500 h-[3rem]">
        {codeText}
        {isTypingFinished && "|"}
      </pre>
      {/* Portfolio Section */}
      <div className="flex-grow grid grid-cols-1 gap-6 mt-6">
        <div className="p-4 border-dashed border-2 border-green-600 rounded relative hover:border-green-700 transition duration-300">
          <img
            src=""
            alt="Project 1"
            className="w-full h-40 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
          <h3 className="text-2xl absolute top-2 left-2">Project 1</h3>
          <p className="text-green-300 absolute bottom-2 left-2">
            Some brief about the project.
          </p>
        </div>
        {/* Add more portfolio items similarly */}
      </div>

      {/* Footer / Contact */}
      <div className="mt-auto py-6 border-t-2 border-green-600">
        <h2 className="text-3xl mb-4 font-mono border-b-2 border-green-600 inline-block hover:border-green-700 transition duration-300">
          Let's Connect
        </h2>
        <div className="mt-4">
          <a
            href="mailto:your.email@example.com"
            className="text-2xl text-green-600 hover:underline transition duration-300"
          >
            Send a Message
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
