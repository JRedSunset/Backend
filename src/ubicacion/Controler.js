import Service from './Service.js';

const Controller = {
    getAll: async (req, res) => {
        try {
            const results = await Service.getAll();
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    createUbicacion: async (req, res) => {
        const { codigoAeropuerto, ciudad, Pais } = req.body;
        try {
            const results = await Service.create(codigoAeropuerto, ciudad, Pais);
            res.status(201).json({ id: results.insertId, codigoAeropuerto, ciudad, Pais });
        } catch (error) {
            console.error("Error creating ubication:", error);
            res.status(500).json({ error: error.message });
        }
    },

    getByCode: async (req, res) => {
        const codigoAeropuerto = req.params.id;
        try {
            const results = await Service.getByCode(codigoAeropuerto);
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateUbicacion: async (req, res) => {
        const codigoAeropuerto = req.params.id;
        const { ciudad, Pais } = req.body;
        try {
            await Service.update(codigoAeropuerto, ciudad, Pais);
            res.json({ message: 'Ubicación actualizada correctamente' });
        } catch (err) {
            console.error("Error updating ubication:", err);
            res.status(500).json({ error: err.message });
        }
    },

    deleteUbicacion: async (req, res) => {
        const codigoAeropuerto = req.params.id;
        try {
            await Service.delete(codigoAeropuerto);
            res.json({ message: 'Ubicación eliminada correctamente' });
        } catch (err) {
            console.error("Error deleting ubication:", err);
            res.status(500).json({ error: err.message });
        }
    }
};

export default Controller;
