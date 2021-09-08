import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "small" | "normal";
  children: ReactNode;
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href? : string;
}
