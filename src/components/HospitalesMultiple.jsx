import React, { Component } from 'react'
import ServiceHospitales from '../services/ServiceHospitales'
import TrabajadoresComponent from './TrabajadoresComponent';

export default class HospitalesMultiple extends Component {
    service = new ServiceHospitales();
    selectHospitales = React.createRef();

    state = {
        hospitales: [],
        hospitalesSeleccionados: []
    }

    loadHospitales = async () => {
        let datos = await this.service.getHospitales();
        this.setState({
            hospitales: datos
        })
    }
    componentDidMount = async () => {
        await this.loadHospitales();
    }

    getHospitalesSeleccionados = (event) => {
        event.preventDefault();
        console.log('ok')
        let aux = [];
        let options = this.selectHospitales.current.options;
        for (let option of options) {
                if (option.selected) {
                    aux.push(option.value);
                }
        console.log(aux);
        this.setState({
                hospitalesSeleccionados: aux
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Hospitales Multiple</h1>
                <form>
                    <select ref={this.selectHospitales} className="form-control" multiple>
                        {
                            this.state.hospitales.map((hospital , index) => {
                                return(<option key={index} value={hospital.idHospital}>
                                    {hospital.nombre}
                                </option>
                                )
                            })
                        }
                    </select>
                    <button onClick={this.getHospitalesSeleccionados} className="btn btn-primary mt-2">Mostrar trabajdores</button>
                </form>
                {
                    this.state.hospitalesSeleccionados.length != 0 && 
                    <TrabajadoresComponent idhospitales={this.state.hospitalesSeleccionados} />
                }
            </div>
        )
    }
}
