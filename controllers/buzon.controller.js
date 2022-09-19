const { Buzon } = require('../models/buzon.model');

const createbuzon = async (req, res, next) => {
    const {
        tipo,
        nombre,
        dni,
        cargo,
        descripcion
    } = req.body;

    const newbuzon = await Buzon.create({
        tipo,
        nombre,
        dni,
        cargo,
        descripcion
    });

    res.status(201).json({
        status: 'success',
        newbuzon,
    });
};

module.exports = {
    createbuzon,
};