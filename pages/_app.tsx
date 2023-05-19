import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
