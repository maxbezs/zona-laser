import Link from "next/link";

const Button = ({
  className = "",
  href,
  children,
  variant,
  color = "russet",
}) => {
  let buttonClassName =
    "align-baseline cursor-pointer select-none no-underline ";

  switch (variant) {
    case "secondary":
      buttonClassName += `text-[#462919]  py-3 px-4 w-fit rounded-xl bg-[#D9B493]`;
      break;
    case "underline":
      buttonClassName += `text-[#ECDAC9] underline decoration-${color}-500 underline-offset-2 w-full`;
      break;
    default:
      buttonClassName += `text-white bg-[#8B5132] py-3 px-4 w-fit rounded-lg`;
  }

  return (
    <Link id={href} href={href} className={className + buttonClassName}>
      {children}
    </Link>
  );
};

export default Button;
