import db from '../db.js';

const Service = {
    /**
     * Obtiene todas las rutas registradas
     * @returns {Promise}
     */
    getAll: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Ruta';
            db.query(query, [], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Crea una nueva ruta
     * @param {string} codigoruta El código de la ruta
     * @param {string} codigosalida El código de la ubicación de salida
     * @param {string} codigodestino El código de la ubicación de destino
     * @returns {Promise}
     */
    create: (codigoruta, codigosalida, codigodestino) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO Ruta(codigoruta, codigosalida, codigodestino) VALUES(?,?,?)';
            db.query(query, [codigoruta, codigosalida, codigodestino], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Obtiene una ruta específica por su código
     * @param {string} codigoruta El código de la ruta
     * @returns {Promise}
     */
    getByCode: (codigoruta) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Ruta WHERE codigoruta = ?';
            db.query(query, [codigoruta], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Actualiza una ruta existente
     * @param {string} codigoruta El código de la ruta a actualizar
     * @param {string} codigosalida El nuevo código de la ubicación de salida
     * @param {string} codigodestino El nuevo código de la ubicación de destino
     * @returns {Promise}
     */
    update: (codigoruta, codigosalida, codigodestino) => {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE Ruta SET codigosalida = ?, codigodestino = ? WHERE codigoruta = ?';
            db.query(query, [codigosalida, codigodestino, codigoruta], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Elimina una ruta por su código
     * @param {string} codigoruta El código de la ruta a eliminar
     * @returns {Promise}
     */
    delete: (codigoruta) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM Ruta WHERE codigoruta = ?';
            db.query(query, [codigoruta], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }
};

export default Service;
