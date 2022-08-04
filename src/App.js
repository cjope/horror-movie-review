import { Route, Switch } from "react-router-dom"
import Movies from "./Movies"
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Shows from "./Shows"
import Test from "./Test"
import Reviews from "./Reviews"

function App(){

  return(
    <div className="App">
    <ToastContainer />
    <Switch>
      <Route exact path = "/">
        <Test/>
      </Route>
      <Route exact path = "/Movies">
        <Movies/>
      </Route>
      <Route exact path = "/Shows">
        <Shows/>
      </Route>
      <Route exact path = "/">
        <Reviews/>
      </Route>
    </Switch>
    </div>
  )
}
export default App