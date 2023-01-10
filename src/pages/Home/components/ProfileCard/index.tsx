import { useEffect, useState } from "react";
import { ExternalLink } from "../../../../components/Link";
import {
  InfoContainer,
  ProfileCardContainer,
  SocialContainer,
  TitleContainer,
} from "./styles";
import { FaGithub, FaBuilding, FaUserFriends } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { apiClient } from "../../../../services/apiClient";
import { ApiRoutes } from "../../../../constants/apiRoutes";

interface GithubUser {
  login: string;
  name: string;
  bio: string;
  html_url: string;
  followers: number;
  company: string;
  avatar_url: string;
}

export function ProfileCard() {
  const [githubProfile, setGithubProfile] = useState<GithubUser | null>(null);

  useEffect(() => {
    (async function getGithubProfile() {
      const response = await apiClient.get<GithubUser>(
        `${ApiRoutes.USERS}/${import.meta.env.VITE_GITHUB_BLOG_USERNAME}`
      );

      const { login, name, bio, html_url, followers, company, avatar_url } =
        response.data;

      setGithubProfile({
        login,
        name,
        bio,
        html_url,
        followers,
        company,
        avatar_url,
      });
    })();
  }, []);

  return (
    <ProfileCardContainer>
      <img src={githubProfile?.avatar_url} />

      <InfoContainer>
        <TitleContainer>
          <h1>{githubProfile?.name}</h1>
          <ExternalLink
            href={githubProfile?.html_url ? githubProfile?.html_url : "/"}
            text="GITHUB"
            suffixIcon={<HiExternalLink size={16} />}
          />
        </TitleContainer>

        <p>{githubProfile?.bio}</p>

        <SocialContainer>
          <span>
            <FaGithub size={20} />
            {githubProfile?.login}
          </span>

          {githubProfile?.company && (
            <span>
              <FaBuilding size={20} />
              {githubProfile?.company}
            </span>
          )}

          <span>
            <FaUserFriends size={24} />
            {githubProfile?.followers} seguidores
          </span>
        </SocialContainer>
      </InfoContainer>
    </ProfileCardContainer>
  );
}
