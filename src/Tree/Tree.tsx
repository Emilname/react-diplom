import { styled } from "@mui/system";
import { FolderIcon, FolderOpenIcon, BookmarkIcon, CardIcon } from "../icons";
import TreeItem, { TTreeItem } from "./TreeItem";
import { TreeViewContext } from "./TreeViewProvider/TreeViewContext";

type TreeProps = {
  items: TTreeItem[];
  className: string;
};

const TreeViewRoot = styled("div")({});

const StyledFolderIcon = styled(FolderIcon)({ opacity: 0.5 });
const StyledFolderOpenIcon = styled(FolderOpenIcon)({ opacity: 0.5 });
const StyledCardIcon = styled(CardIcon)({ opacity: 0.5 });

export default function Tree({ items, className }: TreeProps) {
  const contextValue = {
    icons: {
      defaultCollapseIcon: StyledFolderOpenIcon,
      defaultExpandIcon: StyledFolderIcon,
      defaultLeafIcon: StyledCardIcon,
      defaultBookmarkIcon: BookmarkIcon,
    },
  };
  return (
    <TreeViewContext.Provider value={contextValue}>
      <TreeViewRoot className={className}>
        {items.map(({ id, label, bookmarked, expandedDefault, children }) => (
          <TreeItem
            key={id}
            items={children}
            label={label}
            bookmarked={bookmarked}
            expanded={expandedDefault}
          />
        ))}
      </TreeViewRoot>
    </TreeViewContext.Provider>
  );
}
