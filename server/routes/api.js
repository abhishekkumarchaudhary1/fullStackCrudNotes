import express from "express"
import { createNote, testNote } from "../controllers/NoteController.js";

const router = express.Router();

router.post('/notes', createNote);
router.get('/', testNote);

export default router;
