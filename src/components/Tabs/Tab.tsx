import { ReactNode } from "react";

type Id = number | string;
export default function Tab({
  id,
  activeId,
  children,
}: {
  id: Id;
  activeId: Id;
  children: ReactNode;
}) {
  return <div>{children}</div>;
}
