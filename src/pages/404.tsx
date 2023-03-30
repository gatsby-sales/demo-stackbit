import * as React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";

function NotFoundPage() {
  return (
    <Layout title="Page not found">
      <main className="mx-auto max-w-xl">
        <h1 className="my-4 text-2xl font-bold">Page not found</h1>
        <Button to="/" text="Home" />
      </main>
    </Layout>
  );
}

export default NotFoundPage;
