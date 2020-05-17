
const description = {
        demand: true,
        alias: 'd',
        descripcion: 'tarea por hacer'
    }
const completado = {
        default: true,
        alias: 'c',
        desc: 'Marca como completada la tarea  '
}


const argv = require('yargs')
                .command('crear', 'Crea una atarea', {
                    description
                })
                .command('actualizar', 'Actualizar una tarea', {
                    description,
                    completado
                })
                .command('borrar', 'Crea una atarea', {
                    description
                })
                .help()
                .argv;


module.exports = {
    argv
}