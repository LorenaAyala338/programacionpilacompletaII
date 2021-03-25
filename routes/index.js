var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Lorena Ayala', appName: 'WebApp' });
});

/* Agregar Ruta */
router.get('/ho', function(req, res, next) {
  res.send('Hola Bienvendido ala Asignatura De Pila Completa')
})
module.exports = router;
