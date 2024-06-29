const { request, response} = require("express")
const { carModels } = require("../carModels")


const getcarModels = (req , res) => {
    return res.json({
            ok:true,
            statusCode:200,
            carModels
    })
}

const getcarModelsById = (req = request, res = response) => {

    let id = parseInt(req.params.id);

    let carModelsABuscar = "";

    carModelsABuscar = carModels.find(( carModels )=> {
        return carModels.id === id;
    });


    if(carModelsABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            carModelsABuscar
        });
        
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay autos con ese id"
        });
    }

}

module.exports = {
    getcarModels,
    getcarModelsById
}