const Button = ({ currentIndex, wrongIndex, changeSlide, icon }) => {
  return (
    <button
      className={`text-8xl hover:scale-150 ${
        currentIndex === wrongIndex && "invisible"
      }`}
      onClick={changeSlide}
    >
      {icon}
    </button>
  );
};

export default Button;
