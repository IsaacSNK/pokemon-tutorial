import express from 'express';
import { pokemonsDB } from './database.js';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/pokemons', (request, response) => {
    if (request.query.name) {
        response.send(
            pokemonsDB.filter(pokemon => pokemon.name === request.query.name)
        );
    } else {
        response.send(
            pokemonsDB
        );
    }
    
});

app.listen(7000);