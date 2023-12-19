import { styled } from "@mui/system";
import { ReactNode } from "react";

const StyledCell = styled("td")({
  borderRight: "1px solid rgba(4, 21, 38, .1)",
  padding: "0 24px",
  "&:first-child": {
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  "&:last-child": {
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderRight: "none",
  },
});

export default function TableCell({ children }: { children: ReactNode }) {
  return <StyledCell>{children}</StyledCell>;
}
