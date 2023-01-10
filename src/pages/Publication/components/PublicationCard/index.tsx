import { InternalLink } from "../../../../components/Link";
import {
  InfoContainer,
  LinksContainer,
  PublicationCardContainer,
} from "./styles";
import { FaChevronLeft } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub, FaCalendarDay, FaComment } from "react-icons/fa";
import { AppRoutes } from "../../../../constants/appRoutes";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PublicationCardProps {
  publication: {
    title: string;
    username: string;
    url: string;
    updatedAt: Date;
    comments: number;
  }
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const lastUpdateTimeFormatted = formatDistance(
    publication.updatedAt,
    new Date(),
    {
      locale: ptBR,

    }
  ).replace('cerca de', 'Há');

  return (
    <PublicationCardContainer>
      <LinksContainer>
        <InternalLink
          href={AppRoutes.HOME}
          text="VOLTAR"
          prefixIcon={<FaChevronLeft />}
        />
        <InternalLink
          href={publication.url}
          text="GITHUB"
          suffixIcon={<HiExternalLink size={16} />}
        />
      </LinksContainer>

      <h1>{publication.title}</h1>

      <InfoContainer>
        <span>
          <FaGithub size={18} />
          {publication.username}
        </span>

        <span>
          <FaCalendarDay size={18} />
          {lastUpdateTimeFormatted}
        </span>

        <span>
          <FaComment size={18} />{publication.comments} comentários
        </span>
      </InfoContainer>
    </PublicationCardContainer>
  );
}
