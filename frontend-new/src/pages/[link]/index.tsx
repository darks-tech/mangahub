import { FC } from 'react'
import { Template } from 'components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Single: FC = () => {
  const router = useRouter();
  const { link } = router.query;
  
  return (
    <Template title='Item Title'>
      <div className='item-page container'>
        <h3>{ link }</h3>
        <Link href='/shingeki-no-kiojin/v1/c1?page=1'>Оқу...</Link>
      </div>
    </Template>
  )
}

export default Single