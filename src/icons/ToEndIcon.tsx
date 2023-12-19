import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function ToEndIcon({ fill, className, ...props }: IconProps) {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={className}
      {...props}
    >
      <path
        d="M8.70725 7.29301C9.09825 7.68401 9.09825 8.31601 8.70725 8.70701L4.70725 12.707C4.51225 12.902 4.25625 13 4.00025 13C3.74425 13 3.48825 12.902 3.29325 12.707C2.90225 12.316 2.90225 11.684 3.29325 11.293L6.58625 8.00001L3.29325 4.70701C2.90225 4.31601 2.90225 3.68401 3.29325 3.29301C3.68425 2.90201 4.31625 2.90201 4.70725 3.29301L8.70725 7.29301ZM11.0002 3.00001C10.4482 3.00001 10.0002 3.44801 10.0002 4.00001V12C10.0002 12.552 10.4482 13 11.0002 13C11.5522 13 12.0002 12.552 12.0002 12L12.0002 4.00001C12.0002 3.44801 11.5522 3.00001 11.0002 3.00001Z"
        fill={fill}
      />
    </Svg>
  );
}

ToEndIcon.defaultProps = iconDefaultProps;