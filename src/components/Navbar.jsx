import { useState, useEffect } from "react";
import lastbarlogo from "../assets/lastbarlogo.png";
import { NavLink } from "react-router-dom";

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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`
        fixed top-0 left-0 w-full z-50 transition-colors duration-300 py-1
        ${atTop ? "bg-[#333333] backdrop-blur-lg" : ""}
        ${scrollUp ? "bg-white/10  backdrop-blur-lg" : ""}
      `}
      >
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <div className="">
            <img src={lastbarlogo} alt="" width={210} className="" />
          </div>
          <div className="roboto">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? "text-orange-500" : "text-gray-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <div className="bg-black h-screen mb-250 text-white mt-15">
        dfdfdfdfdfdfdfdf
      </div>
      <p>ffgfgfgfg</p>
    </>
  );
}
export default Navbar;
