import Button from "@/components/UI/Button";
import { Modal } from "antd";
import Speaker from "@/assets/images/speaker.png";

const NotifyModal = ({
  isModalOpen,
  handleCancel,
}: {
  isModalOpen: boolean;
  handleCancel: () => void;
}) => {
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
      width={500}
      rootClassName="rm-black-mask"
    >
      <div>
        <div className="relative p-4 w-full max-w-xl max-h-full">
          <div className="relative bg-white rounded-lg  ">
            <div className="w-full">
              <img src={Speaker} alt="" className="mx-auto" />
              <p className="text-xl font-bold mt-5 text-center">Notify me</p>
              <p className="mt-3 text-center">
                We shall notify you through in-app messaging and/or email when
                any Host is available
              </p>
            </div>
            <div className="text-center">
              <Button className="mt-8" onClick={handleCancel}>
                Okay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NotifyModal;
