import { useReveal } from "./useReveal";
import type { ElementType, ReactNode, CSSProperties } from "react";

type Props = {
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  id?: string;
};

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}: Props) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
