const fs = require('fs');
const colors = require('colors')

let listaTabla = (base, limite = 10) => {
    let data = '';

    console.log('========================'.red);
    console.log(`TABLA DEL ${base} MULTIPLICAR`.red);
    console.log('========================'.red);
    for (var i = 1; i <= limite; i++) {

        //data += `${base}*${i}= ${base * i} \n`;
        console.log(`${base}*${i}= ${base * i}`)
    }
}

let creaArchivo = ((base, limite = 10) => {
    return new Promise((res, rej) => {
        let data = '';

        if (!Number(base)) {
            rej('La base no es un dato NUMERICO');
            return;
        }

        for (var i = 1; i <= limite; i++) {
            data += `${base}*${i}= ${base * i} \n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) rej(err);
            res(`tabla-${base}.txt creada`)
        })
    })
})

module.exports = {
    creaArchivo,
    listaTabla
}