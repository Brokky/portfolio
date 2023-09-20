import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col p-8 pb-0">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
