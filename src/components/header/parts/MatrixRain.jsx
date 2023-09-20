import React from "react";

const MatrixRain = ({displayedText}) => {
  const isCodeTyping = displayedText.typingStatus === "code";

  return (
    <pre className="text-center text-xs lg:text-sm font-mono text-green-500 h-[3rem] lg:w-32 md:text-start">
      {displayedText.code}
      {isCodeTyping && (
        <span className="text-green-400 animate-blinking">|</span>
      )}
    </pre>
  );
};

export default MatrixRain;
