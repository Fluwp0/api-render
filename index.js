

const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 3000;



const { getcarModels } = require("./controllers/car.controllers");
const { getcarModelsById } = require("./controllers/car.controllers");

app.use(cors());

app.get("/", getcarModels)

app.get("/", )

app.get("/:id",getcarModelsById)




app.listen( puerto, ()=> {
    console.log(`Server listo ${puerto}`);

})
