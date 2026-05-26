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
  const baseStyles = "inline-flex items-center justify-center uppercase transition-colors whitespace-nowrap";
  
  const variants = {
    primary: "bg-[#0066FF] hover:bg-blue-600 text-white rounded-lg border border-transparent font-medium tracking-wider",
    outline: "bg-transparent border border-white/20 hover:bg-[#F2F8FC] hover:text-[#0055FF] hover:border-[#F2F8FC] text-white rounded-lg font-medium tracking-wider",
    "outline-nav": "bg-transparent border border-white/80 hover:bg-[#F2F8FC] hover:text-[#0055FF] hover:border-[#F2F8FC] text-white rounded-[6px]"
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