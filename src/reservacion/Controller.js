import ReservacionService from './Service.js';

const ReservacionController = {
    getAll: async (req, res) => {
        try {
            const results = await ReservacionService.getAll();
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    createReservacion: async (req, res) => {
        const { codevuelo, pasaporte, nombre, apellido, telefono, correo, precio, genero, estado } = req.body;
        try {
            const results = await ReservacionService.create(codevuelo, pasaporte, nombre, apellido, telefono, correo, precio, genero, estado);
            res.status(201).json({ id: results.insertId, codevuelo, pasaporte, nombre, apellido, telefono, correo, precio, genero, estado });
        } catch (error) {
            console.error("Error creating reservation:", error);
            res.status(500).json({ error: error.message });
        }
    },

    getByCode: async (req, res) => {
        const codereservacion = req.params.id;
        try {
            const results = await ReservacionService.getByCode(codereservacion);
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    createPasajero: async (req, res) => {
        const { nombre, apellido, pasaporte, correo, telefono } = req.body;
        try {
            const results = await ReservacionService.createPasajero(nombre, apellido, pasaporte, correo, telefono);
            res.status(201).json({ message: 'Pasajero creado exitosamente', id: results.insertId });
        } catch (err) {
            console.error('Error al crear el pasajero:', err);
            res.status(500).json({ error: err.message });
        }
    },

    updateReservacion: async (req, res) => {
        const codereservacion = req.params.id;
        const { codevuelo, pasaporte, nombre, apellido, telefono, correo, precio, genero, estado } = req.body;
        try {
            await ReservacionService.update(codereservacion, codevuelo, pasaporte, nombre, apellido, telefono, correo, precio, genero, estado);
            res.json({ message: 'Reservación actualizada correctamente' });
        } catch (err) {
            console.error("Error updating reservation:", err);
            res.status(500).json({ error: err.message });
        }
    },

    deleteReservacion: async (req, res) => {
        const codereservacion = req.params.id;
        try {
            await ReservacionService.delete(codereservacion);
            res.json({ message: 'Reservación eliminada correctamente' });
        } catch (err) {
            console.error("Error deleting reservation:", err);
            res.status(500).json({ error: err.message });
        }
    }
};

export default ReservacionController;
