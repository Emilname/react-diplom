import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function CloseIcon({ fill, className, ...props }: IconProps) {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={className}
      {...props}
    >
      <path
        d="M9.41425 8.00001L14.7072 2.70701C15.0982 2.31601 15.0982 1.68401 14.7072 1.29301C14.3162 0.902006 13.6842 0.902006 13.2933 1.29301L8.00025 6.58601L2.70725 1.29301C2.31625 0.902006 1.68425 0.902006 1.29325 1.29301C0.90225 1.68401 0.90225 2.31601 1.29325 2.70701L6.58625 8.00001L1.29325 13.293C0.90225 13.684 0.90225 14.316 1.29325 14.707C1.48825 14.902 1.74425 15 2.00025 15C2.25625 15 2.51225 14.902 2.70725 14.707L8.00025 9.41401L13.2933 14.707C13.4882 14.902 13.7443 15 14.0002 15C14.2562 15 14.5122 14.902 14.7072 14.707C15.0982 14.316 15.0982 13.684 14.7072 13.293L9.41425 8.00001Z"
        fill={fill}
      />
    </Svg>
  );
}

CloseIcon.defaultProps = iconDefaultProps;
