import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
type SplitProps = {
  h3?: string;
  image: Queries.SplitImageFragment;
  paragraph?: string;
};
export default function Split({
  image,
  h3 = "H3 for component",
  paragraph = "Longish <p> that is more verbose than the lil eyebrow h3 above",
}: SplitProps) {
  return (
    <section className="group py-6 lg:py-12">
      <div className="mx-auto block group-odd:flex-row-reverse group-even:flex-row lg:flex lg:min-w-[50%] lg:max-w-7xl">
        <GatsbyImage
          image={image.gatsbyImageData}
          alt=""
          className="block w-full"
        />
        <div className="text-wrapper p-4 lg:max-w-[50%]">
          <h3 className="text-xl font-semibold leading-7">{h3}</h3>
          <p className="mt-4 text-4xl font-extrabold tracking-tight">
            {paragraph}
          </p>
          <p className="mt-4 max-w-xl text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            itaque optio laborum earum unde provident, quod laudantium
            veritatis, possimus ratione repudiandae quae aut sint eius sequi
            minus sit commodi consectetur!
          </p>
        </div>
      </div>
    </section>
  );
}
export const query = graphql`
  fragment SplitImage on ImageSharp {
    gatsbyImageData(width: 900)
  }
`;
