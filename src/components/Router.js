import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import CreateDepartamento from './CreateDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
import { useParams } from 'react-router-dom';


export default class Router extends Component {
    render() {
        function UpdateDepartamentoElement() {
        let {id, nombre, localidad} = useParams();
        return <UpdateDepartamento id={id} nombre={nombre} localidad={localidad} />
        }
    
    return (
      <BrowserRouter>
        <MenuComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />    
          <Route path="/createdept" element={<CreateDepartamento />} />
          <Route path="/update/:id/:nombre/:localidad" element={<UpdateDepartamentoElement />} />
        </Routes>
      </BrowserRouter>
    )
  }
}