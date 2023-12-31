import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function ToNextIcon({ fill, className, ...props }: IconProps) {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={className}
      {...props}
    >
      <path
        d="M10.7072 7.29301L6.70725 3.29301C6.31625 2.90201 5.68425 2.90201 5.29325 3.29301C4.90225 3.68401 4.90225 4.31601 5.29325 4.70701L8.58625 8.00001L5.29325 11.293C4.90225 11.684 4.90225 12.316 5.29325 12.707C5.48825 12.902 5.74425 13 6.00025 13C6.25625 13 6.51225 12.902 6.70725 12.707L10.7072 8.70701C11.0982 8.31601 11.0982 7.68301 10.7072 7.29301Z"
        fill={fill}
      />
    </Svg>
  );
}

ToNextIcon.defaultProps = iconDefaultProps;
