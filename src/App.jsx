import Header from "./components/header/Header";

function App() {


  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col p-8 space-y-8">
      <Header />
      {/* Portfolio Section */}
      <div className="flex-grow grid grid-cols-1 gap-6 mt-6">
        <div className="p-4 border-dashed border-2 border-green-600 rounded relative hover:border-green-700 transition duration-300">
          <img
            src=""
            alt="Project 1"
            className="w-full h-40 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
          <h3 className="text-2xl absolute top-2 left-2">Project 1</h3>
          <p className="text-green-300 absolute bottom-2 left-2">
            Some brief about the project.
          </p>
        </div>
        {/* Add more portfolio items similarly */}
      </div>

      {/* Footer / Contact */}
      <div className="mt-auto py-6 border-t-2 border-green-600">
        <h2 className="text-3xl mb-4 font-mono border-b-2 border-green-600 inline-block hover:border-green-700 transition duration-300">
          Let's Connect
        </h2>
        <div className="mt-4">
          <a
            href="mailto:your.email@example.com"
            className="text-2xl text-green-600 hover:underline transition duration-300"
          >
            Send a Message
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
