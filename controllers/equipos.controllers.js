const { request, response} = require("express")
const { equipos } = require("../Equipos")


const getEquipos = (req , res) => {
    return res.json({
            ok:true,
            statusCode:200,
            equipos
    })
}

const getEquiposById = (req = request, res = response) => {

    let id = parseInt(req.params.id);

    let equipoABuscar = "";

    equipoABuscar = equipos.find(( equipo )=> {
        return equipo.id === id;
    });


    if(equipoABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            equipoABuscar
        });
        
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No gay equipos con ese id"
        });
    }

}

module.exports = {
    getEquipos,
    getEquiposById
}