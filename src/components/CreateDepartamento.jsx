import React, { Component } from 'react'
import ServiceDepartamentos from '../services/ServiceDepartamentos'
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {
    service = new ServiceDepartamentos();

    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    insertDepartamento = (event) => {
        //creamos en objeto departamento
        event.preventDefault();
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }
        //capturamos el error en una promesa
        this.service.insertDepartamentos(departamento).then((result) => {
            this.setState({// solo cambio el eestado para la navegacion
                status: true
            })
        }).catch((error) => {
            this.setState({
                mensaje: error.mensaje 
            })
        })
    }
    state = {
        mensaje: null, 
        status: false,

    }
    render() {
    if (this.state.status == true) {
        return (<Navigate to="/" />)
    }else {
        return (
      <div>
        <h1>Crear Departamento</h1>
        {
            this.state.mensaje && 
            <p style = {{color: 'red', fontWeight: 'bold'}}> {this.state.mensaje}</p>
        }
        <form>
            <label>Id Departamento</label>
            <input type="number" className="form-control" ref={this.cajaNumero} />
            <label>Nombre Departamento</label>
            <input type="text" className="form-control" ref={this.cajaNombre} />
            <label>Localidad Departamento</label>
            <input type="text" className="form-control" ref={this.cajaLocalidad} />
            <button onClick={this.insertDepartamento} className="btn btn-info">Insertar Departamento</button>
        </form>
      </div>
    )
    }
  }
}
