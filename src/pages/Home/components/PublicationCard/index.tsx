import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Markdown } from "../../../../components/Markdown";
import { AppRoutes } from "../../../../constants/appRoutes";
import { PublicationCardContainer, TitleContainer } from "./styles";

interface PublicationCardProps {
  publication: {
    number: number;
    title: string;
    updatedAt: Date;
    content: string;
  };
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const publicationUrl = `${AppRoutes.PUBLICATION}/${publication.number} `;

  const lastUpdateTimeFormatted = formatDistance(
    publication.updatedAt,
    new Date(),
    {
      locale: ptBR,

    }
  ).replace('cerca de', 'Há');

  return (
    <PublicationCardContainer to={publicationUrl}>
      <TitleContainer>
        <h1>{publication.title}</h1>
        <time>{lastUpdateTimeFormatted}</time>
      </TitleContainer>

      <main>
        <Markdown content={publication.content} />
      </main>
    </PublicationCardContainer>
  );
}
