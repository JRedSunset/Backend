import db from '../db.js';

const AvionService = {
    /**
     * Obtiene todos los aviones registrados
     * @returns {Promise}
     */
    getAll: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Avion';
            db.query(query, [], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Crea un nuevo avión
     * @param {string} modelo El modelo del avión
     * @param {number} asientos La capacidad del avión
     * @param {number} numerocolumnas El número de columnas de asientos
     * @param {number} numerofilas El número de filas de asientos
     * @returns {Promise}
     */
    create: (modelo, asientos, numerocolumnas, numerofilas) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO Avion (modelo, asientos, numerocolumnas, numerofilas) VALUES (?, ?, ?, ?)';
            db.query(query, [modelo, asientos, numerocolumnas, numerofilas], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Obtiene un avión específico por su código
     * @param {number} codeAvion El código del avión
     * @returns {Promise}
     */
    getByCode: (codeAvion) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Avion WHERE codeAvion = ?';
            db.query(query, [codeAvion], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Actualiza un avión existente
     * @param {number} codeAvion El código del avión a actualizar
     * @param {string} modelo El nuevo modelo del avión
     * @param {number} asientos La nueva capacidad del avión
     * @param {number} numerocolumnas El nuevo número de columnas de asientos
     * @param {number} numerofilas El nuevo número de filas de asientos
     * @returns {Promise}
     */
    update: (codeAvion, modelo, asientos, numerocolumnas, numerofilas) => {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE Avion SET modelo = ?, asientos = ?, numerocolumnas = ?, numerofilas = ? WHERE codeAvion = ?';
            db.query(query, [modelo, asientos, numerocolumnas, numerofilas, codeAvion], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Elimina un avión por su código
     * @param {number} codeAvion El código del avión a eliminar
     * @returns {Promise}
     */
    delete: (codeAvion) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM Avion WHERE codeAvion = ?';
            db.query(query, [codeAvion], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }
};

export default AvionService;
