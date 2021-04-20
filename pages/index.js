import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>sentry-intercom</title>
      </Head>

      <main>This is a page. It doesn't do anything yet, but it is a page.</main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
