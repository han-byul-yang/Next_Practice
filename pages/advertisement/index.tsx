import Head from 'next/head'
import { ReactElement } from 'react'

import Header from '../../components/Header'

const Advertisement = () => {
  return (
    <>
      <Head>
        <title>advertisement page</title>
        <meta name='description' content='advertisement description' />
      </Head>
      <div>advertisement</div>
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
