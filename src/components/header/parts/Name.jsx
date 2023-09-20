const Name = ({ displayedText }) => {
  const isNameTyping = displayedText.typingStatus === "name";
  const isJobTyping = displayedText.typingStatus === "job";

  return (
    <div className="flex flex-col items-center gap-y-2">
      <h1
        className="text-2xl lg:text-6xl text-center font-mono tracking-widest bg-clip-text text-transparent bg-gradient-to-r
 from-green-400 to-green-700 shadow-lg focus:scale-110 focus:shadow-xl animate-pulse"
      >
        [{displayedText.name}
        {isNameTyping && (
          <span className="text-green-400 animate-blinking">|</span>
        )}
        ]
      </h1>
      <p
        className={`text-md lg:text-2xl font-mono border-x-2 border-green-400 px-2 my-4 ${
          !isNameTyping && "border-b-2"
        }`}
      >
        {displayedText.job}
        {isJobTyping && (
          <span className="text-green-400 animate-blinking">|</span>
        )}
      </p>
    </div>
  );
};

export default Name;
