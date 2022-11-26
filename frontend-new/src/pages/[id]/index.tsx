import { FC, useCallback } from 'react'
import { Template } from 'components'

const Single: FC = () => {
  const onClick = useCallback(event => {
    const div = event.target.parentNode
    const currentPage = parseInt(div.getAttribute('data-p'))
    const windowWidth = Math.floor(window.screen.width / 2)

    if (div.className !== 'item-page') {
      return
    }

    if (event.clientX > windowWidth) {
      const lastPage = 3;
      if (currentPage === lastPage) {
        // самая последняя страница
        return
      }
      
      div.classList.add('hidden');
      const nextElem = document.querySelectorAll('[data-p="' + (currentPage + 1) + '"]')[0];
      nextElem.classList.remove('hidden');
    } else {
      if (currentPage === 1) {
        // самая первая страница
        return
      }
      div.classList.add('hidden');
      const prevElem = document.querySelectorAll('[data-p="' + (currentPage - 1) + '"]')[0];
      console.log(currentPage)
      prevElem.classList.remove('hidden');
    }
  }, [])

  return (
    <Template title='Wasd'>
      <div className='items-page container'>
        <div className='item-page' data-p='1' onClick={onClick}>
          <img src='/01.jpg' alt='page' />
        </div>

        <div className='item-page hidden' data-p='2' onClick={onClick}>
          <img src='/02.jpg' alt='page' />
        </div>

        <div className='item-page hidden' data-p='3' onClick={onClick}>
          <img src='/03.jpg' alt='page' />
        </div>
      </div>
    </Template>
  )
}

export default Single