import CountDown from "./components/CountDown";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-15">
        <CountDown />
      </div>
    </>
  );
}

export default App;
