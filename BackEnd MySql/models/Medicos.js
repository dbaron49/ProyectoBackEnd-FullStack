import BD from '../config/db.js';
import { DataTypes } from 'sequelize';

const Medicos = BD.define('medicos', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    especialidad: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },

    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Medicos;