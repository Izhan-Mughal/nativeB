import { RightOutlined } from "@ant-design/icons";
import Button from "../UI/Button";
const NextArrow = ({ onClick }: any) => {
  return (
    <Button
      className="!w-auto md:w-auto h-auto p-1 md:p-3 bg-primary-200 text-primary rounded-lg border hover:bg-primary-300 border-primary absolute -right-6 lg:-right-2 2xl:-right-16 top-[50%] translate-y-[-100%] flex justify-center items-center"
      onClick={onClick}
    >
      <RightOutlined />
    </Button>
  );
};

export default NextArrow;
