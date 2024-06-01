import { Transfer } from "../models/transferencia.model.js"

const transferAll = async (req, res) => {
    const transfers = await Transfer.findAll()
    return res.json(transfers)
}

const transferMont = async (req, res) => {
    try {
        const { emisor, receptor, valor } = req.body;
        const fecha = new Date(); 


        const response = await Transfer.create(emisor, receptor, valor, fecha);

        if (!response.ok) {
 
            return res.status(500).json({ message: "Error al crear la transferencia", error: response });
        }


        return res.json(response);
    } catch (error) {
        console.error("Error al crear la transferencia:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const transferencia = {
transferAll,
transferMont,
}