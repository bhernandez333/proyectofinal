import React from "react";
import * as MI_API from "../Api";
import { Formik, Field, Form } from 'formik';
import { Card } from '@material-ui/core';

export default class Crear extends React.Component {
  par = this.props.location.state ? 
          this.props.location.state : 
          {id: ""};
  state = {
    todos: []
  };

  componentDidMount() {
    this.obtenerTodos();
  }

  obtenerTodos() {
    MI_API.getTodos().then((res) => {
      console.log("Obtuve los todos");
      this.setState({ todos: res.data });
    });
  }

  crear(todo) {
    MI_API.saveTodo(todo).then((res) => {
      console.log(`Creado: ${todo.name}`);
      const newTodoList = this.state.todos;
      newTodoList.push(todo);
      this.setState({
        todos: newTodoList
      });
    });
  }

  actualizar(todo) {
    MI_API.putTodo(todo).then((res) => {
      console.log(`Actualizar: ${todo.name}`);
      console.log(todo);
      const newTodoList = this.state.todos;
      newTodoList.push(todo);
      this.setState({
        todos: newTodoList
      });
    });
  }

  render() {
    return (
    <Card style={ { maxWidth:345, margin: 15, textAlign: "center"}}>
      <div className="Crear">
        <p>Mantenimiento de Contactos</p>
        {console.log("this.par: ")}
        {console.log(this.par) }
        <Formik enableReinitialize
          initialValues={this.par.id ? 
                          ({ name: this.par.name, last: this.par.last, 
                           phone: this.par.phone, email: this.par.email,
                           isActive: this.par.isActive, timestamp: new Date().toISOString().split('T')[0]})
                          : 
                           ({ name: "", last: "" , 
                           phone: "", email: "",
                           isActive: 0, timestamp: new Date().toISOString().split('T')[0] })
                          }
          onSubmit={(values) => { 
            console.log("values: "); 
            console.log(values); 
            this.par.id ? 
            this.actualizar({
              id: this.par.id,
              name: values.name,
              last: values.last,
              phone: values.phone, 
              email: values.email, 
              isActive: values.isActive, 
              timestamp: values.timestamp
            })
            :
            this.crear({
              name: values.name,
              last: values.last,
              phone: values.phone, 
              email: values.email, 
              isActive: values.isActive, 
              timestamp: values.timestamp
            })
            this.props.history.push('/');
          }}>
          <Form>
            <p>
              <Field name="name" type="text" placeholder="Escriba un nombre" required />
            </p>
            <p>
              <Field name="last" type="text" placeholder="Escriba un apellido" />
            </p>
            <p>
              <Field name="phone" type="phone" placeholder="Escriba el teléfono" />
            </p>
            <p>
              <Field name="email" type="email" placeholder="Escriba un correo" required />
            </p>
            <p>
              <button type="submit"
              >Guardar</button>
            </p>
         </Form>
       </Formik>
      </div>
    </Card>
    )
  }
}

/*export default Crear;*/
