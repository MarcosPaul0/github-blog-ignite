import { TextInput } from "../../components/TextInput";
import { apiClient } from "../../services/apiClient";
import { ProfileCard } from "./components/ProfileCard";
import { PublicationCard } from "./components/PublicationCard";
import {
  HomeContainer,
  PublicationsContainer,
  SearchForm,
  SearchInfo,
} from "./styles";

import { useEffect, useState } from "react";
import { ApiRoutes } from "../../constants/apiRoutes";
import { useForm } from "react-hook-form";
import { Spinner } from "../../components/Spinner";

interface Issue {
  number: number;
  title: string;
  updated_at: string;
  body: string;
}

interface Publication {
  number: number;
  title: string;
  updatedAt: Date;
  body: string;
}

interface SearchForm {
  search: string;
}

export function Home() {
  const [publications, setPublications] = useState<Publication[]>([]);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchForm>({
    defaultValues: {
      search: "",
    },
  });

  async function getGithubIssues({ search }: SearchForm) {
    try {
      const response = await apiClient.get(
        `${ApiRoutes.SEARCH_ISSUES}?q=${search}repo:${
          import.meta.env.VITE_GITHUB_BLOG_REPO
        }`
      );

      const { items } = response.data;

      setPublications(
        items.map((item: Issue) => ({
          number: item.number,
          title: item.title,
          updatedAt: new Date(item.updated_at),
          body: item.body,
        }))
      );
    } catch {
      setPublications([]);
    }
  }

  useEffect(() => {
    getGithubIssues({ search: "" });
  }, []);

  return (
    <HomeContainer>
      <ProfileCard />

      <SearchForm onSubmit={handleSubmit(getGithubIssues)}>
        <SearchInfo>
          <h1>Publicações</h1>
          <span>{publications!.length} publicações</span>
        </SearchInfo>

        <TextInput placeholder="Buscar conteúdo" {...register("search")} />
        <button type="submit" />
      </SearchForm>

      {isSubmitting ? (
        <Spinner />
      ) : (
        <PublicationsContainer>
          {publications.map((publication) => (
            <PublicationCard
              key={publication.number}
              publication={{
                number: publication.number,
                title: publication.title,
                content: publication.body,
                updatedAt: publication.updatedAt,
              }}
            />
          ))}
        </PublicationsContainer>
      )}
    </HomeContainer>
  );
}
