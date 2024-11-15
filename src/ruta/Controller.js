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

    createRuta: async (req, res) => {
        const { codigoruta, codigosalida, codigodestino } = req.body;
        try {
            const results = await Service.create(codigoruta, codigosalida, codigodestino);
            res.status(201).json({ id: results.insertId, codigoruta, codigosalida, codigodestino });
        } catch (error) {
            console.error("Error creating route:", error);
            res.status(500).json({ error: error.message });
        }
    },

    getByCode: async (req, res) => {
        const codigoruta = req.params.id;
        try {
            const results = await Service.getByCode(codigoruta);
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateRuta: async (req, res) => {
        const codigoruta = req.params.id;
        const { codigosalida, codigodestino } = req.body;
        try {
            await Service.update(codigoruta, codigosalida, codigodestino);
            res.json({ message: 'Ruta actualizada correctamente' });
        } catch (err) {
            console.error("Error updating route:", err);
            res.status(500).json({ error: err.message });
        }
    },

    deleteRuta: async (req, res) => {
        const codigoruta = req.params.id;
        try {
            await Service.delete(codigoruta);
            res.json({ message: 'Ruta eliminada correctamente' });
        } catch (err) {
            console.error("Error deleting route:", err);
            res.status(500).json({ error: err.message });
        }
    }
};

export default Controller;
