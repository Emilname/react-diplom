import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function ToBegginingIcon({
  fill,
  className,
  ...props
}: IconProps) {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={className}
      {...props}
    >
      <path
        d="M7.29275 8.70699C6.90175 8.31599 6.90175 7.68399 7.29275 7.29299L11.2928 3.29299C11.4878 3.09799 11.7438 2.99999 11.9998 2.99999C12.2558 2.99999 12.5118 3.09799 12.7068 3.29299C13.0978 3.68399 13.0978 4.31599 12.7068 4.70699L9.41375 7.99999L12.7068 11.293C13.0978 11.684 13.0978 12.316 12.7068 12.707C12.3157 13.098 11.6838 13.098 11.2928 12.707L7.29275 8.70699ZM4.99975 13C5.55175 13 5.99975 12.552 5.99975 12L5.99975 3.99999C5.99975 3.44799 5.55175 2.99999 4.99975 2.99999C4.44775 2.99999 3.99975 3.44799 3.99975 3.99999L3.99975 12C3.99975 12.552 4.44775 13 4.99975 13Z"
        fill={fill}
      />
    </Svg>
  );
}

ToBegginingIcon.defaultProps = iconDefaultProps;
