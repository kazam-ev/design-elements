import Layout from "../components/Layout"
import  "../styles/style.css"
import  "../styles/globals.css"
import "../components/Navbar.css"

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
   <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
