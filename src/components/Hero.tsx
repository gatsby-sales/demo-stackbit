import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "./Button";

type HeroProps = {
  h1: string;
  h2: string;
  image: Queries.HeroImageFragment;
  paragraph: string;
};

export default function Hero({
  h1,
  h2,
  paragraph,
  image,
  contentful_id,
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      data-sb-object-id={contentful_id}
    >
      <div className="absolute -z-10 h-full w-full bg-black opacity-60 backdrop-blur-3xl"></div>
      <GatsbyImage
        image={image.gatsbyImageData}
        alt="Abstract moon and clouds"
        className="absolute -z-20 h-full w-full" // the gatsby-image-wrapper class messes 'absolute' up, hence the line below
        style={{ position: "absolute" }}
      />
      <div
        id="hero-text"
        className="my-36 mx-auto min-w-[50%] max-w-7xl p-4 text-white lg:p-2"
      >
        <h2 className="text-md mb-2 leading-7" data-sb-field-path="h2">
          {h2}
        </h2>
        <h1
          className="mb-2 text-4xl font-extrabold tracking-tight lg:text-6xl"
          data-sb-field-path="h1"
        >
          {h1}
        </h1>
        <p className="mb-10 max-w-lg text-lg" data-sb-field-path="paragraph">
          {paragraph}
        </p>
        <Button to="/" text="Button" />
      </div>
    </section>
  );
}
export const query = graphql`
  fragment HeroImage on ImageSharp {
    gatsbyImageData(width: 1200)
  }
  fragment HeroContent on ContentfulHero {
    contentful_id
    h1
    h2
    paragraph
    image {
      gatsbyImageData
    }
  }
`;
