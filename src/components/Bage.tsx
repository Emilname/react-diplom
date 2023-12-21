import { styled } from "@mui/system";
import { Badge as BaseBadge, badgeClasses } from "@mui/base";
import { ReactNode } from "react";

const StyledBadge = styled(BaseBadge)({
  position: "absolute",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontSize: 14,
  fontVariant: "tabular-nums",
  listStyle: "none",
  lineHeight: 1,
  width: 16,
  height: 16,
  borderRadius: "50%",
  background: "#FA506F",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "translate(-50%,-50%)",

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

function Badge(props: { badgeContent?: ReactNode; children?: ReactNode }) {
  const { badgeContent, children } = props;
  return badgeContent != null ? (
    <StyledBadge {...props}>{children}</StyledBadge>
  ) : (
    children
  );
}
export default Badge;
