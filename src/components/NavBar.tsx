import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

interface Tab {
  text: string;
  path: string;
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev: Boolean) => !prev);
  };

  const tabs: Tab[] = [
    { text: "about", path: "/about" },
    { text: "projects", path: "/projects" },
    { text: "menu", path: "/menu" },
    { text: "reserve", path: "/reserve" },
  ];

  // listen to screen width and close menu if > 764px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 764 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <div
      className={`w-full top-0 z-50 fixed flex flex-col md:flex-row justify-between bg-opacity-20 bg-black md:items-center`}
    >
      <div
        className={`justify-between flex flex-row px-8 py-6 transition-all ease-in-out duration-[500ms] ${
          isMenuOpen ? "bg-darkPurple" : ""
        }`}
      >
        <button>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `text-yellow` : `text-white`
            }
          >
            <h3 className={`text-white`}>resting juices.</h3>
          </NavLink>
        </button>
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <X size={32} className="text-white" />
          ) : (
            <Menu size={32} className="text-white md:opacity-0" />
          )}
        </button>
      </div>
      <div
        className={`transition-all duration-[500ms] ease-in-out ${
          isMenuOpen ? "" : "h-0"
        } flex-col flex md:flex-row md:bg-none md:gap-4 md:pr-8 md:py-0 md:items-center`}
        style={{ transitionDelay: `${tabs.length * 100}ms` }}
      >
        {tabs.map((tab: Tab, index: number) => (
          <NavLink
            to={tab.path}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-yellow font-bold"
                  : "text-white hover:text-yellow"
              }`
            }
          >
            <button
              key={index}
              // Note: tailwind only allows for static values in transitionDelay
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`transition-all duration-[500ms] ease-in-out md:translate-x-0 ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } md:bg-transparent md:border-none bg-darkPurple border-t-[1px] border-white md:text-white p-6 w-full`}
              // Dismiss on click
              onClick={() => setIsMenuOpen(false)}
            >
              {tab.text}
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
