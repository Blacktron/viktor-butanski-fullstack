import express from 'express';

import * as constants from "/config/constants.js";
import notesRouter from './routes/notes.js'

const app = express();

app.use(express.json());
app.use('/api', notesRouter);

app.listen(constants.SERVER_PORT, () => {
    console.log(`Server is running on port ${constants.SERVER_PORT}`);
})