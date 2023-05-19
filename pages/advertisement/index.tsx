import Head from 'next/head'
import Image from 'next/image'
import { Fragment, ReactElement } from 'react'

// eslint-disable-next-line import/extensions
import Header from '@/layout/Header/index'

import firstImg from 'public/1.jpg'

const Advertisement = () => {
  return (
    <>
      <Head>
        <title>advertisement page</title>
        <meta name='description' content='advertisement description' />
      </Head>
      <div>advertisement</div>
      <Image src={firstImg} alt='1-img' placeholder='blur' width='280' height='320' />
      {[1, 2, 3, 4, 5, 6].map((img) => {
        return (
          <Fragment key={img}>
            <Image src={`/${img}.jpg`} alt={`${img}-img`} width='380' height='520' />
          </Fragment>
        )
      })}
    </>
  )
}

export default Advertisement

Advertisement.getLayout = function pageLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  )
}
