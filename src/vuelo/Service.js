import db from '../db.js';

const VueloService = {
    /**
     * Obtiene todos los vuelos registrados
     * @returns {Promise}
     */
    getAll: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Vuelo';
            db.query(query, [], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Crea un nuevo vuelo
     * @param {string} codigoruta El código de la ruta
     * @param {string} estado El estado del vuelo
     * @param {number} codeAvion El código del avión
     * @param {number} asientosrestante El número de asientos restantes
     * @param {Date} fechasalida La fecha de salida
     * @param {Date} fechallegada La fecha de llegada
     * @returns {Promise}
     */
    create: (codigoruta, estado, codeAvion, asientosrestante, fechasalida, fechallegada) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO Vuelo (codigoruta, estado, codeAvion, asientosrestante, fechasalida, fechallegada) VALUES (?, ?, ?, ?, ?, ?)';
            db.query(query, [codigoruta, estado, codeAvion, asientosrestante, fechasalida, fechallegada], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Obtiene un vuelo específico por su código
     * @param {number} codevuelo El código del vuelo
     * @returns {Promise}
     */
    getByCode: (codevuelo) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Vuelo WHERE codevuelo = ?';
            db.query(query, [codevuelo], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Actualiza un vuelo existente
     * @param {number} codevuelo El código del vuelo a actualizar
     * @param {string} codigoruta El nuevo código de la ruta
     * @param {string} estado El nuevo estado del vuelo
     * @param {number} codeAvion El nuevo código del avión
     * @param {number} asientosrestante El nuevo número de asientos restantes
     * @param {Date} fechasalida La nueva fecha de salida
     * @param {Date} fechallegada La nueva fecha de llegada
     * @returns {Promise}
     */
    update: (codevuelo, codigoruta, estado, codeAvion, asientosrestante, fechasalida, fechallegada) => {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE Vuelo SET codigoruta = ?, estado = ?, codeAvion = ?, asientosrestante = ?, fechasalida = ?, fechallegada = ? WHERE codevuelo = ?';
            db.query(query, [codigoruta, estado, codeAvion, asientosrestante, fechasalida, fechallegada, codevuelo], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Elimina un vuelo por su código
     * @param {number} codevuelo El código del vuelo a eliminar
     * @returns {Promise}
     */
    delete: (codevuelo) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM Vuelo WHERE codevuelo = ?';
            db.query(query, [codevuelo], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }
};

export default VueloService;
