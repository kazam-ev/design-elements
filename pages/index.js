
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Pictures from "../components/Pictures"
import Info from "../components/Info"
import Midbar from '../components/Midbar'
// import Card from '../components/Card'
import Infodev from '../components/Infodev'
import CardList from '../components/CardList'
// import Navabart from '../components/Navabart'
function Home() {
  return (
    <>


      {/* <Navbar /> */}
      <Hero />
      <Infodev />
     <Midbar/>
     <CardList />
    </>
  )
}

export default Home
