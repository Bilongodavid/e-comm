interface Props {
  children: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";

  color?: "primery" | "black" | "gray";
  size?: "sm" | "big" | "lg" | "xl" | "big" | "extraBig";
  className?: string;
}
export default function Typography({
  children,
  tag: Component = "h1",
  color = "black",
  size = "sm",
  className,
}: Props) {
  const colorText = getColor(color);
  const sizeText = getSize(size);
  return (
    <Component className={`${colorText} ${sizeText} ${className}`}>
      {children}
    </Component>
  );
}

function getColor(color: string): string {
  switch (color) {
    case "primery":
      return "text-primary";

    case "black":
      return "text-black";
    case "gray":
      return "text-gray-primary";
    default:
      return "text-black";
  }
}

function getSize(size: string): string {
  switch (size) {
    case "sm":
      return "text-sm";
    case "lg":
      return "text-lg";

    case "xl":
      return "text-xl";
    case "big":
      return "text-3xl";
    case "extraBig":
      return "text-5xl";
    default:
      return "text-sm";
  }
}
