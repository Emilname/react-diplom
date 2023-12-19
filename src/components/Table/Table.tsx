import { styled } from "@mui/system";
import { ReactNode } from "react";

const StyledTable = styled("table")({
  width: "100%",
  borderSpacing: "0 0",
});

export default function Table({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <StyledTable className={className}>{children}</StyledTable>;
}
