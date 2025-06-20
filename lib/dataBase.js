import getDB from "./connectDB";

export const createTable = async () => {
    try {

        const db = await getDB()
        await db.execAsync(`
      CREATE TABLE IF NOT EXISTS inote (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        Title TEXT NOT NULL,
        NoteContent TEXT NOT NULL,
        bgColour TEXT NOT NULL, 
        date TEXT NOT NULL
      )
    `);
    } catch (e) {
        console.error('Create table error:', e);
    }
};

export const saveNote = async (Title, NoteContent, bgColour, date) => {
    try {

        console.log(Title, NoteContent, bgColour, date)

        if (!Title.trim() && !NoteContent.trim()) return;

        const db = await getDB()
        const saved = await db.runAsync('INSERT INTO inote (Title, NoteContent, bgColour, date) VALUES (?, ?, ?, ?)',
            [Title, NoteContent, bgColour, date]
        );

        // console.log('inserted', saved)
    } catch (e) {
        console.error('Save note error:', e);
    }
};

export const getAllNotes = async () => {
    try {

        const db = await getDB()

        const notes = await db.getAllAsync('SELECT * FROM inote')

        // console.log(notes)
       
        return notes

    } catch (error) {
        console.error('get all notes error:', error);
    }
}
