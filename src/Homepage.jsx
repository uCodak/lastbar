import Navbar from "./components/Navbar";
import CountDown from "./components/CountDown";

function Homepage() {
  return (
    <div>
      <Navbar />
      <CountDown />
      {/*background section*/}
      <div className="bg-[url('https://images.unsplash.com/photo-1543252358-f20f9c57bafe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxibGFjayUyMGJhY2tncm91bmQlMjBncmlkJTIwYW5kJTIwbW9kZXJufGVufDB8fDB8fHww')] w-full h-250 bg-cover bg-center bg-no-repeat text-white">
        <div className="w-[90%] mx-auto py-25">
          <h1 className="text-[#EC3057]">-System Initialization</h1>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
