import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function ToPreviousIcon({
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
        d="M5.29275 8.70699L9.29275 12.707C9.68375 13.098 10.3157 13.098 10.7068 12.707C11.0978 12.316 11.0978 11.684 10.7068 11.293L7.41375 7.99999L10.7068 4.70699C11.0978 4.31599 11.0978 3.68399 10.7068 3.29299C10.5118 3.09799 10.2558 2.99999 9.99975 2.99999C9.74375 2.99999 9.48775 3.09799 9.29275 3.29299L5.29275 7.29299C4.90175 7.68399 4.90175 8.31699 5.29275 8.70699Z"
        fill={fill}
      />
    </Svg>
  );
}

ToPreviousIcon.defaultProps = iconDefaultProps;
