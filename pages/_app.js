
// global CSS styling to be accessed by all pages

import '../styles/global.css'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

