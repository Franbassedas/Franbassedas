/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';


import H1 from 'components/H1';
import Tabla from './Tabla'



export default function CuentasPage() {

    let headers = [
        
        {label: "Apellido", property: "lastName"}, 
        {label: "N° de cuenta", property: "number"},
        {label: "Estado", property: "activity"}
       
      ]


    let usuarios = [
        {lastName: "Bassedas", number: 1, activity: 'Activo'},
        {lastName: "Garayalde",  number: 2, activity: 'Activo'},
        {lastName: "Rios", number: 3, activity: 'Activo'},
        {lastName: "Messi",  number: 4, activity: 'Activo'},
        {lastName: "Federer",  number: 5, activity: 'Activo'}
    ]
    
  return (
    <div>
      <Helmet>
        <title>Cuentas</title>
        <meta
          name="description"
          content="Pantalla de Usuarios"
        />
      </Helmet>
      <H1>
          Cuentas
      </H1>

      <Tabla header = {headers} rows = {usuarios}/>

    </div>
  );
}
