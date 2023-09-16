const Name = ({displayedText}) => {
  return (
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
      <p className={`text-2xl font-mono border-x-2 border-green-400 px-2 my-4 ${displayedText.typingStatus !== "name" && "border-b-2"}`}>
        {displayedText.job}
        {displayedText.typingStatus === "job" && (
          <span className="text-green-400 animate-blinking">|</span>
        )}
      </p>
    </div>
  );
};

export default Name;
