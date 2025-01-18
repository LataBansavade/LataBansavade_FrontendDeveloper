import icon from "../images/logo.png";

export const NavBar = () => {
  return (
    <div className="px-14">
      <nav className="py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={icon} />
          <span className="text-xl font-bold">EthAI</span>
        </div>

        <div className="bg-[#0C2B2FB2] bg-opacity-10 px-28 py-4 rounded-full backdrop-blur-md border border-[#B0FAFFB2] shadow-md">
          <ul className="flex gap-14 text-md text-[#B0FAFFB2]">
            <li>
              <a href="#features" className="hover:text-cyan-200">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-200">
                Why Us
              </a>
            </li>
            <li>
              <a href="#tokenomics" className="hover:text-cyan-200">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="#roadmap" className="hover:text-cyan-200">
                Roadmap
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button className="px-4 py-2 rounded-lg font-medium transition-colors">
            Log in
          </button>
          <button
            className="bg-[#CDFCFF] px-4 py-2 rounded-lg font-medium transition-colors text-black shadow-inner shadow-2xl shadow-[#4CDDFD]"
          >
            Whitepaper
          </button>
        </div>
      </nav>
    </div>
  );
};
