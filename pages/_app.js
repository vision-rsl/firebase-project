import './styles.css'

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";


export default function MyApp ({ Component, pageProps }) {
  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />
}