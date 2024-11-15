import VueloService from './Service.js';


const VueloController = {
    getAll: async (req, res) => {
        try {
            const results = await VueloService.getAll();
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    createVuelo: async (req, res) => {
        const { codigoruta, estado, codeAvion, asientosrestante, fechasalida, fechallegada } = req.body;
        try {
            const results = await VueloService.create(codigoruta, estado, codeAvion, asientosrestante, fechasalida, fechallegada);
            res.status(201).json({ id: results.insertId, codigoruta, estado, codeAvion, asientosrestante, fechasalida, fechallegada });
        } catch (error) {
            console.error("Error creating flight:", error);
            res.status(500).json({ error: error.message });
        }
    },

    getByCode: async (req, res) => {
        const codevuelo = req.params.id;
        try {
            const results = await VueloService.getByCode(codevuelo);
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateVuelo: async (req, res) => {
        const codevuelo = req.params.id;
        const { codigoruta, estado, codeAvion, asientosrestante, fechasalida, fechallegada } = req.body;
        try {
            await VueloService.update(codevuelo, codigoruta, estado, codeAvion, asientosrestante, fechasalida, fechallegada);
            res.json({ message: 'Vuelo actualizado correctamente' });
        } catch (err) {
            console.error("Error updating flight:", err);
            res.status(500).json({ error: err.message });
        }
    },

    deleteVuelo: async (req, res) => {
        const codevuelo = req.params.id;
        try {
            await VueloService.delete(codevuelo);
            res.json({ message: 'Vuelo eliminado correctamente' });
        } catch (err) {
            console.error("Error deleting flight:", err);
            res.status(500).json({ error: err.message });
        }
    }
};

export default VueloController;
