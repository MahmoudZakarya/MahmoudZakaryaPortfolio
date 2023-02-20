import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { useEffect } from 'react'

export default function Document() {



  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src='../utilities/mixitup.min.js'></Script>
      </body>
    </Html>
  )
}
