import { styled } from "@mui/system";
import { SaveIcon, CloseIcon } from "../../icons";
import RouteBreadCrumbs from "./RouteBreadCrumbs";
import PageName from "./PageName";

const AppBarRoot = styled("div")({
  padding: 24,
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "2px solid rgba(66, 73, 82, 0.10)",
});

const Column = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const SearchField = styled("div")({
  width: 247,
  height: 32,
  flexShrink: 0,
  borderRadius: 16,
  background: "#F6F8FA",
  display: "flex",
  alignItems: "center",
  paddingLeft: 16,
  marginLeft: 24,
});
const SearchPlaceholder = styled("span")({
  color: "#041526",
  fontFamily: "Roboto",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "16px",
  opacity: 0.5,
});

const StyledCloseIcon = styled(CloseIcon)({
  opacity: 0.3,
});

const StyledSaveIcon = styled(SaveIcon)({
  opacity: 0.3,
});

const SearchBlock = styled("div")({ display: "flex", alignItems: "center" });

const VerticalDivider = styled("span")({
  color: "black",
  opacity: 0.3,
  margin: "8px 16px",
});
export default function AppBar() {
  return (
    <AppBarRoot>
      <Column>
        <RouteBreadCrumbs />
        <PageName />
      </Column>
      <SearchBlock>
        <StyledSaveIcon fill="black" />
        <SearchField>
          <SearchPlaceholder>Найти</SearchPlaceholder>
        </SearchField>
        <VerticalDivider>|</VerticalDivider>
        <StyledCloseIcon fill="black" />
      </SearchBlock>
    </AppBarRoot>
  );
}
