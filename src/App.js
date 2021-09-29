import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Movies from "./Movies"
import Reviews from "./Reviews"


function App(){


  // console.log(movieTitle)
  return(
    <div className="App">
    <NavBar/>
    <Switch>
      <Route exact path = "/Reviews">
        <Reviews/>
      </Route>
      <Route exact path = "/">
        <Movies />
      </Route>
    </Switch>
    </div>
  )
}
export default App