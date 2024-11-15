-- Crear la base de datos
CREATE DATABASE SistemaVuelos;

-- Usar la base de datos recién creada
USE SistemaVuelos;

create table ubicacion(
codigoAeropuerto varchar(15),
ciudad varchar(30),
Pais varchar(30),
primary key(codigoAeropuerto)
);

create table ruta (
codigoruta varchar(15),
codigosalida varchar(15), 
codigodestino varchar(15), 
foreign key(codigosalida) references ubicacion(codigoAeropuerto), -- se debe utilizar codigos diferentes de para salida y destino
foreign key(codigodestino) references ubicacion(codigoAeropuerto),
primary key(codigoruta)
);


create table avion(
codeAvion int auto_increment,
modelo varchar(14),
asientos int, -- capacidad
numerocolumnas tinyint,
numerofilas tinyint,
primary key(codeAvion)
);
 

-- se puede decir que vuelo es una hija de ruta ya que se especifica la ruta de ese vuelo que tambien es el codigo del vuelo
create table Vuelo(
codevuelo int auto_increment,
codigoruta varchar(15),
estado varchar(14), -- abordando, desabordando, mantenimiento, vuelo, cancelado, demorado, finalizado, inactivo, en espera.
codeAvion int, -- datos sobre los asientos
asientosrestante smallint,
fechasalida datetime,
fechallegada datetime,
foreign key(codeAvion) references avion(codeAvion),
foreign key(codigoruta) references ruta(codigoruta),
primary key(codevuelo)
);


-- tomar en cuenta que si se cancela la reservacion el asiento debe cambiarse a disponible
create table reservacion(
codereservacion int auto_increment,
codevuelo int,
pasaporte varchar(10),
nombre varchar(25),
apellido varchar(25),
telefono varchar(15), -- 504 9463-6395
correo varchar(30),
precio double,
genero boolean, -- true is MAN false is Women
estado boolean,  -- true aprobado -- false no aprobado  
foreign key(codevuelo) references vuelo(codevuelo),
primary key(codereservacion)
);


INSERT INTO ubicacion (codigoAeropuerto, ciudad, pais) VALUES
('PTY', 'Ciudad de Panamá', 'Panamá'),
('SAL', 'San Salvador', 'El Salvador'),
('SJO', 'San José', 'Costa Rica'),
('MEX', 'Ciudad de México', 'México'),
('LIM', 'Lima', 'Perú');

INSERT INTO ruta (codigoruta, codigosalida, codigodestino) VALUES
('RUTA001', 'SAL', 'PTY'),
('RUTA002', 'PTY', 'SJO'),
('RUTA003', 'SJO', 'MEX'),
('RUTA004', 'MEX', 'LIM'),
('RUTA005', 'LIM', 'SAL');

INSERT INTO avion (modelo, asientos, numerocolumnas, numerofilas) VALUES
('Boeing 737', 180, 6, 30),
('Airbus A320', 150, 6, 25),
('Boeing 747', 416, 10, 42),
('Embraer 190', 98, 4, 24),
('Boeing 777', 396, 10, 40);

INSERT INTO vuelo (codigoruta, estado, codeAvion, asientosrestante, fechasalida, fechallegada) VALUES
('RUTA001', 'abordando', 1, 180, '2024-12-01 08:00:00', '2024-12-01 12:00:00'),
('RUTA002', 'en espera', 2, 150, '2024-12-01 14:00:00', '2024-12-01 17:30:00'),
('RUTA003', 'mantenimiento', 3, 416, '2024-12-02 09:00:00', '2024-12-02 15:00:00'),
('RUTA004', 'vuelo', 4, 98, '2024-12-02 16:30:00', '2024-12-02 20:00:00'),
('RUTA005', 'demorado', 5, 396, '2024-12-03 07:00:00', '2024-12-03 13:00:00');

INSERT INTO reservacion (codevuelo, pasaporte, nombre, apellido, telefono, correo, precio, genero, estado) VALUES
(1, 'A12345678', 'Carlos', 'Ramírez', '503 1234-5678', 'carlos@example.com', 250.00, TRUE, TRUE),
(2, 'B87654321', 'Ana', 'López', '506 8765-4321', 'ana@example.com', 300.00, FALSE, TRUE),
(3, 'C13579246', 'Luis', 'Gómez', '507 1357-9246', 'luis@example.com', 400.00, TRUE, FALSE),
(4, 'D24681357', 'María', 'Pérez', '505 2468-1357', 'maria@example.com', 200.00, FALSE, TRUE),
(5, 'E19283746', 'José', 'Martínez', '504 1928-3746', 'jose@example.com', 150.00, TRUE, FALSE);
