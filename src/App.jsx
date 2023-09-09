import { useState, useEffect } from "react";

function App() {
  // states for typing text with blinking cursor
  const [name, setName] = useState("");
  const fullName = " Daniel Brokk ";

  const [isTypingFinished, setIsTypingFinished] = useState(false);

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
          typeDeveloperText();
          return;
        }

        setTimeout(typeName, getRandomDelay(100, 500));
      }
    };

    typeName();

    return () => {
      i = fullName.length - 1; // finish animation
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center space-x-4">
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
        <p className="text-2xl font-mono border-b-2 border-green-600 hover:border-green-700 transition duration-300">
          Frontend Developer
        </p>
      </div>

      {/* Matrix Digital Rain Effect */}
      <pre className="my-6 text-sm font-mono p-4 rounded text-green-500">
        10 PRINT "HELLO WORLD"
        <br />
        20 GOTO 10
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
