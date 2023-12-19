import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function DotIcon({ fill, className, ...props }: IconProps) {
  return (
    <Svg
      width="3"
      height="4"
      viewBox="0 0 3 4"
      className={className}
      {...props}
    >
      <circle opacity="0.25" cx="1.5" cy="2" r="1.5" fill={fill} />
    </Svg>
  );
}

DotIcon.defaultProps = iconDefaultProps;
