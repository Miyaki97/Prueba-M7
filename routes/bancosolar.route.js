import { Router } from 'express';
import { bancoSolarController } from '../controllers/bancosolar.controller.js';



const router = Router()



router.get('/', bancoSolarController.bancoUsuarios)

router.get('/:id', bancoSolarController.unicoUsuario)

router.post('/', bancoSolarController.registrarUsuario)

router.put('/?:id', bancoSolarController.actualizarUsuario)

router.delete('/:id', bancoSolarController.eliminarUsuario)



export default router; 