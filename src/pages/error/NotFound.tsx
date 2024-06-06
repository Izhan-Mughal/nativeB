import MainLayout from "@/components/Layouts/MainLayout";
import Svg from "@/components/UI/Svg";
import { NotFoundArt } from "@/constants/icons";
import { Button, Typography } from "antd";

export default function NotFounds() {
  return (
    <MainLayout>
      <div className="text-center max-w-sm mx-auto">
        <Svg src={NotFoundArt} width={250} height={250} className="m-auto" />
        <Typography.Paragraph className="text-5xl font-bold">
          Error 404!
        </Typography.Paragraph>
        <Typography.Paragraph className="text-base font-medium">
          May be bigfoot has broken this page.
          <br />
          Come back to the homepage
        </Typography.Paragraph>
        <Button type="primary" className="w-full" size="large">
          Retry
        </Button>
      </div>
    </MainLayout>
  );
}
