import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Movies from "./Movies"
import Reviews from "./Reviews"


function App(){


  return(
    <div className="App">
    <NavBar/>
    <Switch>
      <Route exact path= "/Reviews">
        <Reviews/>
      </Route>
      <Route exact path = "/Movies">
        <Movies />
      </Route>
    </Switch>
    </div>
  )
}
export default App