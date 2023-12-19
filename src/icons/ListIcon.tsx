import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function ColvirLogoIcon({
  fill,
  className,
  ...props
}: IconProps) {
  return (
    <Svg className={className} {...props}>
      <path
        d="M17.5 20H2.5C1.81 20 1.25 19.44 1.25 18.75V2.5C1.25 1.81 1.81 1.25 2.5 1.25H3.75V17.5H16.25V1.25H17.5C18.19 1.25 18.75 1.81 18.75 2.5V18.75C18.75 19.44 18.19 20 17.5 20ZM15 0H12.5V1.25H7.5V0H5V3.75H15V0ZM13.75 7.5H6.25V10H13.75V7.5ZM11.25 11.25H6.25V13.75H11.25V11.25Z"
        fill={fill}
      />
    </Svg>
  );
}

ColvirLogoIcon.defaultProps = iconDefaultProps;
