import { FC, ReactNode } from "react";
import { useTreeViewContext } from "./TreeViewProvider/useTreeContext";
import { styled } from "@mui/system";

type TreeLabelProps = {
  children: ReactNode;
  expanded?: boolean;
  bookmarked?: boolean;
  bookmarkIcon?: FC;
  collapseIcon?: FC;
  expandIcon?: FC;
  leafIcon?: FC;
  isLeaf: boolean;
  intent?: number;
};

const TreeLabelRoot = styled("div")<{ intent: number }>(({ intent }) => ({
  display: "flex",
  alignItems: "center",
  height: 36,
  paddingLeft: 16 * intent,
}));

const TreeLabelText = styled("span")({
  fontDamily: "Roboto",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  margin: "0 8px",
  color: "white",
  flexGrow: 1,
});

export default function TreeLabel({
  bookmarked = false,
  expanded = false,
  bookmarkIcon,
  collapseIcon,
  expandIcon,
  leafIcon,
  isLeaf = false,
  intent = 0,
  children,
}: TreeLabelProps) {
  const {
    icons: {
      defaultBookmarkIcon,
      defaultCollapseIcon,
      defaultExpandIcon,
      defaultLeafIcon,
    },
  } = useTreeViewContext();
  const BookmarkIcon = bookmarkIcon ?? defaultBookmarkIcon;
  const CollapseIcon = collapseIcon ?? defaultCollapseIcon;
  const ExpandIcon = expandIcon ?? defaultExpandIcon;
  const LeafIcon = leafIcon ?? defaultLeafIcon;
  return (
    <TreeLabelRoot intent={intent}>
      {isLeaf ? <LeafIcon /> : expanded ? <CollapseIcon /> : <ExpandIcon />}
      <TreeLabelText>{children}</TreeLabelText>
      {bookmarked && <BookmarkIcon />}
    </TreeLabelRoot>
  );
}
