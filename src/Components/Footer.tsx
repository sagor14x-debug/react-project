import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-5 md:px-7">

           {/* DESKTOP FOOTER */}
        <div className="block md:hidden">

          {/* Brand */}
          <div className="flex flex-col items-center pt-23 pb-18">

            <img
              src={Logo}
              alt="Dev Stack"
              className="w-84.5 max-w-full"
            />

            <p className="mt-8 max-w-225 text-center text-[20px] leading-8 text-gray-500">
              Curated tools, technologies, and resources for developers
              <br />
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-8 text-[20px] font-medium text-gray-700">

              <a
                href="#"
                className="transition hover:text-pink-600"
              >
                GitHub
              </a>

              <span className="text-gray-500">•</span>

              <a
                href="#"
                className="transition hover:text-pink-600"
              >
                Twitter
              </a>

              <span className="text-gray-500">•</span>

              <a
                href="#"
                className="transition hover:text-pink-600"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* Mobile Bottom */}
          <div className="border-t border-gray-100 py-6">
            <div className="flex items-center justify-between text-[18px] text-gray-400">

              <p>
                © 2026 Dev Stack. All rights reserved.
              </p>

              <div className="flex items-center gap-7">
                <a
                  href="#"
                  className="transition hover:text-gray-600"
                >
                  Privacy
                </a>

                <a
                  href="#"
                  className="transition hover:text-gray-600"
                >
                  Terms
                </a>
              </div>

            </div>
          </div>

        </div>


         {/* DESKTOP FOOTER */}
        <div className="hidden md:block">

          {/* Main Footer */}
          <div className="pt-23 pb-12">

            <div className="grid grid-cols-5 gap-8">

              {/* Brand */}
              <div className="col-span-2">

                <img
                  src={Logo}
                  alt="Dev Stack"
                  className="w-28"
                />

                <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
                  Curated tools, technologies, and resources for developers
                  building modern software.
                </p>

                {/* Social Links */}
                <div className="mt-5 flex gap-5 text-sm font-medium text-gray-700">

                  <a
                    href="#"
                    className="transition hover:text-pink-600"
                  >
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="transition hover:text-pink-600"
                  >
                    Twitter
                  </a>

                  <a
                    href="#"
                    className="transition hover:text-pink-600"
                  >
                    LinkedIn
                  </a>

                </div>

              </div>


              {/* Product */}
              <div>

                <h3 className="text-xs font-bold uppercase text-gray-800">
                  Product
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-gray-500">

                  <li>
                    <a
                      href="#"
                      className="transition hover:text-pink-600"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      href="#technologies"
                      className="transition hover:text-pink-600"
                    >
                      Technologies
                    </a>
                  </li>

                  <li>
                    <a
                      href="#projects"
                      className="transition hover:text-pink-600"
                    >
                      Projects
                    </a>
                  </li>

                </ul>

              </div>


              {/* Company */}
              <div>

                <h3 className="text-xs font-bold uppercase text-gray-800">
                  Company
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-gray-500">

                  <li>
                    <a
                      href="#about"
                      className="transition hover:text-pink-600"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#contact"
                      className="transition hover:text-pink-600"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="transition hover:text-pink-600"
                    >
                      Careers
                    </a>
                  </li>

                </ul>

              </div>


              {/* Legal */}
              <div>

                <h3 className="text-xs font-bold uppercase text-gray-800">
                  Legal
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-gray-500">

                  <li>
                    <a
                      href="#"
                      className="transition hover:text-pink-600"
                    >
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="transition hover:text-pink-600"
                    >
                      Terms of Service
                    </a>
                  </li>

                </ul>

              </div>

            </div>

          </div>


          {/* Desktop Bottom */}
          <div className="border-t border-gray-100 py-6">

            <div className="flex items-center justify-between text-sm text-gray-400">

              <p>
                © 2026 Dev Stack. All rights reserved.
              </p>

              <div className="flex items-center gap-6">

                <a
                  href="#"
                  className="transition hover:text-gray-600"
                >
                  Privacy
                </a>

                <a
                  href="#"
                  className="transition hover:text-gray-600"
                >
                  Terms
                </a>

              </div>

            </div>

          </div>


          <div className="h-12" />

        </div>

      </div>
    </footer>
  );
};

export default Footer;