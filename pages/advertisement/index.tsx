import { ReactElement } from 'react'

import Header from '../../components/Header'

const Advertisement = () => {
  return <div>advertisement</div>
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
