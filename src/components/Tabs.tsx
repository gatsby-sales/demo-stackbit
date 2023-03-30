import React from "react";
import { Tab } from "@headlessui/react";
import { graphql, useStaticQuery } from "gatsby";

export default function Tabs() {
  const data = useStaticQuery(graphql`
    query TabsFallback {
      allTabsJson {
        nodes {
          label {
            body
            heading
          }
          panel
        }
      }
    }
  `).allTabsJson.nodes;
  return (
    <section>
      <div className="tab-wrapper mx-auto max-w-7xl py-7">
        <Tab.Group>
          <Tab.List className="mt-6 block w-full justify-between border-t border-slate-200 sm:gap-0 lg:flex lg:gap-x-5 ">
            {data.map(({ label }) => {
              return (
                <Tab
                  className="w-full border-t border-transparent py-7 px-3 text-left ui-selected:border-indigo-500 [&:not(:focus-visible)]:focus:outline-none"
                  key={label.heading}
                >
                  <h4 className="font-bold">{label.heading}</h4>
                  <p>{label.body}</p>
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels>
            {data.map(({ panel }) => {
              return (
                <Tab.Panel className="p-3" key={panel}>
                  {panel}
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
