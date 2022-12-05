import { FC } from 'react'
import { Manga, MangaProps, Template } from 'components'

export const getServerSideProps = () => {
  const items = [
    { poster: '/death.png',    link: 'death-note',         title: 'Ажал дәптері',     type: '2006' },
    { poster: '/aot.webp',     link: 'shingeki-no-kyojin', title: 'Титандар шабуылы', type: '2009' },
    { poster: '/jujutsu.webp', link: 'jujutsu-kaisen',     title: 'Сиқырлы шайқас',   type: '2018' },
  ]

  return { props: { items } }
}

const Index: FC<{ items: MangaProps[]}> = ({ items }) => (
  <Template title='Басты бет'>
    <div className='index-page container'>
      <div className='title'>Соңғы аудармалар</div>
      <div className='items-list'>
        {items.map((value: MangaProps, index: number) => (
            <Manga poster={value.poster} link={value.link} title={value.title} type={value.type} key={index} />
        ))}
      </div>
    </div>
  </Template>
)

export default Index
