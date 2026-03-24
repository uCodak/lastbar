import lastbarlogo from "../assets/lastbarlogo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "MISSION", path: "/" },
    { name: "WOLFPACK", path: "/about" },
    { name: "THE PROTOCOL", path: "/services" },
    { name: "INTEL", path: "/contact" },
    { name: "RESOURCES", path: "/resources" },
  ];

  return (
    <>
      <nav
        className={`
        fixed top-0 left-0 w-full z-50 bg-white/10  backdrop-blur-lg transition-colors duration-300 py-1
       
      `}
      >
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <div className="">
            <img
              src={lastbarlogo}
              alt=""
              width={210}
              className="brightness-0 invert"
            />
          </div>
          <div className="jetbrain flex gap-3 text-[#71717B] ">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="
                  text-sm font-medium transition hover:text-white "
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <p className="border "></p>
    </>
  );
}
export default Navbar;
