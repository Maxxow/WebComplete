const SaludarRoutes = require("./routes/greet.routes.js")
// const DespedirRoutes = require("./routes/greet.routes.js")
const express = require("express")
const cors = require("cors")
const PORT = 3000;


const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//*Rutas
app.use("/saludar",SaludarRoutes);
//app.use("/bye", SaludarRoutes);

app.get("/", (req,res)=>{
    res.json({message: "Hola sin S.O.L.I.D."})
});

app.listen(PORT, ()=> console.log(`server running in http://localhost:${PORT}`));
