const { db, DataTypes } = require('../utils/database.util');

const Buzon = db.define('buzon', {
  idbuzon: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_recepcion: {
    type: DataTypes.DATE,
    allowNull: false
  },
},{
  freezeTableName: true
});

module.exports = { Buzon };