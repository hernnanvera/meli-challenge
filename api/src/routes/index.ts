import {Router, Response, Request} from 'express';
import ItemController from '../controllers/item';

const router = Router()

const itemController = new ItemController()


router.get ('/', (_, response) => {
    response.send('this is the Meli API home')
})

router.get('/items', (request: Request, response: Response) => {
    itemController.getItemsList(request, response)
})

router.get('/items/:id', (request: Request, response: Response) => {
    itemController.getItemById(request, response)
})

export default router
