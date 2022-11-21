import { FC } from 'react'
import { Template } from 'components'
import Link from 'next/link'

const Index: FC = () => (
  <Template title='Басты бет'>
    <div className='index-page container'>
      <div className='title'>Соңғы аудармалар</div>

      <div className='release-list'>
        <Manga img='/death.png' title='Ажал дәптері' type='Манга' />
        <Manga img='/aot.webp' title='Титандар шабуылы' type='Манга' />
        <Manga img='/jujutsu.webp' title='Сиқырлы шайқас' type='Манга' />
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
