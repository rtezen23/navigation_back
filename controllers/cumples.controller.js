const { Cumple } = require('../models/cumple.model');

const getAllCumples = async (req, res, next) => {

    const cumples = await Cumple.findAll();

    res.status(200).json({
        status: 'success',
        cumples,
    });

};  

module.exports = {
    getAllCumples
};