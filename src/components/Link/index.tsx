import { ReactElement } from "react";
import { LinkContainer } from "./styles";

interface LinkProps {
  text: string;
  href: string;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
}

export function Link({ href, text, prefixIcon, suffixIcon }: LinkProps) {
  return (
    <LinkContainer to={href}>
      {prefixIcon} {text} {suffixIcon}
    </LinkContainer>
  );
}
