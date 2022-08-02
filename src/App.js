import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Movies from "./Movies"
import Reviews from "./Reviews"
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from "./Home"
import Shows from "./Shows"
import Test from "./Test"



function App(){


  return(
    <div className="App">
    {/* <NavBar/> */}
    <ToastContainer />

    <Switch>
      {/* <Route path= "/Queue">
        <Reviews/>
      </Route>
      <Route path = "/Movies">
        <Movies/>
      </Route>
      <Route path = "/Shows">
        <Shows/>
      </Route>
      <Route path = "/Test">
        <Test/>
      </Route> */}
      <Route exact path = "/">
        <Test/>
      </Route>

    </Switch>
    </div>
  )
}
export default App