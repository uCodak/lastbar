import Navbar from "./components/Navbar";
import CountDown from "./components/CountDown";

function Homepage() {
  return (
    <div>
      <Navbar />
      <CountDown />
      {/*background section*/}
      <div className="bg-[url('https://images.unsplash.com/photo-1543252358-f20f9c57bafe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxibGFjayUyMGJhY2tncm91bmQlMjBncmlkJTIwYW5kJTIwbW9kZXJufGVufDB8fDB8fHww')] w-full h-250 bg-cover bg-center bg-no-repeat flex justify-center text-white">
        <div className="w-[98%] mx-auto py-25">
          <h1 className="text-[#EC3057] mb-4 jetbrain text-center">
            --System Initialization
          </h1>
          <h2 className=" text-3xl md:text-7xl font-black gap-0 text-center mb-4 ">
            YOU DON'T NEED TO{" "}
            <span className="text-[#71717B]">
              {" "}
              RE-LEARN <br /> THE LAW.
            </span>
            <br /> YOU NEED TO{" "}
            <span className="text-[#F66F82]">
              {" "}
              FIX YOUR <br /> SYSTEM.
            </span>
          </h2>
          <p className="text-[#71717B] text-2xl font-medium w-[60%] mx-auto text-center">
            The industry treats repeaters like cash cows. They sell you
            "motion." I design paths for "action."
            <span className="text-white">
              I am not a bar prep company. I am a Systems Architect.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
