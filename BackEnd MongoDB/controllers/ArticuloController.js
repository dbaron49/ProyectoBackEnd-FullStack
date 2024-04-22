const Articulo = require('../models/Articulo');

exports.agregarArticulos = async(req, res) => {

    try {
        let articulos = new Articulo(req.body)
        await articulos.save();
        res.send(articulos);

    } catch (err) {
        console.log(err)
        res.status(500).send('Hubo un error al agregar un articulo')
    }
}

exports.obtenerArticulos = async(req, res) => {
    try {
        let articulos = await Articulo.find();
        res.json(articulos);

    } catch (err) {
        console.log(err)
        res.status(500).send('Ocurrio un error al mostrar los articulos')
    }
}


exports.mostrarUnArticulo = async(req, res) => {
    try {
        let articulos = await Articulo.findById(req.params.id); 
        if(!articulos) {
            res.status(404).json({ msg: 'No se encuentra el articulo con ese Id'}); 
        }
        res.send(articulos);

    } catch (err) {
        console.log(err)
        res.status(500).send('Hubo un error al buscar un articulo en la web')
    }
}

exports.eliminarArticulos = async (req, res) => {
    try {
        let articulos = await Articulo.findById(req.params.id);
        if(!articulos) {
            res.status(404).json({msg: 'El articulo no existe'});
            return
        }
        await Articulo.findOneAndDelete({_id:req.params.id}); 
        res.json({msg: ' El articulo fue eliminado'});

    } catch (err) {
        console.log(err)
        res.status(500).send('Hubo un error al eliminar articulos en la base de datos')
    }
}

exports.modificarArticulos = async (req, res) => {
    try {
        let articulos = await Articulo.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!articulos) {
            return res.status(404).send('Articulo no encontrado')
        }
        res.json(articulos)
    } catch (err) {
        console.log(err);
        res.status(500).send('Hubo un error al modificar el articulo')
    }
}

exports.actualizarArticulos = async (req, res) => {
    try {
        const {nombre, seccion, cantidad, precio} = req.body
        let articulos = await Articulo.findById(req.params.id);

        if(!articulos) {
            res.status(404).json({msg: 'El articulo no existe'});
            return
        }
            articulos.nombre = nombre;
            articulos.seccion = seccion;
            articulos.cantidad = cantidad;
            articulos.precio = precio;

            articulos = await Articulo.findOneAndUpdate({_id: req.params.id}, articulos,{new: true});
            res.json(articulos);

    } catch (err) {
        console.log(err)
        res.status(500).send('Hubo un error al actualizar el articulo');
    }
}
