const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');
//const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'listar':
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log('======= Por Hacer ======='.green);
            console.log(tarea.description);
            console.log('Estado: ', tarea.completado);
            console.log('========================='.green);
        }
        break;
    case 'crear':
        let tarea = porHacer.crear(argv.description)
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.description, argv.c);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.description);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}