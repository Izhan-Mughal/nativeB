import LiveHomeShopping from "@/assets/images/live-home-shopping.png";
import SaleImage from "@/assets/images/sale-image.png";
import SecurePayments from "@/assets/images/secure-payments.png";
import BoxDelivery from "@/assets/images/box-delivery.png";
import { Button, Modal } from "antd";
import { NextIcon } from "@/constants/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Slider from "react-slick";

interface WelcomeModalProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({
  modalOpen,
  setModalOpen,
}) => {
  const [modalStep, setModalStep] = useState<number>(1);
  const modalItems = [
    {
      id: 1,
      img: LiveHomeShopping,
      mainHeading: "Live shopping",
      subHeading: "See it, then buy it.",
      text: "Get an in-store, personalized, virtual shopping experience at the outlets of your choice in many countries.",
      linkText: "Learn more about Live shopping",
    },
    {
      id: 2,
      img: SaleImage,
      mainHeading: "Save money",
      subHeading: "Purchase products on actual retail price.",
      text: "Get a chance to instantly avail the best offers, deals, promotions, or discounts in outlets globally.",
      linkText: "Learn more about offers",
      path: "/brands",
    },
    {
      id: 3,
      img: SecurePayments,
      mainHeading: "Secure payments",
      text: "Your payment is protected and never released to the host until you confirm delivery.",
      linkText: "Learn more about Trust & Safety",
    },
    {
      id: 4,
      img: BoxDelivery,
      mainHeading: "Guaranteed delivery",
      text: "You are protected from start to end. Receive your order as agreed or get 100% money back.",
      linkText: "Learn more about Money Back guarantee",
      path: "/brands",
    },
  ];

  const currentItem = modalItems.find((item) => item.id === modalStep);

  const goToNext = () => {
    if (modalStep <= 3) {
      let modalCount = modalStep;
      modalCount++;
      setModalStep(modalCount);
    } else if (modalStep === 4) {
      setModalOpen(false);
    }
  };

  const goToPrevious = () => {
    if (modalStep > 1) {
      let modalCount = modalStep;
      modalCount--;
      setModalStep(modalCount);
    }
  };

  return (
    <Modal
      rootClassName="home-modal"
      footer={null}
      centered
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
    >
      {modalStep > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute top-4 left-4 bg-white py-2 px-3 rounded"
        >
          <img src={NextIcon} />
        </button>
      )}
      <Button
        type="primary"
        className="absolute h-fit top-4 right-5"
        onClick={() => setModalOpen(false)}
      >
        Skip
      </Button>
      <div>
        <img src={currentItem?.img} alt="" />
        <div className="flex flex-col text-center items-center justify-center py-4 text-[#1C1D22]">
          <h1 className="font-bold text-2xl">{currentItem?.mainHeading}</h1>
          <h2 className="font-normal text-sm pt-2 pb-3 text-[#1C1D22]">
            {currentItem?.subHeading}
          </h2>
          <div className="max-w-sm mx-auto font-normal text-sm flex flex-col gap-2">
            <p className="font-normal text-sm text-[#1C1D22] max-w-xs mx-auto">
              {currentItem?.text}
            </p>
          </div>

          <Link
            to={currentItem?.path || ""}
            className="text-[#407BFF] underline underline-offset-2 py-2"
          >
            {currentItem?.linkText}
          </Link>
        </div>
      </div>

      {modalStep !== 5 && (
        <>
          <ul
            className="mx-auto max-w-xs pb-5 flex items-center
             justify-center gap-1"
          >
            {modalItems.map((item) => (
              <li
                key={item.id}
                className={`${
                  modalStep === item.id
                    ? "bg-primary w-10 h-[7px] rounded-md"
                    : "bg-gray-300 rounded-full h-2 w-2"
                } `}
              ></li>
            ))}
          </ul>

          <Button
            type="primary"
            className="w-11/12 flex items-center justify-center mx-4 bg-primary text-white py-6"
            onClick={goToNext}
          >
            {modalStep === 1 || modalStep === 2 || modalStep === 3 ? (
              <p>Next</p>
            ) : (
              <p>Get Started</p>
            )}
          </Button>
        </>
      )}
    </Modal>
  );
};

export default WelcomeModal;
