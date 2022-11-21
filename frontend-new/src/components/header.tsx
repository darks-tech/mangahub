import { FC, useCallback, useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from 'icons';

const Header: FC = () => {
  const [theme, changeTheme] = useState({})

  useEffect(() => {
    if (typeof theme !== 'object') {
      return
    }
    const currentTheme = document.querySelector('body').getAttribute('data-theme')
    if (currentTheme === 'light') {
      changeTheme(true)
      return
    }
    changeTheme(false)
  }, [])

  const OnClick = useCallback(() => {
    const currentTheme = document.querySelector('body').getAttribute('data-theme')
    let targetTheme = 'light'
    let targetState = true

    if (currentTheme === 'light') {
      targetTheme = 'dark'
      targetState = false
    }

    document.querySelector('body').setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme)
    changeTheme(targetState)
  }, [])

  return (
    <header>
      <div className='header container'>
        <div className='header-logo'>Manga<span>Hub</span></div>
        <button id='switcher' onClick={OnClick}>{theme ? <SunIcon /> : <MoonIcon />}</button>
      </div>
    </header>
  )
}


export { Header }