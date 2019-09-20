import React from "react";
import App from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps
    };
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
