import { CountryFlags } from "@/assets/constants/dummy";
import {
  AppleIcon,
  HuaweiIcon,
  PlayStoreIcon,
  RightHalfArrow,
  shopifyIcon,
  video,
} from "@/assets/constants/icons";
import arrow from "@/assets/images/arrow.png";
import Bgblue from "@/assets/images/bg-blue.png";
import BgRed from "@/assets/images/bg-red.png";
import bg from "@/assets/images/bg.png";
import FullBg from "@/assets/images/full-bg.png";
import HomeCta from "@/assets/images/home-cta.png";
import map from "@/assets/images/map.png";
import Mobile from "@/assets/images/mobile.png";
import SaveMoneyGradient from "@/assets/images/save-money-section-gradient.png";
import MainLayout from "@/components/Layouts/MainLayout";
import { useEffect, useMemo, useState } from "react";
import WelcomeModal from "./components/WelcomeModal";
import BrandSlider from "@/components/HomePageSliders/BrandSlider";
import TestimonialSlider from "@/components/HomePageSliders/TestimonialSlider";
import Svg from "@/components/UI/Svg";
import { Link } from "react-router-dom";
import TopPicks from "./components/TopPicks";
import Logo from "@/assets/images/Paybag.svg";
import { Form, Input } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { EnvelopeIcon } from "@/assets/constants/icons";

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  const [currentText, setCurrentText] = useState("");
  const DummyTexts = useMemo(
    () => [
      "Live Shopping",
      "Instant Purchase",
      "Quick Delivery",
      "Exclusive Discounts",
    ],
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newText = DummyTexts[Math.floor(Math.random() * DummyTexts.length)];
      setCurrentText(newText);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [DummyTexts, setCurrentText]);

  return (
    <MainLayout fluid={true}>
      <div className="overflow-x-hidden">
        <div
          style={{
            backgroundImage: `url(${bg})`,
            margin: "0px",
            backgroundSize: "100% 100",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto grid grid-cols-2 px-4 lg:px-10 lg:py-10 space-y-5">
            <div className="col-span-2 md:col-span-1">
              <p className="font-semibold text-4xl md:text-5xl max-w-md mt-16">
                Smart Shopping <p className="pt-3">For Smarter You</p>
              </p>
              <p
                id="changingText"
                className="max-w-lg text-4xl md:text-5xl pt-3 text-transparent pb-2 font-semibold bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"
              >
                {currentText}
              </p>
              <p className="text-md mt-3 text-[#313539] max-w-2xl">
                Shop Live from your favourite outlets globally or Host a Live
                Shopping experience and get paid for your efforts
              </p>
              <Link
                to="/brands"
                className="flex bg-primary gap-x-3 items-center my-2.5 w-fit lg:w-1/3 p-2 rounded-sm "
              >
                <Svg src={shopifyIcon} width={30} height={30} />
                <p className=" text-white">Start Shopping</p>
                <Svg src={RightHalfArrow} width={15} height={15} />
              </Link>
            </div>
            <div className="rounded-lg col-span-2 md:col-span-1">
              <img src={video} alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <BrandSlider />
        <TopPicks />

        <div className="container px-10 mx-auto my-10">
          <div className="grid grid-cols-2 items-center justify-between gap-10">
            <div className="flex col-span-2 md:col-span-1">
              <div>
                <p className="text-3xl font-bold text-black">
                  Available Hosts For Shopping
                </p>
                <p className="text-md mt-3 text-black max-w-lg">
                  This ranges from women and men's outfits to children's
                  clothing, shoes, accessories, and more. People love their
                  clothes, and fashion isn't going anywhere!
                </p>
                <div className="mt-12">
                  <p className="text-md mt-5 font-bold text-[#C33366]">
                    Available Countries
                  </p>
                  <div className="flex flex-wrap gap-y-6 gap-x-5 mt-5 max-w-lg">
                    {CountryFlags.map((country) => (
                      <img
                        src={country.flagImg}
                        alt=""
                        className="rounded-full h-12"
                        key={country.flagImg}
                      />
                    ))}
                  </div>
                  <Link to={`/brands`}>
                    <button className="p-3 flex items-center justify-between border mt-6 border-[#C33366] bg-[#FFE9F1] transition delay-150 duration-300 ease-in-out rounded-md mr-3 gap-x-12 hover:bg-[#f6d5da]">
                      <p className="font-medium text-[#212537]">
                        Start Shopping
                      </p>
                      <img src={arrow} alt="" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex col-span-2 md:col-span-1">
              <img src={map} alt="" />
            </div>
          </div>
        </div>

        {/* <!-- Join as a host/live shopping --> */}
        <div className="grid grid-cols-2">
          <div
            className="col-span-2 md:col-span-1 p-10"
            style={{
              backgroundImage: `url(${Bgblue})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container px-10 mx-auto">
              <p className="font-medium text-4xl text-white">
                Join as a Host and earn money
              </p>
              <p className="text-md mt-5 text-white font-light">
                Provide virtual in-store tours to global customers using the
                Paybag App.
              </p>
              <p className="text-md mt-5 text-white font-light">
                Purchase items on their behalf, deliver if you're traveling
                <br /> to their location, or send via courier companies.
              </p>
              <p className="text-md mt-5 text-white font-light">
                Put your money to work and get paid for your efforts.
              </p>
              <Link
                to="/host/account-setup"
                className="w-52 flex items-center justify-between mt-24 border border-black rounded-md bg-[#FFE9F1] py-3 px-4 gap-x-12 hover:bg-[#f6d5da]"
              >
                <p className="font-medium">Start Hosting</p>
                <img src={arrow} alt="" />
              </Link>
            </div>
          </div>
          <div
            className="col-span-2 md:col-span-1 p-10"
            style={{
              backgroundImage: `url(${BgRed})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col justify-between container px-10 mx-auto">
              <div>
                <p className="font-medium text-4xl text-white">
                  Live shopping experience from branded outlets worldwide
                </p>
                <p className="text-md font-light mt-8 text-white">
                  Get an in-store, personalized, virtual shopping experience at
                  the outlets of your choice in many countries.
                </p>
              </div>
              <div>
                <Link
                  to="/brands"
                  className="w-56 flex items-center justify-between mt-48 border border-primary-50 rounded-md bg-[#FFE9F1] py-3 px-4 gap-x-12 hover:bg-[#f6d5da]"
                >
                  <p className=" font-medium text-[#212537]">Start Shopping</p>
                  <img src={arrow} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- mobile --> */}
        <div className="bg-[#F9FBFC]">
          <div className="grid grid-cols-2 py-10">
            <div className="col-span-2 md:col-span-1 px-10">
              <img src={Mobile} alt="" className="h-full w-full" />
            </div>
            <div className="col-span-2 md:col-span-1 px-10 flex flex-col justify-evenly">
              <div>
                <p className="text-3xl text-[#0C192C] font-bold max-w-md">
                  Get up to a USD $5.00 Sign-up Bonus
                </p>
                <p className="text-md mt-5 max-w-md">
                  Use this amount while booking the Live shopping session in the
                  outlet of your choice globally
                </p>
              </div>
              <Link
                to="/auth/login"
                className="md:w-1/2 flex items-center justify-between border mt-5 border-[#C33366] bg-[#FFE9F1] transition delay-150 duration-300 ease-in-out rounded-sm py-3 px-4 gap-x-12 hover:bg-[#f6d5da]"
              >
                <p className="font-medium text-[#212537]">Sign up</p>
                <img src={arrow} alt="" />
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- save money --> */}
        <div
          className="flex items-center justify-between flex-wrap md:flex-nowrap gap-5 py-5"
          style={{ backgroundImage: `url(${SaveMoneyGradient})` }}
        >
          <div className="max-w-md mx-auto order-2 md:order-1 px-10">
            <p className="font-medium text-4xl text-black">Save Money</p>
            <p className="text-md mt-12 text-black">
              Purchase products at the actual retail price. Get a chance to
              instantly avail the best offers, deals, promotions, or discounts
              in your favourite outlets globally.
            </p>
            <Link
              to="/brands"
              className="flex w-fit border mt-12 border-primary bg-[#FFE9F1] transition delay-150 duration-300 ease-in-out rounded-sm py-3 px-4 mr-3 gap-x-12 hover:bg-[#f6d5da]"
            >
              <p className=" font-medium text-[#212537]">Start Shopping</p>
              <img src={arrow} alt="" />
            </Link>
          </div>
          <div className="w-full md:w-1/2 mt-10 order-1 md:order-2">
            <img src={HomeCta} />
          </div>
        </div>

        {/* <!-- testimonial slider --> */}
        <TestimonialSlider />

        {/* <!-- subscribe --> */}
        <div className="bg-[#F3F6F9] py-16 px-10">
          <div className="max-w-lg mx-auto">
            <p className="text-3xl text-center font-bold text-black">
              Subscribe to our newsletter
            </p>
            <p className="text-md text-center text-[#606060]">
              Get regular updates on trends from all over the world
            </p>
            <Form layout="horizontal" className="mt-8 w-full">
              <div className="flex items-center gap-1 relative">
                <Form.Item
                  name="send-email"
                  className="w-full"
                  rules={[
                    {
                      required: true,
                      message: "Email address is required",
                    },
                    {
                      pattern:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please enter valid email address",
                    },
                  ]}
                >
                  <Input
                    className="py-1"
                    placeholder="  Email"
                    prefix={<img src={EnvelopeIcon} alt="email icon" />}
                    suffix={
                      <button
                        type="submit"
                        className="text-white flex items-center justify-center bg-[#C33366] font-medium rounded-lg text-sm px-2 py-2.5"
                      >
                        <ArrowRightOutlined />
                      </button>
                    }
                  />
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>

        {/* <!-- Downlode the app --> */}
        <div
          className=""
          style={{
            backgroundImage: `url(${FullBg})`,
          }}
        >
          <div className="max-w-4xl mx-auto py-20 space-y-10">
            <div className="w-32 mx-auto">
              <img src={Logo} alt="" className="h-[50px] w-full" />
            </div>
            <div className="mb-5 space-y-3">
              <p className="font-semibold text-4xl text-primary text-center">
                Download The App Now
              </p>
              <p className="text-xl font-medium text-center text-[#313539]">
                Experience Paybag on mobile by downloading the App now
              </p>
            </div>
            <div className="flex justify-center gap-x-4 flex-wrap md:flex-nowrap gap-y-5">
              <Link to="#" className="w-full md:w-auto">
                <Svg src={PlayStoreIcon} width={"100%"} height={75} />
              </Link>
              <Link to="#" className="w-full md:w-auto">
                <Svg src={AppleIcon} width={"100%"} height={75} />
              </Link>
              <Link to="#" className="w-full md:w-auto">
                <Svg src={HuaweiIcon} width={"100%"} height={70} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <WelcomeModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </MainLayout>
  );
}
