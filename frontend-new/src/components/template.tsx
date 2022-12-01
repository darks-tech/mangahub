import Head from 'next/head';
import { FC } from 'react'
import { Header } from 'components';

interface TemplateProps {
  title: string
  children: JSX.Element
}

const Template: FC<TemplateProps> = ({ title, children }) => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{ title }</title>
    </Head>
    
    <Header />
    <main>
      { children }
    </main>
  </>
)

export { Template }
