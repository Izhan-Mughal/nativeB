import { Button } from "antd";

export default function SkipButton({
  className = "",
  setModalOpen,
}: {
  className: string;
  setModalOpen: (modalOpen: boolean) => void;
}) {
  return (
    <Button
      onClick={() => setModalOpen(false)}
      type="primary"
      className={`bg-primary h-fit text-white font-normal text-sm py-2 px-4 rounded ${className}`}
    >
      Skip
    </Button>
  );
}
