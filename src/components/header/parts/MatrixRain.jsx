const MatrixRain = ({displayedText}) => {
  const isCodeTyping = displayedText.typingStatus === "code";

  return (
    <pre className="w-32 text-sm font-mono text-green-500 h-[3rem]">
      {displayedText.code}
      {isCodeTyping && (
        <span className="text-green-400 animate-blinking">|</span>
      )}
    </pre>
  );
};

export default MatrixRain;
