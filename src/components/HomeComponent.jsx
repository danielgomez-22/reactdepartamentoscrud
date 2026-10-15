import React, { Component } from 'react'
import elbicho from './../assets/images/elbicho.jpg'
import ServiceDepartamentos from './../services/ServiceDepartamentos'
import { NavLink } from 'react-router-dom'

export default class HomeComponent extends Component {
    service = new ServiceDepartamentos();
    state = {
        departamentos: [],
        status: false
    }
    loadDepartamentos = () => {
        this.service.getDepartamentos().then((result) => {
            console.log('leyendo departamentos');
            this.setState({
                departamentos: result,
                status: true
            })
        })
    }
    componentDidMount() {
        this.loadDepartamentos();
    }

    deleteDepartamento = (idDepartamento) => {
        this.service.deleteDepartamentos(idDepartamento).then((result) => {
            console.log('departamento eliminado');
            this.loadDepartamentos();
        })
    }
  render() {
    if (this.state.status == true) {
        return (
        <div style={{ margin: "auto", width: "50%" }}>
            <table className="table table-info">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.departamentos.map((depto, index) => {
                            return (<tr key={index}>
                                <td>{depto.numero}</td>
                                <td>{depto.nombre}</td>
                                <td>{depto.localidad}</td>
                                <td>
                                    <NavLink className="btn btn-info" to={"/update/"
                                        + depto.numero + "/" + depto.nombre + "/" + depto.localidad}>
                                        Edit
                                    </NavLink>
                                </td>
                                <td><button className="btn btn-danger"
                                onClick={() => 
                                {this.deleteDepartamento(depto.numero)}}>
                                    Delete
                                </button></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
        )
    
    }else{
        return (<img src={elbicho} alt="El Bicho" />)
    }
    
  }
}
