import { styled } from "@mui/system";
import { ReactNode } from "react";

const TabsRoot = styled("div")({
  display: "inline-flex",
});

export default function Tabs({ children }: { children: ReactNode }) {
  return <TabsRoot>{children}</TabsRoot>;
}
