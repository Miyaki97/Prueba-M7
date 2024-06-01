import { pool } from '../database/connection.js'

const bancoUsuarios = async () => {
    const { rows } = await pool.query("SELECT * FROM usuarios LIMIT 10")
    return rows
}

const encontrarId = async (id) => {
    const query = {
        text: "SELECT * FROM USUARIOS WHERE id = $1",
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const ingresar = async ({nombre, balance}) => {
    const query = {
        text: "INSERT INTO usuarios VALUES ($1,$2) RETURNING * ",
        values: [nombre,balance],
    }
    const { rows } = await pool.query(query)
    return rows[0]
}


const actualizar = async (usuarios) => {
    try {
        const query = {
            text: "UPDATE usuarios SET NOMBRE = $1, BALANCE = $2 WHERE ID = $3 RETURNING *",
            values: [usuarios.nombre, usuarios.balance, usuarios.id]
        };
        
        const { rows } = await pool.query(query);
        return rows[0];
    } catch (error) {
        console.error('Error executing SQL query:', error);
        throw error; 
    }
}

const eliminar = async (id) => {

    const query = {
        text: "DELETE FROM USUARIOS WHERE ID =$1 RETURNING *",
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows

}




export const bancoSolarModel = {
    bancoUsuarios,
    encontrarId,
    ingresar,
    actualizar,
    eliminar,

}