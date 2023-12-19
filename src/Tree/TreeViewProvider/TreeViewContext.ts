import { createContext } from "react";
import Svg from "../../icons/Svg";

type TreeContext = {
  icons: {
    defaultCollapseIcon?: typeof Svg;
    defaultExpandIcon?: typeof Svg;
    defaultLeafIcon?: typeof Svg;
    defaultBookmarkIcon?: typeof Svg;
  };
};
export const DEFAULT_TREE_VIEW_CONTEXT_VALUE: TreeContext = {
  icons: {
    defaultCollapseIcon: undefined,
    defaultExpandIcon: undefined,
    defaultLeafIcon: undefined,
    defaultBookmarkIcon: undefined,
  },
};

export const TreeViewContext = createContext(DEFAULT_TREE_VIEW_CONTEXT_VALUE);

if (process.env.NODE_ENV !== "production") {
  TreeViewContext.displayName = "TreeViewContext";
}
