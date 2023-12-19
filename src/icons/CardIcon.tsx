import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function CardIcon({ fill, className, ...props }: IconProps) {
  return (
    <Svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M15 1H1C0.448 1 0 1.448 0 2V14C0 14.552 0.447 15 1 15H15C15.553 15 16 14.552 16 14V2C16 1.448 15.553 1 15 1ZM14 3V4H2V3H14ZM2 13V6H14V13H2ZM6 8V9C6 9.552 5.552 10 5 10H4C3.448 10 3 9.552 3 9V8C3 7.448 3.448 7 4 7H5C5.552 7 6 7.448 6 8ZM13 8C13 8.552 12.553 9 12 9H8C7.448 9 7 8.552 7 8C7 7.448 7.447 7 8 7H12C12.553 7 13 7.448 13 8ZM12 11C12 11.552 11.553 12 11 12H8C7.447 12 7 11.552 7 11C7 10.448 7.447 10 8 10H11C11.553 10 12 10.448 12 11Z"
        fill={fill}
      />
    </Svg>
  );
}
CardIcon.defaultProps = iconDefaultProps;
