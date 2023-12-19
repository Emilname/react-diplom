import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function SaveIcon({ fill, className, ...props }: IconProps) {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={className}
      {...props}
    >
      <path
        d="M11.889 1H2.4C1.627 1 1 1.627 1 2.4V13.6C1 14.373 1.627 15 2.4 15H13.6C14.373 15 15 14.373 15 13.6V4.111L11.889 1ZM8 11.889C6.711 11.889 5.667 10.844 5.667 9.556C5.667 8.268 6.711 7.222 8 7.222C9.289 7.222 10.333 8.267 10.333 9.555C10.333 10.843 9.289 11.889 8 11.889ZM10.333 5.667H2.556V2.556H10.334V5.667H10.333Z"
        fill={fill}
      />
    </Svg>
  );
}

SaveIcon.defaultProps = iconDefaultProps;
