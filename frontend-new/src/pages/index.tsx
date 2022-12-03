import { FC } from 'react'
import { Template } from 'components'
import Link from 'next/link'

const Index: FC = () => (
  <Template title='Басты бет'>
    <div className='index-page container'>
      <div className='title'>Соңғы аудармалар</div>

      <div className='release-list'>
        <Manga img='/death.png' title='Ажал дәптері' type='2006' />
        <Manga img='/aot.webp' title='Титандар шабуылы' type='2009' />
        <Manga img='/jujutsu.webp' title='Сиқырлы шайқас' type='2018' />
      </div>

    </div>
  </Template>
)

const Manga: FC<{ img: string, title: string, type: string }> = ({ img, title, type }) => (
  <Link href='/wasd'>
    <div className='manga'>
      <img src={img } alt='poster'/>
      <div className='manga-title'>{title}</div>
      <div className='manga-type'>{type}</div>
    </div>
  </Link>
)

export default Index
