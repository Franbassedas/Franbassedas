/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';


import H1 from 'components/H1';
import UserTable from './UserTable';
import table from './style.css'
import Tabla from './Tabla'


export default function UsuariosPage() {

    let headers = [
        
        {label: "Nombre", property: "name"}, 
        {label: "Apellido", property: "lastName"},
        {label: "Edad", property: "age"}
      ]


    let usuarios = [
        { name: "Franco", lastName: "Bassedas", age: 20},
        { name: "Gustavo", lastName: "Garayalde", age: 30},
        { name: "Cristian", lastName: "Rios", age: 33},
        { name: "Lionel", lastName: "Messi", age: 32},
        { name: "Roger", lastName: "Federer", age: 38}
    ]
    
  return (
    <div>
      <Helmet>
        <title>Usuarios</title>
        <meta
          name="description"
          content="Pantalla de Usuarios"
        />
      </Helmet>
      <H1>
          Usuarios
      </H1>

      <Tabla header = {headers} rows = {usuarios}/>

    </div>
  );
}
