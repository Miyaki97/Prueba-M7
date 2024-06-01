import { Router } from 'express';
import { transferencia } from '../controllers/transferencia.controller.js';


const router = Router()


router.get('/', transferencia.transferAll)

router.post('/', transferencia.transferMont)



export default router; 