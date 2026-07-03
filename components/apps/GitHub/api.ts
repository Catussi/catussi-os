const API = "https://api.github.com";

export type GithubUser = {
  avatar_url: string;
  bio: string | null;
  blog: string;
  followers: number;
  following: number;
  html_url: string;
  location: string | null;
  login: string;
  name: string | null;
  public_repos: number;
};

export type GithubRepo = {
  default_branch: string;
  description: string | null;
  fork: boolean;
  full_name: string;
  homepage: string | null;
  html_url: string;
  language: string | null;
  name: string;
  pushed_at: string;
  stargazers_count: number;
  updated_at: string;
};

export type GithubContent = {
  download_url: string | null;
  name: string;
  path: string;
  sha: string;
  size: number;
  type: "dir" | "file" | "symlink" | "submodule";
};

const request = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(`${API}${path}`, init);

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  return response.json() as Promise<T>;
};

export const fetchUser = (owner: string): Promise<GithubUser> =>
  request(`/users/${owner}`);

export const fetchUserRepos = (owner: string): Promise<GithubRepo[]> =>
  request(`/users/${owner}/repos?sort=pushed&per_page=100`);

export const fetchRepo = (
  owner: string,
  repo: string
): Promise<GithubRepo & { default_branch: string }> =>
  request(`/repos/${owner}/${repo}`);

export const fetchReadme = async (
  owner: string,
  repo: string
): Promise<string | null> => {
  const response = await fetch(`${API}/repos/${owner}/${repo}/readme`, {
    headers: { Accept: "application/vnd.github.raw" },
  });

  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`${response.status}`);

  return response.text();
};

export const fetchContents = (
  owner: string,
  repo: string,
  path = ""
): Promise<GithubContent[] | GithubContent> =>
  request(
    `/repos/${owner}/${repo}/contents/${path.split("/").map(encodeURIComponent).join("/")}`
  );

export const fetchRawFile = async (downloadUrl: string): Promise<string> => {
  const response = await fetch(downloadUrl);

  if (!response.ok) throw new Error(`${response.status}`);

  return response.text();
};
