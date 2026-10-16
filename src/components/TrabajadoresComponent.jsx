import React, { Component } from 'react';
import ServiceHospitales from '../services/ServiceHospitales';

export default class TrabajadoresComponent extends Component {
    // 1. Initialize the service and state as class properties
    service = new ServiceHospitales();

    state = {
        trabajadores: []
    }

    // 2. Define loadTrabajadores as a class method
    loadTrabajadores = async () => {
        let idhospitales = this.props.idhospitales;
        let data = '';
        for (let id of idhospitales) { // Added 'let' to declare 'id'
            data += "idhospital=" + id + "&";
        }
        if (data.length > 0) {
            data = data.substring(0, data.length - 1);
        }
        let datos = await this.service.getTrabajadoresHospitales(data);
        this.setState({
            trabajadores: datos
        })
    }

    // 3. Lifecycle methods defined properly inside the class body
    componentDidMount = async () => {
        await this.loadTrabajadores();
    } 

    componentDidUpdate = async (oldProps) => {
        if (oldProps.idhospitales !== this.props.idhospitales) {
            await this.loadTrabajadores();
        }
    }

    render() {
        return (
            <div>
                <h1>Trabajadores</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>IdTrabajador</th>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>Hospital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.trabajadores.map((trabajador, index) => {
                            return (
                                <tr key={index}>
                                    <td>{trabajador.idTrabajador}</td>
                                    <td>{trabajador.apellido}</td>
                                    <td>{trabajador.oficio}</td>
                                    <td>{trabajador.salario}</td>
                                    <td>{trabajador.idHospital}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}