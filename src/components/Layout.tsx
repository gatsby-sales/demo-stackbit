import React, { ReactNode } from "react";
import Nav from "./Nav";
type LayoutProps = {
  title: string;
  children: ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Nav title={title} />
      {children}
    </>
  );
}
