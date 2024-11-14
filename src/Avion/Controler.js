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

    createAvion: async (req, res) => {
        try {
            const results = await Service.getAll();
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    createAvion: async (req, res) => {
        const { codeAvion, modelo,asientos,idclase } = req.body;
        try {
            const results = await Service.create(codeAvion, modelo,asientos,idclase);
            res.status(201).json({ id: results.insertId, codeAvion, modelo,asientos,idclase });
        } catch (error) {
            console.error("Error creating class:", error);
            res.status(500).json({ error: error.message });
        }
    },
};

export default Controller;
