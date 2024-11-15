import AvionService from './Service.js';

const AvionController = {
    getAll: async (req, res) => {
        try {
            const results = await AvionService.getAll();
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    createAvion: async (req, res) => {
        const { modelo, asientos, numerocolumnas, numerofilas } = req.body;
        try {
            const results = await AvionService.create(modelo, asientos, numerocolumnas, numerofilas);
            res.status(201).json({ id: results.insertId, modelo, asientos, numerocolumnas, numerofilas });
        } catch (error) {
            console.error("Error creating plane:", error);
            res.status(500).json({ error: error.message });
        }
    },

    getByCode: async (req, res) => {
        const codeAvion = req.params.id;
        try {
            const results = await AvionService.getByCode(codeAvion);
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateAvion: async (req, res) => {
        const codeAvion = req.params.id;
        const { modelo, asientos, numerocolumnas, numerofilas } = req.body;
        try {
            await AvionService.update(codeAvion, modelo, asientos, numerocolumnas, numerofilas);
            res.json({ message: 'Avión actualizado correctamente' });
        } catch (err) {
            console.error("Error updating plane:", err);
            res.status(500).json({ error: err.message });
        }
    },

    deleteAvion: async (req, res) => {
        const codeAvion = req.params.id;
        try {
            await AvionService.delete(codeAvion);
            res.json({ message: 'Avión eliminado correctamente' });
        } catch (err) {
            console.error("Error deleting plane:", err);
            res.status(500).json({ error: err.message });
        }
    }
};

export default AvionController;
