import { useParams } from "react-router-dom";
import { ApiRoutes } from "../../constants/apiRoutes";
import { apiClient } from "../../services/apiClient";
import { PublicationCard } from "./components/PublicationCard";
import { PublicationContainer } from "./styles";
import { useEffect, useState } from "react";
import { Markdown } from "../../components/Markdown";

interface Issue {
  title: string;
  body: string;
  html_url: string;
  updated_at: string;
  comments: number;
  user: {
    login: string;
  };
}

interface Publication {
  title: string;
  content: string;
  url: string;
  updatedAt: Date;
  comments: number;
  username: string;
}

export function Publication() {
  const [publication, setPublication] = useState<Publication | null>(null);

  const { number } = useParams();

  const issueUrl = `${import.meta.env.VITE_GITHUB_API_URL}${ApiRoutes.REPOS}/${
    import.meta.env.VITE_GITHUB_BLOG_REPO
  }${ApiRoutes.ISSUES}/${number}`;

  useEffect(() => {
    (async function getGithubIssue() {
      try {
        const response = await apiClient.get<Issue>(issueUrl);

        const { title, html_url, updated_at, comments, body, user } =
          response.data;

        setPublication({
          title,
          content: body,
          url: html_url,
          updatedAt: new Date(updated_at),
          comments,
          username: user.login,
        });
      } catch {
        setPublication(null);
      }
    })();
  }, []);

  if (!publication) {
    return <PublicationContainer />
  }

  return (
    <PublicationContainer>
      <PublicationCard
        publication={{
          comments: publication.comments,
          title: publication.title,
          updatedAt: publication.updatedAt,
          url: publication.url,
          username: publication.username,
        }}
      />

      <article>
        <Markdown content={publication.content} />
      </article>
    </PublicationContainer>
  );
}
