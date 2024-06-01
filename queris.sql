CREATE DATABASE banco_solar_db;
drop table if exists usuarios CASCADE;

CREATE TABLE usuarios (

  nombre VARCHAR(50),
  balance FLOAT CHECK (balance >= 0),
	id SERIAL PRIMARY KEY
);

CREATE TABLE transferencias (id SERIAL PRIMARY KEY, emisor INT, receptor
INT, monto FLOAT, fecha TIMESTAMP, FOREIGN KEY (emisor) REFERENCES
usuarios(id), FOREIGN KEY (receptor) REFERENCES usuarios(id));

select * from usuarios;

UPDATE usuarios SET NOMBRE = 'hola', BALANCE = 2 WHERE ID = 1;
select * from usuarios;

DELETE FROM usuarios

WHERE id IN (
    SELECT id
    FROM usuarios
    ORDER BY id
    LIMIT 20
);


ALTER SEQUENCE usuarios_id_seq RESTART WITH 1;