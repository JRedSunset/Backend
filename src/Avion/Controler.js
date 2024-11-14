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
};

export default Controller;
