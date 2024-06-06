import { Modal } from "antd";
const HelpModal = ({
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
      <div className="text-center">
        <div className="relative bg-white rounded-lg dark:bg-gray-700">
          <div className="w-full  mx-auto">
            <p className="font-bold text-lg text-black">Help</p>
            <p className="text-[#5F5F5F] mt-2">
              We're looking for hosts who can bring the magic of the Paybag
            </p>
            <p className="font-bold text-lg mt-3 text-black">Expertise</p>
            <p className="text-[#5F5F5F] mt-2">
              Shopping Experience online and can meet the following
              requirements:
            </p>
            <p className="font-bold text-lg mt-3 text-black">Participation</p>
            <p className="text-[#5F5F5F] mt-2">
              We're looking for hosts who can bring the magic of the Paybag
            </p>
            <p className="font-bold text-lg mt-3 text-black">Discipline</p>
            <p className="text-[#5F5F5F] mt-2">
              Shopping Experience online and can meet the following
              requirements:
            </p>
            <p className="font-bold text-lg mt-3 text-black">
              Technical quality
            </p>
            <p className="text-[#5F5F5F] mt-2">
              We're looking for hosts who can bring the magic of the Paybag
            </p>
            <div>
              <a href="">
                <button className="w-52 bg-[#C33366] py-1.5 mt-5 rounded-md text-white">
                  Okay
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HelpModal;
