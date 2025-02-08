const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

let lembretes = [];

app.get('/lembretes', (req, res) => {
    res.json(lembretes);
});

app.post('/lembretes', (req, res) => {
    const { texto } = req.body;
    lembretes.push({ id: lembretes.length + 1, texto });
    res.status(201).json({ message: "Lembrete adicionado!" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
