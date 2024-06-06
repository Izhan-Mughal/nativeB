import OrderPlacedIllustration from "@/assets/images/order-placed-illustration.png";
import MainLayout from "@/components/Layouts/MainLayout";
import { useNavigate } from "react-router-dom";
import Button from "@/components/UI/Button";

export default function ThankyouMsg() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shopper/orders/3");
  };
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center gap-3">
        <img src={OrderPlacedIllustration} />
        <h1 className="text-primary font-bold text-4xl mt-3">THANK YOU</h1>
        <p className="text-[#1C1D22] font-bold text-lg">for the payment</p>
        <p className="text-[#4C5E76] font-normal text-md">
          Your delivery order has been placed
        </p>
        <Button
          type="primary"
          className="sm:max-w-md !w-3/4 mx-auto py-2 h-fit font-medium mt-3"
          onClick={handleClick}
        >
          Shipment History
        </Button>
      </div>
    </MainLayout>
  );
}
