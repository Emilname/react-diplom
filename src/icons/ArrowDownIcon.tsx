import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function ArrowDownIcon({
  fill,
  className,
  ...props
}: IconProps) {
  return (
    <Svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M12.7 5.3C12.3 4.9 11.7 4.9 11.3 5.3L8 8.6L4.7 5.3C4.3 4.9 3.7 4.9 3.3 5.3C2.9 5.7 2.9 6.3 3.3 6.7L7.3 10.7C7.5 10.9 7.7 11 8 11C8.3 11 8.5 10.9 8.7 10.7L12.7 6.7C13.1 6.3 13.1 5.7 12.7 5.3Z"
        fill={fill}
      />
    </Svg>
  );
}

ArrowDownIcon.defaultProps = iconDefaultProps;
