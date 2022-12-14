const { Buzon } = require('../models/buzon.model');

const createBuzon = async (req, res, next) => {
    const {
        tipo,
        nombre,
        dni,
        cargo,
        descripcion,
    } = req.body;

    const newbuzon = await Buzon.create({
        tipo,
        nombre,
        dni,
        cargo,
        descripcion,
        fecha_recepcion: new Date(),
    });

    res.status(201).json({
        status: 'success',
        newbuzon,
    });
};

const getAllBuzon = async (req, res, next) => {

    const buzons = await Buzon.findAll();

    res.status(200).json({
        status: 'success',
        buzons,
    });

};  

module.exports = {
    createBuzon,
    getAllBuzon
};