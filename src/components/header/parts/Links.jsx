const Links = ({ displayedText }) => {
  const linksData = [
    {
      label: "GitHub",
      url: "https://github.com/Brokky",
      additionalClass: "button-transition",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/daniel-brokk-898b0b24b/",
      additionalClass: "button-transition-delay",
    },
  ];

  const isVisible = displayedText.typingStatus === "code";

  const commonClass = `w-32 inline-block text-center text-2xl bg-black border-2 rounded-full border-green-400 px-4 py-2
  hover:scale-125 hover:bg-green-400 hover:text-black hover:border-black ${
    isVisible ? "opaicty-100" : "opacity-0"
  }`;

  return (
    <ul className="space-y-4">
      {linksData.map((link) => (
        <li key={link.label}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener"
            className={`${commonClass} ${link.additionalClass}`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
