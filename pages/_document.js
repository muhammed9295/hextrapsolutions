import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <>          
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />          
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="site.webmanifest" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
          {/* Place favicon.ico in the root directory */}
          {/* CSS here */}
        </>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
