import { TextParagraph } from "./Paragraphs.props";
import styles from "./Paragraphs.module.css";
import cn from "classnames";

export const Paragraphs = ({
  size = "normal",
  children,
  className,
  ...props
}: TextParagraph): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size == "small",
        [styles.normal]: size == "normal",
        [styles.bold]: size == "bold",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
