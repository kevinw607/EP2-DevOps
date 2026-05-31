
const express = require('express');
const app = express();

const alumnos = [
 { nombre:'Juan Perez', nota:5.5 },
 { nombre:'Ana Gomez', nota:6.2 },
 { nombre:'Pedro Soto', nota:4.8 }
];

app.get('/alumnos',(req,res)=>res.json(alumnos));

app.get('/promedio',(req,res)=>{
 if(alumnos.length===0){
   return res.status(400).json({error:'No hay alumnos'});
 }
 const promedio = alumnos.reduce((a,b)=>a+b.nota,0)/alumnos.length;
 res.json({promedio_curso:promedio.toFixed(1)});
});

if(require.main===module){
 app.listen(3000,()=>console.log('Servidor iniciado'));
}

module.exports = app;
