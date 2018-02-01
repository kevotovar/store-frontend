import Document, { Head, Main, NextScript } from "next/document";
import { ReactNode } from "react";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static getInitialProps(props: any) {
    const { html, head, errorHtml, chunks } = props.renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render():ReactNode {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
        </Head>
        <body>
          <h1>hi</h1>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}