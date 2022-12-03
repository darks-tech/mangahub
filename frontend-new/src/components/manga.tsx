import { FC } from 'react'
import Link from 'next/link'

export interface MangaProps {
  poster: string;
  link: string;
  title: string;
  type: string;
}

const Manga: FC<MangaProps> = ({ poster, link, title, type }) => (
  <Link href={`/${link}`}>
    <div className='manga'>
      <img src={poster} alt='poster'/>
      <div className='manga-title'>{title}</div>
      <div className='manga-type'>{type}</div>
    </div>
  </Link>
)

export { Manga }