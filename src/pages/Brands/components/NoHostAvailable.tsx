import { useState } from "react";
import NotifyModal from "./NotifyModal";
import Button from "@/components/UI/Button";
import Oops from "@/assets/images/oops.png";

const NoHostAvailable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="max-w-md mx-auto p-8 mt-12">
      <img src={Oops} alt="" className="mx-auto" />
      <p className="mt-5 text-lg text-center font-medium text-[#5F5F5F]">
        No active hosts were found at this time. Create request and we shall
        notify you as soon as someone is available
      </p>
      <div className="w-full text-center mt-8">
        <Button onClick={showModal}>Notify Me</Button>

        <NotifyModal isModalOpen={isModalOpen} handleCancel={handleCancel} />
      </div>
    </div>
  );
};

export default NoHostAvailable;
