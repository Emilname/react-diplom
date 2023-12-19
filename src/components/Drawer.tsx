import { styled } from "@mui/system";
import { ColvirLogoIcon } from "../icons";
import ProfileIcon from "../icons/ProfileIcon";
import Navigation from "./Navigation";
import { CloseFilledIcon } from "../icons";
import Tree from "../Tree/Tree";

type DrawerContent = { expanded: boolean };

type DrawerProps = DrawerContent & {
  onOpen: () => void;
  onClose: () => void;
};

const DrawerRoot = styled("div")({
  padding: 8,
  paddingRight: 0,
  height: "calc(100% - 16px)",
});

const ColvirLogoContainer = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  marginTop: 20,
});

const ProfileIconContainer = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  marginBottom: 20,
  borderRadius: 8,
  background: "rgba(4, 21, 38, 0.1)",
  padding: 10,
});

const DrawerContent = styled("div")<DrawerContent>(({ expanded }) => ({
  height: "100%",
  display: "flex",
  borderRadius: 12,
  background: !expanded
    ? "linear-gradient(180deg, #1173DA 0%, #A4E2FF 100%)"
    : "transparent",
}));

const DrawerShortcuts = styled("div")({
  height: "100%",
  width: 72,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});

const DrawerBody = styled("div")({
  width: 376,
  overflow: "hidden",
});

const SearchField = styled("div")({
  width: 320,
  height: 32,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "rgba(255,255,255,.1)",
  borderRadius: 16,
  verticalAlign: "center",
  padding: "0 8px 0 16px",
});

const SearchFieldPlaceholder = styled("span")({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "32px",
  verticalAlign: "center",
  color: "white",
  opacity: 0.5,
});

const StyledTree = styled(Tree)({ width: 320 });

const treeItems = [
  { id: 1, label: "Кредиты", children: [{}] },
  {
    id: 2,
    label: "Согласования договоров",
    expandedDefault: true,
    children: [
      {
        id: 4,
        label: "Отдел юридических вопросов",
        expandedDefault: true,
        children: [
          {
            id: 7,
            label: "Реестр договоров",
          },
          {
            id: 8,
            label: "Реестр приложений",
            bookmarked: true,
          },
          {
            id: 9,
            label: "Отчеты",
            bookmarked: true,
          },
          {
            id: 10,
            label: "Выписки",
          },
        ],
      },
      {
        id: 5,
        label: "Отдел сопровождения сделок",
        children: [{}],
      },
      {
        id: 6,
        label: "Отдел безопасности",
        children: [{}],
      },
    ],
  },
  { id: 3, label: "Карточные продукты", children: [{}] },
];

function Drawer({ expanded, onClose, onOpen }: DrawerProps) {
  return (
    <DrawerRoot>
      <DrawerContent expanded={expanded}>
        <DrawerShortcuts>
          <ColvirLogoContainer>
            <ColvirLogoIcon onClick={expanded ? onClose : onOpen} />
          </ColvirLogoContainer>
          <Navigation />
          <ProfileIconContainer>
            <ProfileIcon />
          </ProfileIconContainer>
        </DrawerShortcuts>
        <DrawerBody hidden={!expanded}>
          <SearchField>
            <SearchFieldPlaceholder>Найти</SearchFieldPlaceholder>
            <CloseFilledIcon opacity=".5" />
          </SearchField>
          <StyledTree items={treeItems} />
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
}

export default Drawer;
