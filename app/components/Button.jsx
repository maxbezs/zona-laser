import Link from "next/link";

const Button = ({ className = "", href, children, variant }) => {
  let buttonClassName =
    "font-cfont align-baseline rounded-lg cursor-pointer select-none py-3 px-4 no-underline w-fit ";

  switch (variant) {
    case "secondary":
      buttonClassName += "bg-orange-500 text-black ";
      break;
    case "outline":
      buttonClassName += "bg-transparent text-black border border-orange-700 ";
      break;
    default:
      buttonClassName += "bg-orange-700 text-white ";
  }

  return (
    <Link id={href} href={href} className={className + buttonClassName}>
      {children}
    </Link>
  );
};

export default Button;
