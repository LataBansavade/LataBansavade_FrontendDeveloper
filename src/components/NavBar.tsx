import logo from "../images/Frame 43094.png";
import { useState, useRef, useEffect } from "react";

function NavBar() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (activeIndex === -1) return;
    const activeItem = itemsRef.current[activeIndex];
    if (!activeItem) return;

    const { offsetLeft, offsetWidth } = activeItem;
    setBackgroundStyle({
      left: offsetLeft,
      width: offsetWidth,
    });
  }, [activeIndex]);

  function toggleMenu(e) {
    // Prevent propagation so that the click doesn’t bubble up
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  }

  return (
    <div className="flex items-center justify-between px-14 py-8 relative">
      {/* Logo */}
      <div className="log">
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Navigation (visible on screens above ~1200px) */}
      <div className="hidden xl:flex items-center gap-8">
        {/* LinksDiv */}
        <div className="links fixed left-[25vw] w-[50vw] overflow-hidden backdrop-blur-lg bg-white/10 rounded-3xl py-2 px-14 border border-white/10">
          <ul
            className="flex relative list-none p-0 m-0"
            onMouseLeave={() => setActiveIndex(-1)}
          >
            {["Features", "Why Us", "Tokinomics", "RoadMap"].map(
              (item, index) => (
                <li
                  key={item}
                  ref={(el) => (itemsRef.current[index] = el)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="relative px-10 py-2 cursor-pointer transition-colors duration-300 z-10 text-[#88f7ffb2] hover:text-[#f1f1f1b2]"
                >
                  <a href={`#${item}`}>
                    {item}
                  </a>
                </li>
              )
            )}
            {/* Animated background */}
            <div
              className="absolute h-full bg-gray-400/20 transition-all duration-300 rounded-2xl"
              style={{
                ...backgroundStyle,
                opacity: activeIndex === -1 ? 0 : 1,
              }}
            />
          </ul>
        </div>

        {/* buttonDiv */}
        <div className="navBtn flex gap-2">
          <button className="px-4 rounded-lg font-medium transition-colors hover:bg-gray-100 hover:text-black">
            Log in
          </button>
          <button className="bg-[#CDFCFF] hover:bg-[#acedf3] px-6 py-3 rounded-lg font-medium transition-colors text-black shadow-inner shadow-2xl shadow-[#4CDDFD]">
            Whitepaper
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Burger Menu (visible below ~1200px) */}
      <div className="xl:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {/* Burger Icon */}
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-3/4 max-w-sm bg-gray-900 text-white p-8"
            // Prevent closing when clicking inside the menu
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={toggleMenu} className="mb-4 focus:outline-none">
              {/* Close Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Mobile Menu Links */}
            <ul className="space-y-4">
              {["Features", "Why Us", "Tokinomics", "RoadMap"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-gray-300"
                  onClick={() => setMenuOpen(false)}
                >
                  <a href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            {/* Mobile Menu Buttons */}
            <div className="mt-6 flex flex-col gap-4">
              <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-gray-700 hover:bg-gray-600">
                Log in
              </button>
              <button className="bg-[#CDFCFF] hover:bg-[#acedf3] px-6 py-3 rounded-lg font-medium transition-colors text-black">
                Whitepaper
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
