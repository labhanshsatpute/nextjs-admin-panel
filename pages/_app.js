import React from "react";
import App from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default class MyApp extends App {
  render() {
    
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <title>Admin Panel</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}