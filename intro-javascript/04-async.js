
const getHoraActual = () => new Date().toLocaleTimeString();

const lanzarExcepcion = () => {
    throw new Error('Error inesperado');
}

async function etapa(nroEtapa, tiempo) {
    return new Promise((res, rej) => {
        console.log(`Etapa #${nroEtapa} iniciada a las ${getHoraActual()}`);
        
        setTimeout(() => {
            res(console.log(`Etapa #${nroEtapa} finalizada a las ${getHoraActual()}`))
        }, tiempo);
    })
}

const main = async () => {
    await etapa(1, 2000);
    await etapa(2,3000);
    await etapa(3,5000);
    await etapa(4,6000);
}


main();

