import { FC, useCallback } from 'react'
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

const Chapter: FC = ({ pages }: { pages: [] }) => {
  const router = useRouter()
  
  console.log(router.query.page)

  const onClick = useCallback((event: any) => {
    const div = event.target.parentNode
    const currentPage = parseInt(div.getAttribute('data-p'))
    const windowWidth = Math.floor(div.offsetWidth / 2)
  
    const hidden = () => div.classList.add('hidden')

    if (div.className !== 'item-page') return

    if (event.clientX - div.offsetLeft > windowWidth) {
      const lastPage = 3;
      if (currentPage === lastPage) {
        // самая последняя страница
        return
      }
      

      var newurl = location.protocol + "//" + window.location.host + window.location.pathname + '?page=' + (currentPage + 1);
      router.push(newurl)

      hidden()
      const nextElem = document.querySelectorAll('[data-p="' + (currentPage + 1) + '"]')[0];
      nextElem.classList.remove('hidden');
    } else {
      if (currentPage === 1) {
        // самая первая страница
        return
      }

      var newurl = location.protocol + "//" + window.location.host + window.location.pathname + '?page=' + (currentPage - 1);
      router.push(newurl)

      hidden()
      const prevElem = document.querySelectorAll('[data-p="' + (currentPage - 1) + '"]')[0];
      prevElem.classList.remove('hidden');
    }
  }, [])

  return (
    <Template title='Wasd'>
      <div className='item-pages container'>
        {
          pages.map((value, index) => (
            <div className={ 'item-page' + ((parseInt(router.query['page'].toString()) == index + 1) ? '' : ' hidden') } data-p={ index + 1 } onClick={onClick} key={index}>
              <img src={ `/${value}` } alt='page' />
            </div>
          ))
        }
      </div>
    </Template>
  )
}

export default Chapter