import MainLayout from "@/components/Layouts/MainLayout";
import PhoneImage from "@/assets/images/phone.png";
import Button from "@/components/UI/Button";
import { Link, useNavigate, useParams } from "react-router-dom";

const Thankyou = () => {
  const { payment } = useParams();
  const navigate = useNavigate();
  const handleNavigation = () => {
    if (payment === "booking") {
      navigate("/video-call/shopper");
    }
  };
  return (
    <MainLayout>
      <main>
        <div className="sm:w-full sm:mx-0 w-4/5 mx-auto ">
          <p className="text-black font-medium text-3xl text-center">
            Confirmation
          </p>
          <img src={PhoneImage} alt="" className="mx-auto" />
          <p className="text-[#C33366] font-bold text-5xl text-center">
            THANK YOU
          </p>
          {payment === "booking" && (
            <div>
              <p className="mt-4 text-black font-medium text-xl text-center">
                for the payment
              </p>
              <p className="mt-4 text-[#5F5F5F] font-medium text-md text-center">
                Your live shopping slot at ZARA USA has been booked with host
                Abdullah Aziz on
                <br />
                <b className="text-black">
                  1 October 2022 from 10:00 AM till 10:30 AM
                </b>
              </p>
              <p className="text-[#C33366] font-bold mt-5 text-md text-center">
                We hope you have a great experience 😊
              </p>
              <div className="max-w-xs mt-5 mx-auto">
                <Button onClick={handleNavigation}>Continue</Button>
              </div>
            </div>
          )}
          {payment === "purchase" && (
            <div className="flex flex-col justify-between items-center my-2">
              <p className="text-center w-1/2 text-[#5F5F5F]  mt-2 mb-5">
                Your purchase order has been received. We shall notify you
                through in-app messaging and/or email once the Host confirms the
                purchase on your behalf and attach the outlet invoice as proof
                of purchase
              </p>
              <div className="flex gap-3">
                <Link
                  to="/brands"
                  className="block text-center text-white bg-primary hover:bg-primary-500 hover:text-white p-2.5 rounded-md px-11 "
                >
                  Browse outlets
                </Link>
                <Link
                  to="/chat"
                  className="block text-center border text-black bg-white hover:border-primary hover:text-primary p-2.5 rounded-md px-11 "
                >
                  Chat with Host
                </Link>
              </div>
              <Link
                to="/shopper/orders/2"
                className="block mt-3 text-center text-white bg-gray-900 hover:bg-gray-800 hover:text-white p-2.5 rounded-md px-36 "
              >
                Purchase history
              </Link>
            </div>
          )}
        </div>
      </main>
    </MainLayout>
  );
};

export default Thankyou;
