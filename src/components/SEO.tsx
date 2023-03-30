import { graphql, useStaticQuery } from "gatsby";
import React from "react";
type SEOProps = {
  title: string;
  description: string;
  noIndex?: boolean;
  pathname: string;
  imageURL: string;
};
export default function SEO({
  title,
  description,
  noIndex,
  pathname,
  imageURL,
}: SEOProps) {
  const fallbackData = useStaticQuery(graphql`
    query SEOFallback {
      site {
        siteMetadata {
          siteUrl
          title
          description
        }
      }
    }
  `).site.siteMetadata;
  const { siteUrl } = fallbackData;
  const url = `${siteUrl}${pathname}`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* OG tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageURL} />
      <meta property="og:url" content={url} />

      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
    </>
  );
}
