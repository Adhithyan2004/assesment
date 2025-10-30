import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F0B43] text-white px-6 pt-10 pb-4 flex flex-col gap-10 sm:px-10 md:px-16 lg:px-20">
      {/* Logo */}
      <h1 className="text-2xl font-bold sm:text-3xl md:text-left">Red Sky</h1>

      {/* Main Content */}
      <div className="MainCntr flex flex-col justify-between gap-10 md:flex-row md:flex-wrap md:gap-8 lg:gap-12">
        {/* Address 1 */}
        <div className="Address1 md:w-[45%] lg:w-auto">
          <h2 className="font-bold text-lg">United Kingdom</h2>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            Address: The Bower (L2), 207 Old Street, London, EC1V 9NR <br />
            Phone: +44 (0)207 XXX XXXX <br />
            Company number: 13019575 <br />
            FCA reference number: 992972
          </p>
        </div>

        {/* Address 2 */}
        <div className="Address2 md:w-[45%] lg:w-auto">
          <h2 className="font-bold text-lg">Germany</h2>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            Address: Kollwitzstraße 89, 10435, Berlin <br />
            Handelsregisternummer: 235687 B
          </p>
        </div>

        {/* Nav Links 1 */}
        <div className="NavLinks1 flex flex-col gap-3 text-sm md:text-base">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Imprint
          </a>
        </div>

        {/* Nav Links 2 */}
        <div className="NavLinks2 flex flex-col gap-3 text-sm md:text-base">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Platform
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Finance
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Forwarding
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            About Us
          </a>
        </div>

        {/* Socials */}
        <div className="Socials">
          <h2 className="font-semibold text-lg">Connect with us</h2>
          <div className="flex mt-4">
            <FaLinkedin
              size={36}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-xs font-semibold text-center text-gray-400 border-t border-gray-700 pt-4 mt-4  sm:text-sm">
        © 2025 RedSky Foods Ltd
      </p>
    </footer>
  );
};

export default Footer;
