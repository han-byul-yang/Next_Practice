import Head from 'next/head'
import Image from 'next/image'
import { Fragment, ReactElement } from 'react'

import Header from '../../components/Header'

const Advertisement = () => {
  return (
    <>
      <Head>
        <title>advertisement page</title>
        <meta name='description' content='advertisement description' />
      </Head>
      <div>advertisement</div>
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
