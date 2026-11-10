
// Fazendo os imports das bibliotecas
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

// Criando o nosso app
const app = express();

// Permite receber dados em JSON
app.use(express.json());

// Criando a conexão com o banco
const client = new MongoClient(process.env.MONGO_URI);

// Conectando com o banco "cinema"
// e com a coleção "filmes"
const filmes = client.db('cinema').collection('filmes');

// Rota inicial
app.get('/', (req, res) => {
    res.send('API de Filmes funcionando!');
});

// Rota para cadastrar um filme
app.post('/filmes', async (req, res) => {

    const filme = {
        titulo: req.body.titulo,
        diretor: req.body.diretor,
        genero: req.body.genero,
        ano: req.body.ano
    };

    const resultado = await filmes.insertOne(filme);

    res.send({
        mensagem: 'Filme cadastrado com sucesso!',
        filme: resultado
    });
});

// Rota para mostrar todos os filmes
app.get('/filmes', async (req, res) => {

    const listaFilmes = await filmes.find().toArray();

    res.send(listaFilmes);
});

// Rota para mostrar um filme pelo ID
app.get('/filmes/:id', async (req, res) => {

    const id = req.params.id;

    const filme = await filmes.findOne({
        _id: new ObjectId(id)
    });

    res.send(filme);
});

// Rota para atualizar um filme
app.put('/filmes/:id', async (req, res) => {

    const id = req.params.id;

    const filme = {
        titulo: req.body.titulo,
        diretor: req.body.diretor,
        genero: req.body.genero,
        ano: req.body.ano
    };

    await filmes.updateOne(
        { _id: new ObjectId(id) },
        { $set: filme }
    );

    res.send('Filme atualizado com sucesso!');
});

// Rota para excluir um filme
app.delete('/filmes/:id', async (req, res) => {

    const id = req.params.id;

    await filmes.deleteOne({
        _id: new ObjectId(id)
    });

    res.send('Filme excluído com sucesso!');
});

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor funcionando na porta 3000!');
});
