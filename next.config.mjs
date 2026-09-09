/** @type {import('next').NextConfig} */
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGitHubPagesBuild && repository
    ? {
        basePath: `/${repository}`,
        assetPrefix: `/${repository}/`,
      }
    : {}),
};
export default nextConfig;
