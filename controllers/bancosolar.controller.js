import { bancoSolarModel } from "../models/bancosolar.model.js"


const bancoUsuarios = async (req, res ) => {
try{
const usuarios = await bancoSolarModel.bancoUsuarios()
return res.json(usuarios)
}catch (error){
    console.log(error)
    return res.status(500).json( {ok:false})
}
}

const unicoUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await bancoSolarModel.encontrarId(id)
        if(!usuario) return res.status(404).json( {ok: false, msg: "no se encontró usuario"})
        return res.json(usuario)

    }catch(error){
        console.log(error)
        return res.status(500).json({ ok:false})
    }
    
}

const registrarUsuario = async (req, res ) => {
    try {
        const { id,nombre, balance } = req.body

        const nuevoUsuario = { id,nombre, balance }
        const usuarioLista = await bancoSolarModel.ingresar(nuevoUsuario)
        return res.status(201).json(usuarioLista)
    }catch (error) {
        console.log(error)
        if (error.code === '23505') {
            return res.status(400).json({ ok: false, msg: "El usuario ya está registrado" })
        }
        if (error.code === '23502') {
            return res.status(400).json({ ok: false, msg: "Debe ingresar el rut" })
        }

        return res.status(500).json( { ok: false})
    }
}

const actualizarUsuario = async (req, res ) => {
try {
        const { nombre, balance} = req.body
        const {id}= req.params
        const actualizarUsuarios = { nombre,balance,id}
        const usuarioActualizado = await bancoSolarModel.actualizar(actualizarUsuarios)

        if (!usuarioActualizado) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json(usuarioActualizado)

    }catch (error){
        return res.status(500).json( {ok: true})

}
}


const eliminarUsuario = async (req, res) => {
    try{
        const { id } = req.params
        const usuarioEliminado = await bancoSolarModel.eliminar(id)
        return res.json(usuarioEliminado)

    }catch (error) {
        return res.status(500).json( {ok: false})

    }

}






export const bancoSolarController = {
    bancoUsuarios,
    unicoUsuario,
    registrarUsuario,
    actualizarUsuario,
    eliminarUsuario    
}