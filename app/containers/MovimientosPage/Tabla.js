import React from 'react';

export default function Tabla(props) {

console.log("tabla props", props)
  return (
    <div>
        
      <table style= {{width: "80%", marginBottom: '5%', marginTop: '5%', textAlign: 'left', border: '1px solid black'}}>
             <tr>
               {props.header.map(function(header){
                   return (<th>{header.label}</th>)
               })}
             </tr>
                {props.rows.map(function(row){
                 return (
                     <tr>
                          {props.header.map(function(header){
                   return (<td>{row[header.property]}</td>)
               })}
                     </tr>
                 )

             })}
             
      </table>
    </div>
  );
}