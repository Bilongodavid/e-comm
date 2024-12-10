interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  color?: "primery" | "primery-outline";
  size?: "sm" | "big" | "xs";
  className?: string;
}

export default function Button({
  children,
  className,
  color = "primery",
  size = "sm",
  type = "button",
}: Props) {
  const bgColor: string = getColor(color);
  const elSize: string = getSize(size);
  return (
    <div>
      <button
        className={`${bgColor} ${className} ${elSize} transition duration-300 ease-in-out`}
        type={type}
      >
        {children}
      </button>
    </div>
  );
}

function getColor(color: string): string {
  switch (color) {
    case "primery":
      return "bg-primary hover:bg-primary-hover text-white";

    case "primery-outline":
      return "border border-primary text-primary hover:bg-primary hover:text-white";

    default:
      return "bg-primary hover:bg-primary-hover text-white";
  }
}

function getSize(size: string): string {
  switch (size) {
    case "big":
      return "px-10 py-4 text-base";
    case "sm":
      return "px-8 py-3 text-sm";

    case "xs":
      return "px-6 py-2 text-xs";

    default:
      return "px-8 py-3 text-sm";
  }
}
