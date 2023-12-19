import { styled } from "@mui/system";
import { ReactNode } from "react";

const StyledRow = styled("tr")<{ header?: boolean }>(({ header }) => ({
  height: 50,
  background: header ? "#F6F8FA" : "transparent",
}));

export default function TableRow({
  children,
  header,
}: {
  children: ReactNode;
  header?: boolean;
}) {
  return <StyledRow header={header}>{children}</StyledRow>;
}
