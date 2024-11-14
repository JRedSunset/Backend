import db from '../db.js';

const Service = {
    

    /**
     * Recibe todos los registros de horario 
     * @param {number} parcial_id El parcial a realizar el filtro de reportes
     * @returns {Promise}
     */
    getAll: () => {
        return new Promise((resolve, reject) => {
            const query = 'select * from Avion';
            db.query(query, [], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    


   
};

export default Service;
