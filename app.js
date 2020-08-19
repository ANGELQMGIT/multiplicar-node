/*  UNA FORMA
const { creaArchivo } = require('./multiplicar/multiplicar')

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];


creaArchivo(base)
    .then(res => console.log(`Archivo creado: ${res}`))
    .catch(e => console.log(e));

 */

/*OTRA FORMA*/
const { creaArchivo, listaTabla } = require('./multiplicar/multiplicar')

const argv = require('yargs')
    .command('listar', 'Imp´rime en comnsola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }

    })
    .command('crear', 'Crea archivos con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .argv;

let comando = argv._[0];

//console.log(argv.base);

switch (comando) {
    case 'listar':
        listaTabla(argv.base, argv.limite);
        break;
    case 'crear':
        creaArchivo(argv.base, argv.limite)
            .then(res => console.log(`Archivo creado: ${res}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido')
        break;
}

/*
infraestructura
Guardia inFRAESTRUCCija
*/