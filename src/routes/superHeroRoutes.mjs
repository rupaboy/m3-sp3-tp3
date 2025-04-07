//Define las rutas necesarias para cada operación del controlador.

import express from 'express';
import { validationResult } from 'express-validator';

    //Express-Validator
import { validationHandler } from '../validators/errorHandler.mjs';
import {
    //Validators for Param
    lowLevelParamStringValidations,
    midLevelParamStringValidations,
    lowLevelParamNumberValidations,
    lowLevelParamArrayValidations,
    mongoIdParamValidator,
    byAttributeParamValidations,
    //Sanitizers for Param
    attributeParamSanitizer,
    lowLevelParamStringSanitizer,
    midLevelParamStringSanitizer,
    highLevelParamStringSanitizer,
    lowLevelParamArraySanitizer,
    midLevelParamArraySanitizer,
    highLevelParamArraySanitizer,
    lowLevelParamEdadValidations,

} from '../validators/superheroesParamRules.mjs';

import {
    //Validators for Body
    mongoIdBodyValidator,
    lowLevelBodyStringValidations,
    midLevelBodyStringValidations,
    lowLevelBodyNumberValidations,
    lowLevelBodyArrayValidations,
    lowLevelBodySearchValidations,
    //Sanitizers for Body
    lowLevelBodyStringSanitizer,
    midLevelBodyStringSanitizer,
    highLevelBodyStringSanitizer,
    lowLevelBodyArraySanitizer,
    midLevelBodyArraySanitizer,
    highLevelBodyArraySanitizer,
    lowLevelBodySearchSanitizer,

} from '../validators/superheroesBodyRules.mjs';

    //Controllers
import { 
    //obtenerTodosLosSuperheroesPorIdController,
    obtenerTodosLosSuperheroesController,
    obtenerSuperheroePorIdController,
    //obtenerSuperheroesMasPoderososController,
    //obtenerSuperheroesMenosPoderososController,
    //obtenerSuperheroesSinPoderesController,
    //obtenerSuperheroesMasPoderososPlanetaController,
    //obtenerSuperheroesMenosPoderososPlanetaController,
    //obtenerSuperheroesSinPoderesPlanetaController,
    buscarSuperheroesPorURLController,
    buscarSuperheroesPorAtributoController,
    //buscarIdSuperheroesPorAtributoController,
    //agregarNuevoSuperheroeController,
    crearNuevoSuperheroeController,
    //agregarNuevoTemplateSuperheroeController,
    //agregarNuevoArraySuperheroesController,
    //editarSuperheroePorIdAtributoValorController,
    editarSuperheroeController,
    borrarSuperheroeController,
    editarSuperheroePorIdController,
    //editarNombreSuperheroePorIdController,
    //editarNombreRealSuperheroePorIdController,
    //editarEdadSuperheroePorIdController,
    //editarPlanetaOrigenSuperheroePorIdController,
    //editarDebilidadSuperheroePorIdController,
    //editarPoderesSuperheroePorIdController,
    //editarAliadosSuperheroePorIdController,
    //editarEnemigosSuperheroePorIdController,
    //editarSuperheroePorIdAgregarPoderController,
    //editarSuperheroePorIdQuitarPoderController,
    //editarSuperheroePorIdAgregarAliadoController,
    //editarSuperheroePorIdQuitarAliadoController,
    //editarSuperheroePorIdAgregarEnemigoController,
    //editarSuperheroePorIdQuitarEnemigoController,
    borrarSuperheroePorIdController,
    //borrarSuperheroePorNombreController,
    agregarNuevoSuperheroeController,
    
} from '../controllers/superheroesController.mjs';

import {
    site
        } from '../views/renderElement.mjs';


// Router
const router = express.Router();

//GET
//Collection

/*
router.get('/heroes/mas-poderosos',
    obtenerSuperheroesMasPoderososController);

router.get('/heroes/menos-poderosos',
    obtenerSuperheroesMenosPoderososController);

router.get('/heroes/sin-poderes',
    obtenerSuperheroesSinPoderesController);
        
router.get('/heroes/mas-poderosos/:valor', //Valor debe ser un planeta
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    validationHandler,
    obtenerSuperheroesMasPoderososPlanetaController);

router.get('/heroes/menos-poderosos/:valor', //Valor debe ser un planeta
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    validationHandler,
    obtenerSuperheroesMenosPoderososPlanetaController);

router.get('/heroes/sin-poderes/:valor', //Valor debe ser un planeta
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    validationHandler,
    obtenerSuperheroesSinPoderesPlanetaController);
*/

router.get('/heroes', obtenerTodosLosSuperheroesController); //Listar todos los heroes

router.get('/heroes/nuevo', crearNuevoSuperheroeController);

router.get('/heroes/editar/id/:id', editarSuperheroeController);

router.get('/heroes/borrar/id/:id', borrarSuperheroeController);

router.get('/heroes/id/:id', //Buscar héroe por Id
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    validationHandler,
    obtenerSuperheroePorIdController);

router.get('/heroes/_id/:id', //Buscar héroe por Id
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    validationHandler,
    obtenerSuperheroePorIdController);

    /*
router.get('/heroes/nombreSuperHeroe/:nombreSuperHeroe',
    lowLevelBodyStringSanitizer(),
    lowLevelBodyStringValidations(),
    validationHandler,
    buscarSuperheroesPorAtributoController);

router.get('/heroes/nombreReal/:valor',
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    validationHandler,
    buscarSuperheroesPorAtributoController);
/*
router.get('/heroes/edad/:edad',
    lowLevelBodyNumberValidations(),
    validationHandler,
    buscarSuperheroesPorAtributoController);

router.get('/heroes/planetaOrigen/:planetaOrigen',
    lowLevelBodyStringSanitizer(),
    lowLevelBodyStringValidations(),
    validationHandler,
    buscarSuperheroesPorAtributoController);

router.get('/heroes/debilidad/:debilidad',
    lowLevelBodyStringSanitizer(),
    lowLevelBodyStringValidations(),
    validationHandler,
    buscarSuperheroesPorAtributoController);

router.get('/heroes/poderes/:poderes',
    lowLevelBodyStringSanitizer(),
    lowLevelBodyStringValidations(),
    validationHandler,
    buscarSuperheroesPorAtributoController);

router.get('/heroes/aliados/:aliados',
    lowLevelBodyStringSanitizer(),
    lowLevelBodyStringValidations(),
    validationHandler,
    buscarSuperheroesPorAtributoController);

router.get('/heroes/enemigos/:enemigos',
    lowLevelBodyStringSanitizer(),
    lowLevelBodyStringValidations(),
    validationHandler,
    buscarSuperheroesPorAtributoController);

router.get('/heroes/creador/:creador',
    lowLevelBodyStringSanitizer(),
    lowLevelBodyStringValidations(),
    validationHandler,
    buscarSuperheroesPorAtributoController);
*/
/*
router.get('/heroes/comparar', (req,res) => {
    res.send('comparar API')
})
*/


router.get('/heroes/:atributo/:valor',
    attributeParamSanitizer(),
    //byAttributeParamValidations(),
    validationHandler,
    buscarSuperheroesPorURLController)
    

//POST

router.post('/heroes/buscar/',
    lowLevelBodySearchSanitizer(),
    lowLevelBodySearchValidations(),
    validationHandler,
    buscarSuperheroesPorAtributoController)


router.post('/heroes/nuevo/',
    mongoIdBodyValidator(),
    highLevelBodyArraySanitizer(),
    highLevelBodyStringSanitizer(),
    lowLevelBodyArrayValidations(),
    lowLevelBodyStringValidations(),
    lowLevelBodyNumberValidations(),
    validationHandler,
    agregarNuevoSuperheroeController)


/*
router.post('/heroes/nuevo/array', 
    agregarNuevoArraySuperheroesController) //Array ../helper/templateHeroeNuevo.mjs
*/

//PUT

router.put('/heroes/id/:id',
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    highLevelBodyArraySanitizer(),
    highLevelBodyStringSanitizer(),
    lowLevelBodyStringValidations(),
    lowLevelBodyArrayValidations(),
    lowLevelBodyNumberValidations(),
    validationHandler,
    editarSuperheroePorIdController) //..Pasa un id para editar.
/*
router.put('/heroes/:id/nombreSuperHeroe/:valor', //Valor: nuevo nombre
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    highLevelBodyStringSanitizer(),
    midLevelBodyStringValidations(),
    validationHandler,
    editarNombreSuperheroePorIdController);

router.put('/heroes/:id/nombreReal/:valor', //Valor: nuevo nombre real
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    highLevelBodyStringSanitizer(),
    midLevelBodyStringValidations(),
    validationHandler,
    editarNombreRealSuperheroePorIdController);

router.put('/heroes/:id/edad/:valor', //Valor: nueva edad
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    lowLevelParamNumberValidations(),
    lowLevelBodyNumberValidations(),
    validationHandler,
    editarEdadSuperheroePorIdController);

router.put('/heroes/:id/planetaOrigen/:valor', //Valor: nuevo planeta
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    highLevelBodyStringSanitizer(),
    midLevelBodyStringValidations(),
    validationHandler,
    editarPlanetaOrigenSuperheroePorIdController);

router.put('/heroes/:id/debilidad/:valor', //Valor: nueva debilidad
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    highLevelBodyStringSanitizer(),
    midLevelBodyStringValidations(),
    validationHandler,
    editarDebilidadSuperheroePorIdController);

router.put('/heroes/:id/poderes/:valor', //Valor: nuevo Array de poderes (separar con ,)
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    highLevelParamArraySanitizer(),
    lowLevelParamArrayValidations(),
    highLevelBodyArraySanitizer(),
    lowLevelBodyArrayValidations(),
    validationHandler,
    editarPoderesSuperheroePorIdController);

router.put('/heroes/:id/aliados/:valor', //Valor: nuevo Array de aliados (separar con ,)
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    highLevelParamArraySanitizer(),
    lowLevelParamArrayValidations(),
    highLevelBodyArraySanitizer(),
    lowLevelBodyArrayValidations(),
    validationHandler,
    editarAliadosSuperheroePorIdController);

router.put('/heroes/:id/enemigos/:valor', //Valor: nuevo Array de enemigos (separar con ,)
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    highLevelParamArraySanitizer(),
    lowLevelParamArrayValidations(),
    highLevelBodyArraySanitizer(),
    lowLevelBodyArrayValidations(),
    validationHandler,
    editarEnemigosSuperheroePorIdController);

router.put('/heroes/:id/agregar/poder/:valor', //Valor: nuevo Poder
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    highLevelBodyStringSanitizer(),
    midLevelBodyStringValidations(),
    validationHandler,
    editarSuperheroePorIdAgregarPoderController);

router.put('/heroes/:id/quitar/poder/:valor', //Valor: quitar un poder
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    highLevelBodyStringSanitizer(),
    midLevelBodyStringValidations(),
    validationHandler,
    editarSuperheroePorIdQuitarPoderController)


router.put('/heroes/:id/agregar/aliado/:valor', //Valor: nuevo aliado
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    highLevelBodyStringSanitizer(),
    midLevelBodyStringValidations(),
    validationHandler,
    editarSuperheroePorIdAgregarAliadoController)


router.put('/heroes/:id/quitar/aliado/:valor', //Valor: quitar un aliado
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    highLevelBodyStringSanitizer(),
    midLevelBodyStringValidations(),
    validationHandler,
    editarSuperheroePorIdQuitarAliadoController)


router.put('/heroes/:id/agregar/enemigo/:valor', //Valor: nuevo enemigo
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    highLevelBodyStringSanitizer(),
    midLevelBodyStringValidations(),
    validationHandler,
    editarSuperheroePorIdAgregarEnemigoController)


router.put('/heroes/:id/quitar/enemigo/:valor', //Valor: quitar un enemigo
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    highLevelBodyStringSanitizer(),
    midLevelBodyStringValidations(),
    validationHandler,
    editarSuperheroePorIdQuitarEnemigoController)
*/
//DELETE

router.delete('/heroes/id/:id', //Borrar por Id
    mongoIdParamValidator(),
    mongoIdBodyValidator(),
    borrarSuperheroePorIdController)
/*
router.delete('/heroes/nombre/:valor', //Valor: Nombre de héroe a borrar
    lowLevelParamStringValidations(),
    lowLevelBodyStringValidations(),
    borrarSuperheroePorNombreController)
*/
export default router;