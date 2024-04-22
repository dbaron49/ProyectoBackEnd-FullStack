import { where } from "sequelize";
import Medicos from "../models/Medicos.js";

// Agregar Medicos

export const agregarMedicos = async (req, res) => {
    try {
        await Medicos.create(req.body)
        res.json({ msg: 'Medico Creado Exitosamente'})

    } catch (error) {
        res.json({ msg: error.message});
    }
};

//Mostrar Medicos

export const mostrarMedicos = async (req, res) => {
    try {
        const medicos = await Medicos.findAll();
        res.json(medicos);

    } catch (error) {
        res.json({ msg: error.message});
    }
};

// Mostrar un Medico

export const mostrarUnMedico = async (req, res) => {
    try {
        const medicos = await Medicos.findAll({
            where:{id: req.params.id}
        });
        res.json(medicos);

    } catch (error) {
        res.json({ msg: error.message});
    }
};

// Modificar un Medico

export const modificarMedico = async (req, res) => {
    try {
        await Medicos.update(req.body, {
            where:{id:req.params.id}
        });
        res.json({ msg: 'El Medico Se Ha Actualizado Exitosamente'})

    } catch (error) {
        res.json({ msg: error.message});
    }
};

// Eliminar Medico

export const eliminarMedico = async (req, res) => {
    try {
        await Medicos.destroy({
            where:{id: req.params.id}
        });
        res.json({ msg: 'El Medico Ha Sido Eliminado Exitosamente'})
    } catch (error) {
        res.json({ msg: error,message});
    }
};