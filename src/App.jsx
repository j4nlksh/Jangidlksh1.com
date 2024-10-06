import Navbar from "./components/Navbar";
import half from "./assets/animeStand.png";
import Bio from "./components/Bio";
function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="relative w-[30%] bg-black flex items-end justify-center">
          <img src={half} alt="Anime Character" className="w-full max-h-[100vh] object-contain" />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[50%] h-6 bg-gradient-to-r from-gray-500/50 via-gray-700/50 to-gray-500/50 rounded-full blur-md"></div>
        </div>
        <div className=" w-[70%] bg-gray-300 max-w-screen-xl">
          <Navbar />
        </div>
        
      </div>
    </>
  );
}

export default App;
