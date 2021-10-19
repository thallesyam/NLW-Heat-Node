import { Router } from 'express'

import { ensureAuthenticated } from './middleware/ensureAuthenticated'

import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handler)
router.post('/messages', ensureAuthenticated ,new CreateMessageController().handler)

export { router }