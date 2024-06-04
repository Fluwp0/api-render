

const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 3000;



const { getEquipos } = require("./controllers/equipos.controllers");
const { getEquiposById } = require("./controllers/equipos.controllers");

app.use(cors());

app.get("/", getEquipos)

app.get("/", )

app.get("/:id",getEquiposById)




app.listen( puerto, ()=> {
    console.log(`Server listo ${puerto}`);

})
