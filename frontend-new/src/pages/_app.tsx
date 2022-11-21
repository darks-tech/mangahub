import { FC } from 'react'
import type { AppProps } from 'next/app'

// styles
import 'css/main.css'
import 'css/fonts.css'

import 'css/pages/index.css'

import 'css/components/header.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return <Component { ...pageProps } />
}

export default App