const { db, DataTypes } = require('../utils/database.util');

const Cumple = db.define('cumpleanos', {
  apellidos_y_nombres: {
    primaryKey: true,
    type: DataTypes.STRING,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.STRING,
    allowNull: false
  },
},{
  freezeTableName: true
});
Cumple.removeAttribute('id');
module.exports = { Cumple };