import { TextInput } from "../../components/TextInput";
import { ProfileCard } from "./components/ProfileCard";
import { PublicationCard } from "./components/PublicationCard";
import { HomeContainer, PublicationsContainer, SearchContainer, SearchInfo } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />

      <SearchContainer>
        <SearchInfo>
          <h1>Publicações</h1>
          <span>0 publicações</span>
        </SearchInfo>

        <TextInput placeholder="Buscar conteúdo" />
      </SearchContainer>

      <PublicationsContainer>
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
      </PublicationsContainer>
    </HomeContainer>
  );
}
