import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";

function App() {

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col p-8 space-y-8">
      <Header />
      <Portfolio />
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
