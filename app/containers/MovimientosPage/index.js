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
        {label: "Ganancias", property: "ganancias"},
        {label: "Pérdidas", property: "perdidas"}
      ]


    let usuarios = [
        {lastName: "Bassedas", number: 1, ganancias: '$10000', perdidas: '$5000'},
        {lastName: "Garayalde", number: 2, ganancias: '$10000', perdidas: '$5000'},
        {lastName: "Rios", number: 3, ganancias: '$10000', perdidas: '$5000'},
        {lastName: "Messi", number: 4, ganancias: '$10000', perdidas: '$5000'},
        {lastName: "Federer", number: 5, ganancias: '$10000', perdidas: '$5000'}
    ]
    
  return (
    <div>
      <Helmet>
        <title>Cuentas</title>
        <meta
          name="description"
          content="Pantalla de Movimientos"
        />
      </Helmet>
      <H1>
          Movimientos
      </H1>

      <Tabla header = {headers} rows = {usuarios}/>

    </div>
  );
}
