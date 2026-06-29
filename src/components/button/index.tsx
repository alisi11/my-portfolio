import {
  FC,
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

type BtnType = "primary" | "secondary" | "danger";
type BtnVariant = "solid" | "text" | "link";
type BtnSize = "large" | "default" | "small";
type IconPosition = "left" | "right";

type CommonProps = {
  children?: ReactNode;
  /** color theme */
  type?: BtnType;
  /** presentation style */
  variant?: BtnVariant;
  size?: BtnSize;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  loading?: boolean;
  /** When provided, renders <a> (link) instead of <button> */
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
};

type ButtonLikeProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  htmlType?: "button" | "submit" | "reset";
};

type AnchorLikeProps = AnchorHTMLAttributes<HTMLAnchorElement>;

type ICustomButtonProps = CommonProps & ButtonLikeProps & AnchorLikeProps;

const CustomButton: FC<ICustomButtonProps> = ({
  children,
  type = "primary",
  variant = "solid",
  size = "default",
  icon,
  iconPosition = "left",
  htmlType = "button",
  disabled,
  loading = false,
  className = "",
  href,
  target,
  rel,
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center select-none rounded-xl font-medium " +
    "transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "disabled:opacity-60 disabled:cursor-not-allowed text-nowrap ";

  // Sizes
  const sizesSolid: Record<BtnSize, string> = {
    large: "h-12 px-4 text-base gap-2",
    default: "h-10 px-4 text-sm gap-2",
    small: "h-8 px-3 text-xs gap-1.5",
  };
  const sizesTexty: Record<BtnSize, string> = {
    large: "h-auto p-0 text-base gap-2",
    default: "h-auto p-0 text-sm gap-2",
    small: "h-auto p-0 text-xs gap-1.5",
  };
  const isTexty = variant === "text" || variant === "link";
  const sizeClass = isTexty ? sizesTexty[size] : sizesSolid[size];

  // Colors by (type, variant) - with vibrant modern gradients
  const tone = {
    primary: {
      solid:
        "bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-md hover:shadow-lg hover:from-green-700 hover:to-emerald-600 active:shadow-sm active:scale-[0.98] focus-visible:ring-green-500/50",
      text: "bg-transparent text-green-600 hover:text-green-700 active:text-green-800 focus-visible:ring-green-500/50",
      link: "bg-transparent text-green-600 hover:text-green-700 active:text-green-800 focus-visible:ring-green-500/50 no-underline hover:underline",
    },
    secondary: {
      solid:
        "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md hover:shadow-lg hover:from-cyan-600 hover:to-blue-600 active:shadow-sm active:scale-[0.98] focus-visible:ring-cyan-500/50",
      text: "bg-transparent text-cyan-600 hover:text-cyan-700 active:text-cyan-800 focus-visible:ring-cyan-500/50",
      link: "bg-transparent text-cyan-600 hover:text-cyan-700 active:text-cyan-800 focus-visible:ring-cyan-500/50 no-underline hover:underline",
    },
    danger: {
      solid:
        "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md hover:shadow-lg hover:from-pink-600 hover:to-rose-700 active:shadow-sm active:scale-[0.98] focus-visible:ring-pink-600/50",
      text: "bg-transparent text-red-600 hover:text-red-700 active:text-red-800 focus-visible:ring-red-600/50",
      link: "bg-transparent text-red-600 hover:text-red-700 active:text-red-800 focus-visible:ring-red-600/50 no-underline hover:underline",
    },
  } as const;

  // Icon position
  const flows: Record<IconPosition, string> = {
    left: "flex-row-reverse",
    right: "flex-row",
  };

  const isDisabled = disabled || loading;

  // When href is present, render an <a>. Otherwise, render <button>
  const Comp: any = href ? "a" : "button";
  const roleProps = href
    ? { href, target, rel, "aria-disabled": isDisabled || undefined }
    : {
      type: htmlType,
      disabled: isDisabled,
      "aria-disabled": isDisabled || undefined,
    };

  // Prevent navigation when "disabled" anchor
  const clickBlocker =
    href && isDisabled
      ? (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
      }
      : undefined;

  // Extract onClick from rest to handle it properly when disabled
  const { onClick: restOnClick, ...restWithoutOnClick } = rest;

  return (
    <Comp
      className={`${base}${tone[type][variant]} ${sizeClass} ${flows[iconPosition]} ${className} cursor-pointer`}
      aria-busy={loading || undefined}
      onClick={isDisabled && href ? clickBlocker : restOnClick || clickBlocker}
      {...roleProps}
      {...restWithoutOnClick}
    >
      {loading && (
        <svg
          className="animate-spin -ms-0.5 me-0.5 h-[1.1em] w-[1.1em]"
          viewBox="0 0 24 24"
          role="status"
          aria-label="Loading"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* Icon (hidden when loading) */}
      {icon && !loading && <span className="flex items-center ">{icon}</span>}

      {/* Label */}
      {children && (
        <span className="inline-flex items-center leading-none p-[2px] gap-1">
          {children}
        </span>
      )}
    </Comp>
  );
};

export default CustomButton;
