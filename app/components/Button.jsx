import Link from "next/link";

const Button = ({ className = "", href, children, variant }) => {
  let buttonClassName =
    " align-baseline  cursor-pointer select-none  no-underline  ";

  switch (variant) {
    case "secondary":
      buttonClassName +=
        "bg-orange-400 text-black py-3 px-4 w-fit rounded-full";
      break;
    case "outline":
      buttonClassName +=
        " bg-transparent text-black underline decoration-orange-700 underline-offset-2 w-full";
      break;
    default:
      buttonClassName +=
        "bg-orange-700 text-white py-3 px-4 w-fit rounded-full";
  }

  return (
    <Link id={href} href={href} className={className + buttonClassName}>
      {children}
    </Link>
  );
};

export default Button;
