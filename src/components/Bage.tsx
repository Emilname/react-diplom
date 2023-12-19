import { styled } from "@mui/system";
import { Badge as BaseBadge, badgeClasses } from "@mui/base";

const Badge = styled(BaseBadge)({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontSize: 14,
  fontVariant: "tabular-nums",
  listStyle: "none",
  position: "relative",
  lineHeight: 1,
  width: 16,
  height: 16,
  borderRadius: "50%",
  background: "#FA506F",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",

  [`& .${badgeClasses.badge}`]: {
    zIndex: "auto",
    color: "#fff",
    whiteSpace: "nowrap",
    textAlign: "center",
    borderRadius: 12,

    fontFamily: "Roboto",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
});
export default Badge;
