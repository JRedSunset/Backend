import db from '../db.js';

const ReservacionService = {
    /**
     * Obtiene todas las reservaciones registradas
     * @returns {Promise}
     */
    getAll: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Reservacion';
            db.query(query, [], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Crea una nueva reservación
     * @param {number} codevuelo El código del vuelo
     * @param {string} pasaporte El número de pasaporte del pasajero
     * @param {string} nombre El nombre del pasajero
     * @param {string} apellido El apellido del pasajero
     * @param {string} telefono El número de teléfono del pasajero
     * @param {string} correo El correo electrónico del pasajero
     * @param {number} precio El precio de la reservación
     * @param {boolean} genero El género del pasajero (true para hombre, false para mujer)
     * @param {boolean} estado El estado de la reservación (true para aprobado, false para no aprobado)
     * @returns {Promise}
     */
    create: (codevuelo, pasaporte, nombre, apellido, telefono, correo, precio, genero, estado) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO Reservacion (codevuelo, pasaporte, nombre, apellido, telefono, correo, precio, genero, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
            db.query(query, [codevuelo, pasaporte, nombre, apellido, telefono, correo, precio, genero, estado], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Crea un nuevo pasajero
     * @param {string} nombre El nombre del pasajero
     * @param {string} apellido El apellido del pasajero
     * @param {string} pasaporte El número de pasaporte del pasajero
     * @param {string} correo El correo electrónico del pasajero
     * @param {string} telefono El número de teléfono del pasajero
     * @returns {Promise}
     */
    createPasajero: (nombre, apellido, pasaporte, correo, telefono) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO Reservacion (nombre, apellido, pasaporte, correo, telefono) VALUES (?, ?, ?, ?, ?)';
            db.query(query, [nombre, apellido, pasaporte, correo, telefono], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    
    /**
     * Obtiene una reservación específica por su código
     * @param {number} codereservacion El código de la reservación
     * @returns {Promise}
     */
    getByCode: (codereservacion) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Reservacion WHERE codereservacion = ?';
            db.query(query, [codereservacion], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Actualiza una reservación existente
     * @param {number} codereservacion El código de la reservación a actualizar
     * @param {number} codevuelo El código del vuelo
     * @param {string} pasaporte El número de pasaporte del pasajero
     * @param {string} nombre El nombre del pasajero
     * @param {string} apellido El apellido del pasajero
     * @param {string} telefono El número de teléfono del pasajero
     * @param {string} correo El correo electrónico del pasajero
     * @param {number} precio El precio de la reservación
     * @param {boolean} genero El género del pasajero
     * @param {boolean} estado El estado de la reservación
     * @returns {Promise}
     */
    update: (codereservacion, codevuelo, pasaporte, nombre, apellido, telefono, correo, precio, genero, estado) => {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE Reservacion SET codevuelo = ?, pasaporte = ?, nombre = ?, apellido = ?, telefono = ?, correo = ?, precio = ?, genero = ?, estado = ? WHERE codereservacion = ?';
            db.query(query, [codevuelo, pasaporte, nombre, apellido, telefono, correo, precio, genero, estado, codereservacion], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    /**
     * Elimina una reservación por su código
     * @param {number} codereservacion El código de la reservación a eliminar
     * @returns {Promise}
     */
    delete: (codereservacion) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM Reservacion WHERE codereservacion = ?';
            db.query(query, [codereservacion], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }
};

export default ReservacionService;
