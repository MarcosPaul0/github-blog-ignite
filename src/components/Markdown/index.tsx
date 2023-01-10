import ReactMarkdown from "react-markdown";
import { MarkdownContainer } from "./styles";

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <MarkdownContainer>
      <ReactMarkdown children={content} />
    </MarkdownContainer>
  );
}
