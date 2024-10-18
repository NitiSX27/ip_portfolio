import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [isSticky, setSticky] = useState(false);

  // Detect scrolling
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true); // Apply sticky style when scrolled
    } else {
      setSticky(false); // Remove sticky style when at the top
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openmenu = () => {
    settoggle(true);
  };

  const closemenu = () => {
    settoggle(false);
  };

  return (
    <>
      {/* Navbar container with conditional class based on scroll */}
      <div
        className={`${
          isSticky
            ? "bg-white bg-inherit shadow-md fixed top-0 left-0 right-0 z-50"
            : "bg-transparent"
        } flex justify-between items-center p-10 transition-all duration-300`}
      >
        <div className="flex justify-center items-center">
          <a href="#" className="text-white font-mono text-4xl flex tracking-wider items-center">
            <img
              src="/mainlogo.png"
              alt="Be The Future"
              className="bg-transparent"
              style={{ width: "300px", height: "auto" }}
            />
          </a>
        </div>

        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <a
              href="#skills"
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Projects
            </a>
            <a
              href="#test"
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Contact
            </a>
          </div>

          <div className="ssm:block lg:hidden">
            {toggle ? (
              <img
                src="/img1.svg"
                alt="menu"
                sizes={100}
                onClick={closemenu}
                className="text-white cursor-pointer"
              />
            ) : (
              <img
                src="/img1.svg"
                alt="menu"
                sizes={100}
                onClick={openmenu}
                className="text-white cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="ssm:block lg:hidden">
        {toggle ? (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-white text-xl mb-2 cursor-pointer">
                <a href="#skills" onClick={closemenu}>Skills</a>
              </li>
              <li className="text-white text-xl mb-2 cursor-pointer">
                <a href="#projects" onClick={closemenu}>Projects</a>
              </li>
              <li className="text-white text-xl mb-2 cursor-pointer">
                <a href="#test" onClick={closemenu}>Test</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
