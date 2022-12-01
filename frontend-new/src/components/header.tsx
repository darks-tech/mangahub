import { FC } from 'react'
import Link from 'next/link'

const Header: FC = () => (
  <header>
    <div className='header container'>
      <Link href='/'>
        <div className='header-logo'>Manga<span>Hub</span></div>
      </Link>
    </div>
  </header>
)

export { Header }