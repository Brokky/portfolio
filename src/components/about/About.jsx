const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around py-8 space-y-8 border-2 border-green-600 rounded-3xl">
      <h2 className="text-4xl font-mono mb-4">About Me</h2>
      <article className="max-w-lg space-y-4">
        <p className="text-lg leading-relaxed">
          Hello! I'm Daniel Brokk, a frontend developer specializing in React. I
          genuinely enjoy web development and constantly seek ways to improve.
          For me, it's about crafting functional sites and apps that users will
          love. Quality work and continuous learning are at the heart of what I
          do.
        </p>
        <p className="text-lg leading-relaxed">
          I'm always eager to embrace new challenges and improve my skills.
          Let's create something amazing together!
        </p>
      </article>

      <div className="flex flex-wrap justify-center space-x-4 md:space-x-8">
        <div className="p-4 hover:bg-green-100 rounded transition">
          <img
            src="/path_to_js_icon.png"
            alt="JavaScript"
            className="w-16 h-16 md:w-20 md:h-20 mx-auto transition-transform transform hover:scale-125"
          />
          <span className="mt-2 block text-center text-green-700 hover:text-green-900 transition">
            JavaScript (ES6+)
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
