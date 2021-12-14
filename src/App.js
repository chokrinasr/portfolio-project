import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Skills from "./components/Skills";
import Timeline from "./components/timeline/Timeline";
import Contact from "./components/Contact";
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css';
function App() {
  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          position: fixed;
          z-index: 2000;
          width:100%;
          background-color: var(--primary-dark);
          
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          z-index: 2000;
          background: #ffffff;
          width: 100%;
          border-bottom: 1px solid #dddddd;
        }
        .styl {
          padding-top: 80px;
        }
      `}</style>
    )
  }
  return (
    <>
      <Particles params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "square",
            stroke: {
              width: 6,
              color: "#fff"
            }

          }
        }
      }
      } />
      {style()}
      <StickyNav length='40'><Navbar /></StickyNav>
      <Header />
      <About />
      <Skills />
      <Timeline />
      <Contact />
    </>);
}

export default App;
