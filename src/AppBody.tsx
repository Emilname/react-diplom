import { styled } from "@mui/system";
import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import TablePage from "./pages/TablePage";
import AppBar from "./components/AppBar/AppBar";

const DisableLayout = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: "100%",
  bottom: "100%",
  background: "white",
  borderRadius: " 24px 0px 0px 24px",
});

function MainAppContentRoot({
  disabled,
  className,
  children,
}: {
  disabled: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
      {disabled && <DisableLayout />}
    </div>
  );
}

const StyledMainAppRoot = styled(MainAppContentRoot)<{
  disabled: boolean;
}>(({ disabled }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: !disabled ? "100%" : "calc(100% - 90px)",
  flex: 1,
  background: "white",
  borderRadius: " 24px 0px 0px 24px",
  width: disabled ? "calc(100% + 232px)" : "100%",
  ...(disabled
    ? {
        "&:after": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(255,255,255,.8)",
          borderRadius: " 24px 0px 0px 24px",
        },
      }
    : {}),
}));

export default function AppBody({
  drawerExpanded,
}: {
  drawerExpanded: boolean;
}) {
  const disabled = drawerExpanded && window.innerWidth < 1920;
  return (
    <StyledMainAppRoot disabled={disabled}>
      <AppBar />
      <Routes>
        <Route path="" element={<TablePage />}></Route>
      </Routes>
    </StyledMainAppRoot>
  );
}
