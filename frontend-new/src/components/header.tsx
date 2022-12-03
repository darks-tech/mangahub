import { FC } from 'react'
import Link from 'next/link'
import { MenuIcon } from 'icons'

const Header: FC = () => (
  <header className=''>
    <div className='header container'>
      <Link href='/'>
        <div className='header-logo'>Manga<span>Hub</span></div>
      </Link>

      <div className='header-menu'>
        <MenuIcon />
      </div>
    </div>
  </header>
)

export { Header }