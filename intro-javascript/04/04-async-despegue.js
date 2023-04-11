
const getHoraActual = () => new Date().toLocaleTimeString();

const lanzarExcepcion = () => {
    throw new Error('Error inesperado');
}

const obtenerNumeroAleatorio = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

async function etapa(nroEtapa, tiempo) {
    return new Promise((res, rej) => {
        console.log(`Etapa #${nroEtapa} iniciada a las ${getHoraActual()}`);

        setTimeout(lanzarExcepcion, obtenerNumeroAleatorio(4000,16000))

        setTimeout(() => {
            res(console.log(`Etapa #${nroEtapa} finalizada a las ${getHoraActual()}`))
        }, tiempo);
    })
}

const main = async () => {

    try {
        await etapa(1, 2000);
        await etapa(2, 3000);
        await etapa(3, 5000);
        await etapa(4, 6000);
    } catch (error) {
        console.error(error);
    }
}


main();





