import { Link } from "../../../../components/Link";
import {
  InfoContainer,
  LinksContainer,
  PublicationCardContainer,
} from "./styles";
import { FaChevronLeft } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub, FaCalendarDay, FaComment } from "react-icons/fa";
import { AppRoutes } from "../../../../constants/appRoutes";

export function PublicationCard() {
  return (
    <PublicationCardContainer>
      <LinksContainer>
        <Link
          href={AppRoutes.HOME}
          text="VOLTAR"
          prefixIcon={<FaChevronLeft />}
        />
        <Link
          href="sdfs"
          text="GITHUB"
          suffixIcon={<HiExternalLink size={16} />}
        />
      </LinksContainer>

      <h1>JavaScript data types and data structures</h1>

      <InfoContainer>
        <span>
          <FaGithub size={18} />
          MarcosPaul0
        </span>

        <span>
          <FaCalendarDay size={18} />
          Há 1 dia
        </span>

        <span>
          <FaComment size={18} />2 comentários
        </span>
      </InfoContainer>
    </PublicationCardContainer>
  );
}
