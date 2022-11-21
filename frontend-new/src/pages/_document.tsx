import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script type='text/javascript' src='/scripts/switcher.js' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument