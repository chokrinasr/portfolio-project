import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Skills from "./components/Skills";
function App() {
  return (
  <>
  <Particles params={{
                    particles: {
                        number:{
                          value:30,
                          density:{ 
                            enable:true,
                            value_area:900
                          }
                        },
                      shape:{
                        type:"square",
                        stroke:{
                          width:6,
                          color:"#fff"
                        }

                      } }
                    }
                }/>
  <Navbar />
  <Header />
  <About />
  <Skills />
  </>);
}

export default App;
