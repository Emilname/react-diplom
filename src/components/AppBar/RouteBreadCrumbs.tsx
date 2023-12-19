import { styled } from "@mui/system";
import { DotIcon } from "../../icons";

const RouteBreadCrumbRoot = styled("div")({
  fontFamily: "Roboto",
  fontSize: 12,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "14px",
  opacity: 0.5,
  display: "flex",
  alignItems: "center",
  gap: 6,

  color: "#041526",
});

const SplitDot = styled(DotIcon)({});

export default function RouteBreadCrumbs() {
  return (
    <RouteBreadCrumbRoot>
      Договор или продукт
      <SplitDot fill="#041526" />
      Кредит
    </RouteBreadCrumbRoot>
  );
}
