import { styled } from "@mui/system";
import { BellIcon, FolderAwaitingIcon, ListIcon, NineDotsIcon } from "../icons";
import { IconProps } from "../icons/types";
import Badge from "./Bage";

const SideMenuActionsRoot = styled("ul")({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: 12,
});
type SideMenuActionRootProps = {
  active?: boolean;
};

type SideMenuActionProps = SideMenuActionRootProps & {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  bage?: number;
  icon: React.ComponentType<IconProps>;
};

const SideMenuActionRoot = styled("li")<SideMenuActionRootProps>(
  ({ active }) => ({
    padding: 10,
    background: active ? "white" : "transparent",
    borderRadius: 8,
    lineHeight: 0,
    position: "relative",
  })
);

function SideMenuAction({
  active,
  icon: Icon,
  bage,
  ...props
}: SideMenuActionProps) {
  return (
    <SideMenuActionRoot active={active} {...props}>
      <Icon fill={active ? "#1173DA" : undefined} />
      <Badge badgeContent={bage} />
    </SideMenuActionRoot>
  );
}

export default function SideMenuActions({
  menuExpanded,
  expandMenu,
  collapseMenu,
}: {
  menuExpanded: boolean;
  expandMenu: (event: React.MouseEvent<HTMLElement>) => void;
  collapseMenu: (event: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <SideMenuActionsRoot>
      <SideMenuAction
        icon={NineDotsIcon}
        active={menuExpanded}
        onClick={menuExpanded ? collapseMenu : expandMenu}
      />
      <SideMenuAction icon={FolderAwaitingIcon} bage={7} />
      <SideMenuAction icon={ListIcon} bage={8} />
      <SideMenuAction icon={BellIcon} bage={99} />
    </SideMenuActionsRoot>
  );
}
