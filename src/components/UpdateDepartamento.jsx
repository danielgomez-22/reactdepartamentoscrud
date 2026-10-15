import React, { Component } from 'react'
import ServiceDepartamentos from '../services/ServiceDepartamentos'
import { Navigate } from 'react-router-dom';

export default class UpdateDepartamento extends Component {
    service = new ServiceDepartamentos();

    cajaNumero = React.createRef();
    cajaNombre = React.createRef()
    cajaLocalidad = React.createRef()

    state = {
        status: false
    }
    updateDepartamento = (event) => {
        event.preventDefault();
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }
        console.log(departamento);
        this.service.updateDepartamentos(departamento).then(response => {
            console.log('Datos actualizados');
            this.setState({
                status: true
            })
        });

    }
  render() {
    return (
      <div>
        {
            this.state.status == true &&
            <Navigate to="/" />
        }
        <h1>Update Departamento</h1>
        <h2>Id: {this.props.id}</h2>
        <h2>Nombre: {this.props.nombre}</h2>
        <h2>Localidad: {this.props.localidad}</h2>
        <form>
            <input type="hidden" className="form-control" defaultValue={this.props.id} ref={this.cajaNumero} disabled/>
            <label>Nombre Departamento</label>
            <input type="text" className="form-control" defaultValue={this.props.nombre} ref={this.cajaNombre} />
            <label>Localidad Departamento</label>
            <input type="text" className="form-control" defaultValue={this.props.localidad} ref={this.cajaLocalidad} />
            <button onClick={this.updateDepartamento} className="btn btn-info">Update </button>
        </form>
      </div>

    )
  }
}
