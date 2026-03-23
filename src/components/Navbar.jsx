import { useState, useEffect } from "react";
import lastbarlogo from "../assets/lastbarlogo.png";

function Navbar() {
  const [scrollUp, setScrollUp] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      setAtTop(currentScroll === 0); // True if at top
      setScrollUp(currentScroll < lastScrollTop && currentScroll > 0); // True if scrolling up

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
        fixed top-0 left-0 w-full z-50 transition-colors duration-300 py-1
        ${atTop ? "bg-white/20 backdrop-blur-md" : ""}
        ${scrollUp ? "bg-white/10  backdrop-blur-lg" : ""}
      `}
      >
        <div className="w-[90%] mx-auto">
          <img src={lastbarlogo} alt="" width={210} className="" />
        </div>
      </nav>
      <div className="bg-black h-screen mb-250">d</div>
      <p>ffgfgfgfg</p>
    </>
  );
}
export default Navbar;
