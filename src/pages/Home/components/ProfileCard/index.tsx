import { Link } from "../../../../components/Link";
import {
  InfoContainer,
  ProfileCardContainer,
  SocialContainer,
  TitleContainer,
} from "./styles";
import { FaGithub, FaBuilding, FaUserFriends } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img src="https://avatars.githubusercontent.com/u/64232527?v=4" />

      <InfoContainer>
        <TitleContainer>
          <h1>Marcos Paulo</h1>
          <Link
            href="dsfsdf"
            text="GITHUB"
            suffixIcon={<HiExternalLink size={16} />}
          />
        </TitleContainer>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <SocialContainer>
          <span>
            <FaGithub size={20} />
            MarcosPaulo
          </span>

          <span>
            <FaBuilding size={20} />
            MarcosPaulo
          </span>
          
          <span>
            <FaUserFriends size={24} />
            20 seguidores
          </span>
        </SocialContainer>
      </InfoContainer>
    </ProfileCardContainer>
  );
}
