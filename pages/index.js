import React from "react";
import Head from "next/head";
import Directory from "../components/directory/directory.component";
import { categories } from "../constants";

export default function Home(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Capstone Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Directory categories={props.categories} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      categories,
    }, // will be passed to the page component as props
  };
}
