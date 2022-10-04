import Leftnav from "../../components/navbar/leftnav/leftnav"
import Navbar from "../../components/navbar/topnav/navbar"
import Rightnav from "../../components/navbar/rightnav/rightnav"
import './home.css'


const HomeScreen = () => {

  return (
    <div>
      <Navbar />
      <div className="main-container d-flex justify-content-center">
        <div className="left-side-nav bg-light d-block pt-2">
          <Leftnav />
        </div>
        <div className="middle-post-nav bg-warning pt-2">
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
          <p>Middle</p>
        </div>
        <div className="right-active-nav d-none d-xl-block pt-2">
          <Rightnav />
        </div>

        
      </div>
    </div>

  )
}

export default HomeScreen
