import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0,shrink-to-fit=0" />
          <style>{`
          body {
            margin: 0
          }
          `}</style>
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
