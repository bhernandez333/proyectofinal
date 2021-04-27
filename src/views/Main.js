import { Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Crear from "./Crear";

function Main(props) {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/crear' component={Crear} />
            </Switch>
        </div>
    )
}


export default Main;