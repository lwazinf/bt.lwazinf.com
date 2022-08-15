import '../styles/globals.css'
import type { AppProps } from 'next/app'

import React from 'react'
import {
  RecoilRoot,
  atom,
  selector,
} from 'recoil'
import { Layout_ } from '../components/Layout_'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout_>
        <Component {...pageProps} />
      </Layout_>
    </RecoilRoot>
  )
}

export default MyApp
