// Importar el modelo
import Citas from "../models/Citas.js";


// Metodos CRUD
// Crear una funcion para agregar citas

export const agregarCitas = async (req, res)=> {
    try {
        await Citas.create(req.body)
        res.json({msg: 'Cita creada con exito'})

    } catch (error) {
        res.json({msg: error.message});
    }
};

// Mostrar todas las citas

export const getAllCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll();
        res.json(citas);

    } catch (error) {
        res.json({ msg: error.message})
    }
};

// Mostrar una cita

export const getCita = async (req, res) => {
    try {
        const cita = await Citas.findAll({
            where:{id: req.params.id}
        });
        res.json(cita[0]);

    } catch (error) {
        res.json({ msg: error.message });
    }
};

// Modificar Cita

export const modificarCita = async (req, res) => {
    try {
        await Citas.update(req.body, {
            where:{id: req.params.id}
        })
        res.json({ msg: 'Se modifico la cita'})

    } catch (error) {
        res.json({ msg: error.message });
    }
};

// Eliminar una Cita

export const eliminarCita = async (req, res) => {
    try {
        await Citas.destroy({
            where: {id: req.params.id}
        })
        res.json({ msg: 'Se elimino la cita correctamente'})
        
    } catch (error) {
        res.json({ msg: error.message});
    }
}