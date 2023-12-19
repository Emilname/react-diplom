import { styled } from "@mui/system";
import { BellIcon, FolderAwaitingIcon, ListIcon, NineDotsIcon } from "../icons";
import { useLocation } from "react-router-dom";
import { IconProps } from "../icons/types";

const NavigationRoot = styled("ul")({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: 12,
});
type NavItemRootProps = {
  active: boolean;
};

type NavItemProps = NavItemRootProps & {
  icon: React.ComponentType<IconProps>;
};

const NavItemRoot = styled("li")<NavItemRootProps>(({ active }) => ({
  padding: 10,
  background: active ? "white" : "transparent",
  borderRadius: 8,
  lineHeight: 0,
}));

function NavItem({ active, icon: Icon, ...props }: NavItemProps) {
  return (
    <NavItemRoot active={active} {...props}>
      <Icon fill={active ? "#1173DA" : undefined} />
    </NavItemRoot>
  );
}

const routes = [
  { icon: NineDotsIcon, path: "/dots" },
  { icon: FolderAwaitingIcon, path: "/folder", bage: 7 },
  { icon: ListIcon, path: "/list", bage: 8 },
  { icon: BellIcon, path: "/bell", bage: 99 },
];

export default function Navigation() {
  const loaction = useLocation();
  return (
    <NavigationRoot>
      {routes.map(({ path, icon, bage }) => (
        <NavItem key={path} active={loaction.pathname === path} icon={icon} />
      ))}
    </NavigationRoot>
  );
}
