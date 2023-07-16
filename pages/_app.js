import "../styles/globals.css";
import Head from "next/head";

function KiddoEducation({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Computer Skills</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default KiddoEducation;
