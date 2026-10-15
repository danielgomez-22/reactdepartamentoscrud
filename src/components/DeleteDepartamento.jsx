import React, { Component } from 'react'

export default class DeleteDepartamento extends Component {
  render() {
    const { departamento, onConfirm, onCancel } = this.props;

    return (
      <div>
        <h1>
          ¿Quieres eliminar el departamento "{departamento.nombre}"?
        </h1>
        <button className="btn btn-danger" onClick={onConfirm}>
          Sí
        </button>
        <button className="btn btn-secondary" onClick={onCancel}>
          No
        </button>
      </div>
    )
  }
}
