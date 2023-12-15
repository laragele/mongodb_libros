//npm install express
//npm install mongoose
const express=require(`express`);
const app= express();
const port=3000;

app.use(express.json());

const librosRouter=require(`./libros`);
const errorHandler=require(`./errorHandler`);

app.use(`/libros`, librosRouter);

app.use(errorHandler);

app.listen(port,()=>{
    console.log("servidor iniciado en el puerto 3000")
})

//http://localhost:3000/libros