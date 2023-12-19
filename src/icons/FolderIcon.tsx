import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function FolderIcon({ fill, className, ...props }: IconProps) {
  return (
    <Svg
      className={className}
      width="16"
      height="14"
      viewBox="0 0 16 14"
      {...props}
    >
      <path
        d="M16 13V3C16 2.448 15.552 2 15 2H8.618L7.895 0.552C7.725 0.214 7.379 0 7 0H1C0.448 0 0 0.447 0 1V13C0 13.552 0.448 14 1 14H15C15.552 14 16 13.552 16 13Z"
        fill={fill}
      />
    </Svg>
  );
}

FolderIcon.defaultProps = iconDefaultProps;
