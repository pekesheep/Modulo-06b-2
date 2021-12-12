var randomPick = (n, min, max) => {

    
    const range = max - min + 1;
    var random = [];

    // Si pedimos más números de los posibles no ejecutamos.
    if (n > range) return console.log ("La cantidad de números solicitados es mayor que el rango dado.");

    // Generador de números aleatorios según rango dado.
    for (var i = 0; i < n; i++) {
        var control = Math.floor(Math.random() * range) + min;
        
        // Control de números repetidos
        random.indexOf(control, 0) === -1 ? random[i] = control : i--;       
    }

    console.log("Final ", random);
}

randomPick(10, 1, 5);


