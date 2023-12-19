import { styled } from "@mui/system";

type InputProps = {
  drawerExpanded: boolean;
};

const Background = styled("div")<InputProps>(({ drawerExpanded }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  background: drawerExpanded
    ? "linear-gradient(180deg, #1173DA 0%, #A4E2FF 100%)"
    : "white",
  alignItems: "center",
}));

export default Background;
