import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function BookmarkIcon({ fill, className, ...props }: IconProps) {
  return (
    <Svg
      className={className}
      width="12"
      height="16"
      viewBox="0 0 12 16"
      {...props}
    >
      <path
        d="M11 0H1C0.448 0 0 0.448 0 1V15C0 15.36 0.194 15.693 0.507 15.87C0.82 16.048 1.205 16.043 1.514 15.857L6 13.166L10.485 15.857C10.644 15.953 10.822 16 11 16C11.17 16 11.34 15.957 11.493 15.87C11.806 15.693 12 15.36 12 15V1C12 0.448 11.552 0 11 0ZM9 5H3V3H9V5Z"
        fill={fill}
      />
    </Svg>
  );
}
BookmarkIcon.defaultProps = iconDefaultProps;
