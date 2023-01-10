import { ReactElement } from "react";
import { ExternalLinkContainer, InternalLinkContainer } from "./styles";

interface LinkProps {
  text: string;
  href: string;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
}

export function InternalLink({ href, text, prefixIcon, suffixIcon }: LinkProps) {
  return (
    <InternalLinkContainer to={href}>
      {prefixIcon} {text} {suffixIcon}
    </InternalLinkContainer>
  );
}

export function ExternalLink({ href, text, prefixIcon, suffixIcon }: LinkProps) {
  return (
    <ExternalLinkContainer href={href} target="_blank">
      {prefixIcon} {text} {suffixIcon}
    </ExternalLinkContainer>
  );
}
