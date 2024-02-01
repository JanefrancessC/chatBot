import { Router } from 'express';
import { chatbot } from './controllers/chatbot.js';

const router = Router()

router.get('/', (req, res) => {
    res.json({message: "Welcome to Chat Bot!"})
})

router.get('/messages', chatbot)

export default router;