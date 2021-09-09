import { TagsProps } from "./Tags.props";
import styles from "./Tags.module.css";
import cn from "classnames";

export const Tags = ({
  size = "small",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: TagsProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tags, className, {
        [styles.small]: size == "small",
        [styles.normal]: size == "normal",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.gray]: color == "gray",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
