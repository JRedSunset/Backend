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


INSERT INTO ubicacion(codigoAeropuerto, ciudad, Pais) VALUES
('EZE', 'Buenos Aires', 'Argentina'),
('AEP', 'Buenos Aires', 'Argentina'),
('COR', 'Córdoba', 'Argentina'),
('SCL', 'Santiago', 'Chile'),
('BOG', 'Bogotá', 'Colombia'),
('MDE', 'Medellín', 'Colombia'),
('CTG', 'Cartagena', 'Colombia'),
('LIM', 'Lima', 'Perú'),
('CUZ', 'Cusco', 'Perú'),
('MEX', 'Ciudad de México', 'México'),
('CUN', 'Cancún', 'México'),
('GDL', 'Guadalajara', 'México'),
('PTY', 'Ciudad de Panamá', 'Panamá'),
('GRU', 'São Paulo', 'Brasil'),
('GIG', 'Río de Janeiro', 'Brasil'),
('BSB', 'Brasilia', 'Brasil'),
('UIO', 'Quito', 'Ecuador'),
('GYE', 'Guayaquil', 'Ecuador'),
('SJO', 'San José', 'Costa Rica'),
('SAL', 'San Salvador', 'El Salvador'),
('GUA', 'Ciudad de Guatemala', 'Guatemala'),
('MGA', 'Managua', 'Nicaragua'),
('SAP', 'San Pedro Sula', 'Honduras'),
('ASU', 'Asunción', 'Paraguay'),
('MVD', 'Montevideo', 'Uruguay'),
('SJU', 'San Juan', 'Puerto Rico'),
('POS', 'Puerto España', 'Trinidad y Tobago'),
('KIN', 'Kingston', 'Jamaica'),
('SDQ', 'Santo Domingo', 'República Dominicana'),
('PUJ', 'Punta Cana', 'República Dominicana'),
('HAV', 'La Habana', 'Cuba'),
('NAS', 'Nassau', 'Bahamas');
