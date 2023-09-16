const Links = ({displayedText}) => {
  return (
    <ul className="space-y-4">
      <li>
        <a
          href="https://github.com/Brokky"
          target="_blank"
          className={`w-32 inline-block text-center text-2xl bg-black border-2 rounded-full border-green-400 px-4 py-2 button-transition hover:scale-125 hover:bg-green-400 hover:text-black hover:border-black ${
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
          className={`w-32 inline-block text-center text-2xl bg-black border-2 rounded-full border-green-400 px-4 py-2 button-transition button-transition-delay hover:scale-125 hover:bg-green-400 hover:text-black hover:border-black ${
            displayedText.typingStatus === "finished"
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
};

export default Links;
