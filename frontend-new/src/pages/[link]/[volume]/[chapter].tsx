import { FC, useCallback, useEffect, useState } from 'react'
import { Template } from 'components'
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const pages = [
    '01.jpg',
    '02.jpg',
    '03.jpg'
  ]

  return {
    props: { pages}
  }
}

const Chapter: FC<{pages: []}> = ({ pages }) => {
  const router = useRouter()
  const page = parseInt(router.query['page'].toString())

  const onClick = useCallback((event: any) => {
    const div = event.target.parentNode
    const currentPage = parseInt(div.getAttribute('data-p'))
    const windowWidth = Math.floor(div.offsetWidth / 2)

    if (div.className !== 'chapter-page-item') return

    if (document.body.scrollWidth < 481) {
      document.querySelector('header').classList.remove('header-not-hidden')
      document.querySelector('header').classList.add('header-hidden')
    }

    if (event.clientX - div.offsetLeft > windowWidth) {
      const lastPage = pages.length;
      if (currentPage === lastPage) {
        // самая последняя страница
        return
      }

      var newurl = window.location.pathname + '?page=' + (currentPage + 1)
      router.push(newurl)

      div.classList.add('hidden')
      const nextElem = document.querySelectorAll('[data-p="' + (currentPage + 1) + '"]')[0]
      nextElem.classList.remove('hidden')
    } else {
      if (currentPage === 1) {
        // самая первая страница
        return
      }

      var newurl = window.location.pathname + '?page=' + (currentPage - 1)
      router.push(newurl)

      div.classList.add('hidden')
      const prevElem = document.querySelectorAll('[data-p="' + (currentPage - 1) + '"]')[0]
      prevElem.classList.remove('hidden')
    }
  }, [])

  useEffect(() => {
    let lastPos = 0;
    const handleScroll = (event: any) => {
      if (window.scrollY < 50) return
      if (window.scrollY < lastPos) {
        document.querySelector('header').classList.remove('header-hidden')
        document.querySelector('header').classList.add('header-not-hidden')
      } else {
        document.querySelector('header').classList.remove('header-not-hidden')
        document.querySelector('header').classList.add('header-hidden')
      }
      lastPos = window.scrollY
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Template title='Wasd'>
      <div className='chapter-page container'>
        { pages.map((value, index) => (
          <div className={ 'chapter-page-item' + ((page == index + 1) ? '' : ' hidden') }
            data-p={ index + 1 } onClick={onClick} key={index}>
            <img src={ `/${value}` } alt='page' />
          </div>
        ))}

        <div className='chapter-comments'>comments</div>
      </div>
    </Template>
  )
}

export default Chapter