import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "outline" | "outline-nav";
  size?: "default" | "nav";
  children: React.ReactNode;
};

export function Button({
  className,
  variant = "primary",
  size = "default",
  href,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center uppercase transition-colors font-weight-400 whitespace-nowrap font-[family-name:var(--font-chivo-mono)]";
  
  const variants = {
    primary: "[background:linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] hover:[background:#F2F8FC] hover:text-[#003ACE] text-white rounded-lg border border-transparent hover:border-[#F2F8FC] font-medium tracking-wider shadow-[0px_10px_30px_rgba(0,102,255,0.25)] hover:shadow-none",
    outline: "[background:transparent] border border-white/30 hover:[background:#F2F8FC] hover:text-[#003ACE] hover:border-[#F2F8FC] text-white rounded-lg font-medium tracking-wider",
    "outline-nav": "[background:transparent] border border-white/80 hover:[background:#F2F8FC] hover:text-[#003ACE] hover:border-[#F2F8FC] text-white rounded-[6px]"
  };

  const sizes = {
    default: "px-8 py-3.5 text-sm",
    nav: "w-[161px] h-[26px] gap-[8px] px-[37px] py-[5px] font-[family-name:var(--font-chivo-mono)] text-[12px] font-normal leading-[1.3] tracking-normal"
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}