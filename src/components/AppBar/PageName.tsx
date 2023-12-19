import { styled } from "@mui/system";

const PageNameRoot = styled("div")({
  fontFamily: "Roboto",
  fontSize: 24,
  fontStyle: "normal",
  fontHeight: 300,
  lineHeight: "normal",

  color: "#1173DA",
});

export default function PageName() {
  return <PageNameRoot>Продукт: Равномерное распределение ОД</PageNameRoot>;
}
