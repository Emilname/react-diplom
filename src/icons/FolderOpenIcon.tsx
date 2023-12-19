import Svg from "./Svg";
import iconDefaultProps from "./iconDefaultProps";
import { IconProps } from "./types";

export default function FolderOpenIcon({
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
        d="M8.61849 2.91895H14.0005C14.5535 2.91895 15.0005 3.36595 15.0005 3.91895V4.91895H1.00049V1.91895C1.00049 1.36695 1.44849 0.918945 2.00049 0.918945H7.00049C7.37949 0.918945 7.72549 1.13295 7.89549 1.47095L8.61849 2.91895Z"
        fill={fill}
      />
      <path
        d="M15.0004 6.91895C15.2944 6.91895 15.5734 7.04795 15.7634 7.27194C15.9534 7.49694 16.0354 7.79294 15.9854 8.08394L14.9854 14.0839C14.9054 14.5649 14.4884 14.9189 13.9994 14.9189H1.99943C1.51043 14.9189 1.09343 14.5659 1.01343 14.0839L0.0134341 8.08394C-0.0345659 7.79394 0.0474341 7.49794 0.237434 7.27294C0.427434 7.04795 0.706434 6.91895 1.00043 6.91895H15.0004Z"
        fill={fill}
      />
    </Svg>
  );
}

FolderOpenIcon.defaultProps = iconDefaultProps;
