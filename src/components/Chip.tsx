import { styled } from "@mui/system";

type ChipVariants = "success" | "error" | "info";

function getVarianColor(variant: ChipVariants) {
  switch (variant) {
    case "success":
      return "#4ED09A";
    case "error":
      return "#FA506F";
    default:
      return "lightblue";
  }
}

const Chip = styled("div")<{ variant?: ChipVariants }>(
  ({ variant = "info" }) => ({
    background: getVarianColor(variant),
    display: "inline-block",
    height: 24,
    flexShrink: 0,
    borderRadius: 12,
    color: "white",
    padding: "5px 12px",
    boxSizing: "border-box",

    fontFamily: "Roboto",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "12px",
  })
);

// function Chip({ variant, children }) {
//   return (
//     <ChipRoot variant={variant}>
//       <span>{children}</span>
//     </ChipRoot>
//   );
// }
export default Chip;
