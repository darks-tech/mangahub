import { FC } from 'react'
import Link from 'next/link'
import { MenuIcon } from 'icons'

const Header: FC = () => (
  <header>
    <div className='header container'>
      <Link href='/'>
        <div className='header-logo'>Risokyo<span>Lib</span></div>
      </Link>

      <div className='header-menu'>
        <MenuIcon />
      </div>
    </div>
  </header>
)

export { Header }