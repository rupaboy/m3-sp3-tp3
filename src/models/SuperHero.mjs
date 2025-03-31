//Define el modelo de datos para superheroes.
//Establece estructura y reglas de validación.

import mongoose from 'mongoose'; // importar Mongoose (Esto no estaba en el archivo de ejemplo)
//Otro intento: const mongoose = require('mongoose');

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: {type: String, required: true},
    nombreReal: {type: String, required: true},
    edad: {type: Number, min: 0},
    planetaOrigen: {type: String, default: 'Desconocido'},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: String,
    createdAt: {type: Date, default: Date.now}
});

const SuperHero = mongoose.model('Superhero', superheroSchema, 'Grupo-08');
export default SuperHero
