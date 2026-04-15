import express from 'express';
import { createContact, getContacts } from '../controllers/contact.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post("/", createContact);
router.get("/", authMiddleware, getContacts);

export default router;