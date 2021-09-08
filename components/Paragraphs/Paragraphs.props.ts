import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TextParagraph
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "small" | "normal" | "bold";
  children: ReactNode;
}
