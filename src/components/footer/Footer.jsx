const Footer = () => {
  return (
    <footer className="flex flex-col items-center border-t-2 border-green-600">
      <div className="flex justify-evenly  w-full">
        <div className="flex flex-col  py-6">
          <h3 className="text-3xl font-mono text-center border-b-2 border-green-600 inline-block hover:border-green-700 transition duration-300">
            Contact
          </h3>
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-green-300">Email:</span>
              <a
                href="mailto:danielbrokky@gmail.com"
                className="text-green-400 hover:underline transition duration-300"
              >
                danielbrokky@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-green-300">Phone:</span>
              <span className="text-green-400">+972 55 287 6823</span>
            </div>
            <a
              href="https://wa.me/972552876823"
              className="text-green-400 hover:underline transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/danielbrokk"
              className="text-green-400 hover:underline transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-green-300">Address:</span>
              <span className="text-green-400">Haifa, Israel</span>
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col items-center space-y-2">
          <h3 className="text-3xl mb-4 font-mono border-b-2 border-green-600 inline-block hover:border-green-700 transition duration-300">
            Resume
          </h3>
          <a
            href=""
            download="DanielBrokk-CV.pdf"
            className="px-4 py-2 text-green-300 border-2 border-green-300 hover:bg-green-300 hover:text-black rounded transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
      <p className="w-full text-center text-green-400 border-t-2 border-green-600 py-2">
        © 2023 Daniel Brokk. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
