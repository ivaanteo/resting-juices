import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev: Boolean) => !prev);
  };

  const tabs: string[] = ["about", "projects", "menu", "reserve"];

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
      className={`w-full top-0 z-50 fixed flex flex-col md:flex-row justify-between `}
    >
      <div
        className={`justify-between flex flex-row px-8 py-6 transition-all ease-in-out duration-[500ms] ${
          isMenuOpen ? "bg-darkPurple" : ""
        }`}
      >
        <button>
          <h3 className={`text-white`}>resting juices.</h3>
        </button>
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <X size={32} className="text-white" />
          ) : (
            <Menu size={32} className="text-white md:opacity-0" />
          )}
        </button>
      </div>
      <div className={`flex flex-col md:flex-row md:bg-none md:gap-4 md:pr-8`}>
        {tabs.map((tab: string, index: number) => (
          <button
            key={index}
            // Note: tailwind only allows for static values in transitionDelay
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`transition-all duration-[500ms] ease-in-out md:translate-x-0 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } p-4 md:bg-transparent md:border-none bg-darkPurple hover:text-yellow text-white  border-t-[1px] border-white md:text-white `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
