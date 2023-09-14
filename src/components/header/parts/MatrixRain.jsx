const MatrixRain = ({displayedText}) => {
  return (
    <pre className="w-32 text-sm font-mono text-green-500 h-[3rem]">
      {displayedText.code}
      {displayedText.typingStatus === "finished" && (
        <span className="text-green-400 animate-blinking">|</span>
      )}
    </pre>
  );
};

export default MatrixRain;
