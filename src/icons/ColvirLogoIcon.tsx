import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function ColvirLogoIcon({
  fill,
  className,
  ...props
}: IconProps) {
  return (
    <Svg
      className={className}
      width="33"
      height="32"
      viewBox="0 0 33 32"
      {...props}
    >
      <path
        d="M0 11.2517L15.8894 26.5144L31.8157 11.2517L14.1936 22.4591L0 11.2517Z"
        fill={fill}
      />
      <path
        d="M0.0390625 8.22852H32.334L14.1957 19.4728L0.0390625 8.22852Z"
        fill="url(#paint0_linear_1_4092)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_4092"
          x1="16.1865"
          y1="8.22852"
          x2="16.1865"
          y2="19.4728"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fill} />
          <stop offset="1" stopColor={fill} stopOpacity="0.25" />
        </linearGradient>
      </defs>
    </Svg>
  );
}
ColvirLogoIcon.defaultProps = iconDefaultProps;
