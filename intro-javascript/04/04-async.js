
// Llamar servidor de pokemon
// Agarrar el pokemon mas debil y consultar a otro servidor acerca de los usuarios que tienen ese pokemon
// Mandar un email a esos usuarios avisandole que su pokemon se cae a pedazos


// 1 
llamarAlServidor(function () {
    // 3 
    const peorPokemon = agarrarElPeorPokemon();
    // 4
    llamarAlServidorDeUsuarios(peorPokemon, function () {
        // 6 
        mandarEmailALosUsarios(function () {
            // 8
            alert('Ya hicimos todo!')
        })
        // 7
        // instruccion
    });
    // 5 
    // instruccion

})
// 2
// instruccion 

llamarAlServidor.then(() => {
    llamarAlServidorDeUsuarios();
}).then(() => {
    mandarEmailALosUsarios();
}).then(() => {
    alert('Hicimos todo');
})


// async / await => son promesas 

async function principal() {
    await llamarAlServidor();
    console.log('1'); // Espera de forma asincrona, no se bloquea
    await llamarAlServidorDeUsuarios()
    await mandarEmailALosUsarios()
    alert('Hicimos todo')
}

