import "./App.css"
import Anil from "./Anil/Anil"
import Chaitra from "./Chaitra/Chaitra"
import Chiranth from "./Chiranth/Chiranth"
import Nikitha from "./Nikitha/Nikitha"
import Pranit from "./Pranit/Pranit"
import Subhadip from "./Subhadip/Subhadip"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/anil">Anil</Link>
        <Link to="/chaitra">Chaitra</Link>
        <Link to="/chiranth">Chiranth</Link>
        <Link to="/nikitha">Nikitha</Link>
        <Link to="/pranit">Pranit</Link>
        <Link to="/subhadip">Subhadip</Link>
        <Route path="/anil" component={Anil} />
        <Route path="/chaitra" component={Chaitra} />
        <Route path="/chiranth" component={Chiranth} />
        <Route path="/nikitha" component={Nikitha} />
        <Route path="/pranit" component={Pranit} />
        <Route path="/subhadip" component={Subhadip} />
      </div>
    </Router>
  )
}

export default App
