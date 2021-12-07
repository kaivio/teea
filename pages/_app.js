// import App from 'next/app'
import '/styles/globals.css'
import Head from 'next/head'
import {isDev} from '../lib'

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <link rel="icon" href={`/tea${isDev ? '.dev' : ''}.jpg`}></link>
    </Head>
    
    <Component {...pageProps} />
  </>)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
