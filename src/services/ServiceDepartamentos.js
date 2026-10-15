import axios from 'axios'
import Global from '../Global'


export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function (resolve){
            let url =  Global.urlDepartamentos;
            let request = "api/departamentos";
            axios.get(url + request)
            .then((response) => {
                console.log(response.data);
                resolve(response.data);
            })
        })
    }

    insertDepartamentos(departamento) {
        return new Promise(function (resolve, reject){
            let  url = Global.urlDepartamentos;
            let request = "api/departamentos";
            axios.post(url + request, departamento).then(response => {
                console.log('insertando datos')
                resolve(response);
            }).catch(error => {
                console.log("Error al insertar datos: " + error);
                reject(error);
            })
        })
    }

    updateDepartamentos(departamento) {
        return new Promise (function (resolve) {
            let url = Global.urlDepartamentos;
            let request = "api/departamentos";
            axios.put(url + request, departamento).then((response) => {
                console.log('actualizando datos');
                resolve(response);
            })
        })
    }

    deleteDepartamentos(idDepartamento) {
        return new Promise (function(resolve){
            let url = Global.urlDepartamentos;
            let request = "api/departamentos/" + idDepartamento;
            axios.delete(url + request).then((response)=> {
                console.log('departamentoo eliminado');
                resolve(response);
            })
        })
    }
}
 