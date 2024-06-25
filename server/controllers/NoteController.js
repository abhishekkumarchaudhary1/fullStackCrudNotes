import mongoose from "mongoose";
import { Note } from "../models/Note.models.js";

const createNote = async (req, res) => {
    try {
        const { title, description } = req.body; // fixed typo here
        const note = new Note({
            title,
            description,
            userId: req.user._id // assuming userId is the field name in the Note model
        });
        await note.save();
        res.json({ message: "Note Created Successfully" });
    } catch (error) {
        console.log("Error while creating note:: ", error);
        res.status(500).json({ error: "Error while creating note" }); // added response for errors
    }
};

const testNote = async (req, res) => {
    res.json({ message: 'test saskasphul' }); // fixed response format
}

export { testNote, createNote };
