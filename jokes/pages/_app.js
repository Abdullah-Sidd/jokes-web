import '../styles/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
  }, [])
  return  <> <LoadingBar
  color='#f11946'
  progress={progress}
  waitingTime = {400}
  height = {4}
  onLoaderFinished={() => setProgress(0)}
/><Navbar/><Component {...pageProps} /><Stats /><Testimonials/>,<Footer/></>
}

export default MyApp
