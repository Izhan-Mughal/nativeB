import logo from "@/assets/images/Paybag.svg";
import FacebookIcon from "@/assets/images/f1.png";
import GoogleIcon from "@/assets/images/g1.png";
import TwitterIcon from "@/assets/images/t1.png";
import P1 from "@/assets/images/p1.png";
import Visa from "@/assets/images/visa.svg";
import Discover from "@/assets/images/discover.svg";
import American from "@/assets/images/american-express.svg";
import Paypal from "@/assets/images/paypal.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import footerMenu from "@/utils/footerMenus";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const socialIcons = [FacebookIcon, GoogleIcon, TwitterIcon, P1];
  const paymentMethods = [Visa, Discover, American, Paypal];

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-dark">
      <div className="container mx-auto px-10 py-10">
        <div className="flex justify-between flex-wrap md:flex-nowrap gap-5">
          <div className="">
            <Link to="/" className="flex items-center">
              <img src={logo} className="h-10 me-1" alt="paybag logo" />
              <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
                PAYBAG
              </span>
            </Link>
            <p className="mt-8 text-md text-white">
              Smart Shopping for smarter you
            </p>
            <div className="flex pt-8 sm:justify-start sm:mt-0 gap-x-2">
              {socialIcons.map((item: any, index: number) => (
                <Link
                  key={`social-icon-${index}`}
                  to="/"
                  className="p-3 rounded-full bg-gray-800"
                >
                  <img src={item} />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10">
            {footerMenu.map((group: any, index: number) => (
              <div
                className="col-span-2 md:col-span-1"
                key={`group-menu-${index}`}
              >
                <h2 className="mb-1 text-md font-semibold text-[#C33366] capitalize">
                  {group?.label}
                </h2>
                <ul className="text-white ">
                  {group?.routes?.map((route: any, index: number) => (
                    <li className="mt-2" key={`group-menu-link-${index}`}>
                      <Link
                        to={route.route}
                        className="hover:underline hover:cursor-pointer  text-sm"
                      >
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto w-full px-10 py-5">
          <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-5">
            <span className="text-sm mt-1 text-white sm:text-center">
              {currentYear} © Paybag. Design & Develop by Native Brains
            </span>
            <div className="flex">
              {paymentMethods.map((item: any, index: number) => (
                <img
                  key={`payment-method-${index}`}
                  src={item}
                  alt=""
                  className="px-1"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
