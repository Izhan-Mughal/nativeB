import { LeftOutlined } from "@ant-design/icons";
import Button from "../UI/Button";

const PreviousArrow = ({ onClick }: any) => {
  return (
    <Button
      className="!w-auto md:w-auto h-auto p-1 md:p-3 bg-primary-200 text-primary rounded-lg hover:bg-primary-300 border absolute border-primary -left-6 lg:-left-2 2xl:-left-16 top-[50%] translate-y-[-100%] flex items-center justify-center z-10"
      onClick={onClick}
    >
      <LeftOutlined />
    </Button>
  );
};

export default PreviousArrow;
