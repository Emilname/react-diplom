import { ReactNode } from "react";
import { FolderIcon, FolderOpenIcon, BookmarkIcon, CardIcon } from "../icons";
import TreeLabel from "./TreeLabel";

export type TTreeItem = {
  id: number;
  label: string;
  bookmarked?: boolean;
  expandedDefault?: boolean;
  children: TTreeItem[];
};

export type TTreeItemProps = {
  items: TTreeItem[];
  label: ReactNode;
  bookmarked?: boolean;
  expanded?: boolean;
  intent?: number;
};

export default function TreeItem({
  items,
  label,
  bookmarked,
  expanded,
  intent = 0,
}: TTreeItemProps) {
  const nextIntent = ++intent;
  const isLeaf = !items;
  return (
    <>
      <TreeLabel
        intent={intent}
        bookmarked={bookmarked}
        expanded={expanded}
        isLeaf={isLeaf}
      >
        {label}
      </TreeLabel>
      {expanded &&
        !isLeaf &&
        items.map(({ id, label, bookmarked, expandedDefault, children }) => (
          <TreeItem
            intent={nextIntent}
            key={id}
            items={children}
            label={label}
            bookmarked={bookmarked}
            expanded={expandedDefault}
          />
        ))}
    </>
  );
}
