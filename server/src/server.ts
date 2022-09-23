import express from 'express';
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

//localhost:3333/ads

app.get('/games', (req, res) => {
    return res.json([]);
});

app.post('/ads', (req, res) => {
    return res.status(201).json([]);
});



app.get('/games/:id/ads' , (req, res) => {
    // const gameId= request.params.id;

    return res.json([
        {id: 1, name: 'Anuncio 1'},
        {id: 2, name: 'Anuncio 2'},
        {id: 3, name: 'Anuncio 3'},
        {id: 4, name: 'Anuncio 4'},
    ])
})

app.get('/ads/:id/discord' , (req, res) => {
    // const adId= request.params.id;

    return res.json([])
})

app.listen(3333)