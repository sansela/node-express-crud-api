import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', userRoutes);
// app.get('/', (req, res) => res.send('GET request to the root /'));
// app.post('/', (req, res) => res.send('POST response for the root /'));

app.listen(PORT, () => console.log(`server started running localhost:${PORT}`));