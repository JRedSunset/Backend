import db from '../db.js';

const Service = {
    /**
     * Recibe todos los registros de horario 
     * @param {number} parcial_id El parcial a realizar el filtro de reportes
     * @returns {Promise}
     */
    getAll: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Ubicacion';
            db.query(query, [], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    create: (codigoAeropuerto, ciudad, Pais) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO Ubicacion(codigoAeropuerto, ciudad, Pais) VALUES(?,?,?)';
            db.query(query, [codigoAeropuerto, ciudad, Pais], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    getByCode: (codigoAeropuerto) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Ubicacion WHERE codigoAeropuerto = ?';
            db.query(query, [codigoAeropuerto], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    update: (codigoAeropuerto, ciudad, Pais) => {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE Ubicacion SET ciudad = ?, Pais = ? WHERE codigoAeropuerto = ?';
            db.query(query, [ciudad, Pais, codigoAeropuerto], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    delete: (codigoAeropuerto) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM Ubicacion WHERE codigoAeropuerto = ?';
            db.query(query, [codigoAeropuerto], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }
};

export default Service;


   
