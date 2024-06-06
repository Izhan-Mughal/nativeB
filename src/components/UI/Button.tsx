import { Button as AntButton, ConfigProvider } from "antd";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "default" | "link" | "text" | "primary" | "dashed" | undefined; // Specific string literals
  htmlType?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  className = "",
  type = "primary",
  onClick = () => {},
  ...restProp
}: ButtonProps) {
  return (
    <AntButton
      className={`${className} w-full h-11 font-medium rounded-md`}
      type={type}
      onClick={onClick}
      {...restProp}
    >
      {children}
    </AntButton>
  );
}

const DarkButton = ({ children, className, onClick, ...restprops }: any) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: "#000",
            defaultActiveBg: "#000",
            defaultBorderColor: "#000",
            defaultColor: "#fff",
            defaultHoverBg: "#fff",
            defaultHoverColor: "#000",
            defaultHoverBorderColor: "#000",
            defaultActiveBorderColor: "#000",
          },
        },
      }}
    >
      <AntButton className={className} onClick={onClick} {...restprops}>
        {children}
      </AntButton>
    </ConfigProvider>
  );
};
DarkButton.displayName = "DarkButton";

export { DarkButton };
