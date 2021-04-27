import React from "react";
import * as MI_API from "../Api";
import Tarjeta from "./Tarjeta";

export default class Home extends React.Component {
  state = {
        todos: []
    };

    componentDidMount() {
        this.obtenerTodos();
    }
    
    obtenerTodos() {
        MI_API.getTodos().then((res) => {
          console.log("Obtuve todos los datos.");
          console.log(res);
          this.setState({ todos: res.data });
        });
    }
    
    render() {
      return (
        <div>
           <p> Lista de contactos </p>
           <ul>
             {
              this.state.todos.map((x) => (
                <li key={x.id}>
                 <Tarjeta Par={x}></Tarjeta>
                 {console.log(x)}
               </li>
             ))}{" "}
           </ul>
        </div>
      )
    }
}


/*export default Home;*/