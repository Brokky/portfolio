import { useState, useEffect } from "react";

function App() {
  // states for typing text with blinking cursor
  const [displayedText, setDisplayedText] = useState({
    name: "",
    job: "",
    typingStatus: "name",
  });

  const name = " Daniel Brokk ";
  const job = "Frontend Developer";

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prevText) => {
        const nextNameChar = name[prevText.name.length];
        const nextJobChar = job[prevText.job.length];

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
        }

        return prevText;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="w-32"></div>{" "}
        {/* Добавлено для сохранения пустого пространства слева */}
        <div className="flex flex-col items-center space-x-4">
          <h1
            className="text-6xl font-mono bg-clip-text text-transparent bg-gradient-to-r
     from-green-400 to-green-700 shadow-lg focus:scale-110 focus:shadow-xl animate-pulse"
          >
            [{displayedText.name}
            {displayedText.typingStatus === "name" && (
              <span className="text-green-400 animate-blinking">|</span>
            )}
            ]
          </h1>
          <p className="text-2xl font-mono border-b-2 border-green-600 hover:border-green-700 transition duration-300 my-4">
            {displayedText.job}
            {displayedText.typingStatus === "job" && (
              <span className="text-green-400 animate-blinking">|</span>
            )}
          </p>
        </div>
        <ul className="space-y-8">
          <li>
            <a
              href="https://github.com/Brokky"
              target="_blank"
              className={`w-32 inline-block text-center text-2xl bg-black border-2 rounded-full border-green-400 px-4 py-2 button-transition transform hover:scale-125 hover:bg-green-400 hover:text-black hover:border-black ${
                displayedText.typingStatus === "finished"
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/daniel-brokk-898b0b24b/"
              target="_blank"
              className={`w-32 inline-block text-center text-2xl bg-black border-2 rounded-full border-green-400 px-4 py-2 button-transition button-transition-delay transform hover:scale-125 hover:bg-green-400 hover:text-black hover:border-black ${
                displayedText.typingStatus === "finished"
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      {/* Matrix Digital Rain Effect */}
      <pre className="my-6 text-sm font-mono p-4 rounded text-green-500 h-[3rem]"></pre>
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
