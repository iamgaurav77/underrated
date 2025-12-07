// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, type DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <meta name='theme-color' content='#6f0000' />
          <link
            rel='apple-touch-icon'
            href='https://img.freepik.com/free-psd/cineraria-flower-png-isolated-transparent-background_191095-10910.jpg'
          />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-title' content='Underrated' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
