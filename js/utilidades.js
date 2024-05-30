
//ruta para recursos img
var directorioImagenes = 'recursos/imagenes/'

//funciones

function crearNodo(tipoNodo) {
    var nodo = document.createElement(tipoNodo)
    return nodo
}

function crearNodoConTexto(tipoNodo, textoNodo) {
    var nodo = document.createElement(tipoNodo)
    var textoNodo = document.createTextNode(textoNodo)
    nodo.appendChild(textoNodo)
    // document.body.appendChild(nodo)
    return nodo
}

function crearNodoImagen(nombreImagen, alt) {
    var nodo = crearNodo("img")
    nodo.src = directorioImagenes + nombreImagen
    nodo.alt = alt
    return nodo
}

function adicionarNodoABody(nodo) {
    document.body.appendChild(nodo)
}

function adicionarNodoAContenedor(nodo, contenedor) {
    contenedor.appendChild(nodo)
}

function crearAnio() {
    var enero = crearNodoConTexto("h3", "Enero")
    var febrero = crearNodoConTexto("h3", "Febrero")
    var marzo = crearNodoConTexto("h3", "Marzo")
    var abril = crearNodoConTexto("h3", "Abril")
    var Mayo = crearNodoConTexto("h3", "Mayo")
    var junio = crearNodoConTexto("h3", "Junio")
    var julio = crearNodoConTexto("h3", "Julio")
    var agosto = crearNodoConTexto("h3", "Agosto")
    var septiembre = crearNodoConTexto("h3", "septiembre")
    var octubre = crearNodoConTexto("h3", "Octubre")
    var noviembre = crearNodoConTexto("h3", "Noviembre")
    var diciembre = crearNodoConTexto("h3", "Diciembre")

    var divEnero = crearNodo("div")
    var divFebrero = crearNodo("div")
    var divMarzo = crearNodo("div")
    var divAbril = crearNodo("div")
    var divMayo = crearNodo("div")
    var divJunio = crearNodo("div")
    var divJulio = crearNodo("div")
    var divAgosto = crearNodo("div")
    var divSeptiembre = crearNodo("div")
    var divOctubre = crearNodo("div")
    var divNoviembre = crearNodo("div")
    var divDiciembre = crearNodo("div")

    adicionarNodoAContenedor(enero, divEnero)
    adicionarNodoAContenedor(febrero, divFebrero)
    adicionarNodoAContenedor(marzo, divMarzo)
    adicionarNodoAContenedor(abril, divAbril)
    adicionarNodoAContenedor(Mayo, divMayo)
    adicionarNodoAContenedor(junio, divJunio)
    adicionarNodoAContenedor(julio, divJulio)
    adicionarNodoAContenedor(agosto, divAgosto)
    adicionarNodoAContenedor(septiembre, divSeptiembre)
    adicionarNodoAContenedor(octubre, divOctubre)
    adicionarNodoAContenedor(noviembre, divNoviembre)
    adicionarNodoAContenedor(diciembre, divDiciembre)

    var anio = crearNodo("div")

    adicionarNodoAContenedor(divEnero, anio)
    adicionarNodoAContenedor(divFebrero, anio)
    adicionarNodoAContenedor(divMarzo, anio)
    adicionarNodoAContenedor(divAbril, anio)
    adicionarNodoAContenedor(divMayo, anio)
    adicionarNodoAContenedor(divJunio, anio)
    adicionarNodoAContenedor(divJulio, anio)
    adicionarNodoAContenedor(divAgosto, anio)
    adicionarNodoAContenedor(divSeptiembre, anio)
    adicionarNodoAContenedor(divOctubre, anio)
    adicionarNodoAContenedor(divNoviembre, anio)
    adicionarNodoAContenedor(divDiciembre, anio)

    anio.setAttribute("class", "divAnio")

    var divPrincipal = document.getElementById("divPrincipal")
    // Obtener el nuevo div creado
    var nuevoDiv = anio
    nuevoDiv.id = "nuevoDivId"
    // Agregar el nuevo div al final del div principal
    divPrincipal.appendChild(nuevoDiv)
}

//vista de meses




function crearEnero() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }

    var listaOrdenada = crearNodo("ol")

    //dias
    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    for (let i = 1; i < 32; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString())
        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 1 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

                evento.addEventListener('click', function() {
                    localStorage.setItem('selectedFechaHora', fechaHora);
                    window.location.href = "html/gestioneventos.html";
                });
            }
        });
        adicionarNodoAContenedor(window[variableName], listaOrdenada)
        window[variableName].setAttribute("onclick", "window.location.href='html/gestioneventos.html'")

    }

    variable1.setAttribute("class", "primerDiaEnero")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Enero"
}

function crearFebrero() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }

    var listaOrdenada = crearNodo("ol")

    //dias
    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    for (let i = 1; i < 30; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString())
        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 2 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

                evento.addEventListener('click', function() {
                    localStorage.setItem('selectedFechaHora', fechaHora);
                    window.location.href = "html/gestioneventos.html";
                });
            }
        });
        adicionarNodoAContenedor(window[variableName], listaOrdenada)
        window[variableName].setAttribute("onclick", "window.location.href='html/gestioneventos.html'")

    }
    variable1.setAttribute("class", "primerDiaFebreo")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Febrero"
}

function crearMarzo() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }

    var listaOrdenada = crearNodo("ol")

    //dias
    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    for (let i = 1; i < 32; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString())
        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 3 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

                evento.addEventListener('click', function() {
                    localStorage.setItem('selectedFechaHora', fechaHora);
                    window.location.href = "html/gestioneventos.html";
                });
            }
        });
        adicionarNodoAContenedor(window[variableName], listaOrdenada)
        window[variableName].setAttribute("onclick", "window.location.href='html/gestioneventos.html'")

    }
    variable1.setAttribute("class", "primerDiaMarzo")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Marzo"

}

function crearAbril() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }

    var listaOrdenada = crearNodo("ol")

    //dias
    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    for (let i = 1; i < 31; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString())
        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 4 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

                evento.addEventListener('click', function() {
                    localStorage.setItem('selectedFechaHora', fechaHora);
                    window.location.href = "html/gestioneventos.html";
                });
            }
        });
        adicionarNodoAContenedor(window[variableName], listaOrdenada)
        window[variableName].setAttribute("onclick", "window.location.href='html/gestioneventos.html'")

    }
    variable1.setAttribute("class", "primerDiaAbril")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Abril"

}

function crearMayo() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }

    var listaOrdenada = crearNodo("ol")

    //dias
    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    for (let i = 1; i < 32; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString())
        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 5 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

                evento.addEventListener('click', function() {
                    localStorage.setItem('selectedFechaHora', fechaHora);
                    window.location.href = "html/gestioneventos.html";
                });
            }
        });

        adicionarNodoAContenedor(window[variableName], listaOrdenada)
        window[variableName].setAttribute("onclick", "window.location.href='html/gestioneventos.html'")

    }
    variable1.setAttribute("class", "primerDiaMayo")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Mayo"
}

function crearJunio() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }

    var listaOrdenada = crearNodo("ol")

    //dias
    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    for (let i = 1; i < 31; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString())
        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 6 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

                evento.addEventListener('click', function() {
                    localStorage.setItem('selectedFechaHora', fechaHora);
                    window.location.href = "html/gestioneventos.html";
                });
            }
        });

        adicionarNodoAContenedor(window[variableName], listaOrdenada)
        window[variableName].setAttribute("onclick", "window.location.href='html/gestioneventos.html'")

    }
    variable1.setAttribute("class", "primerDiaJunio")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Junio"
}

function crearJulio() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }

    var listaOrdenada = crearNodo("ol")

    //dias
    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    for (let i = 1; i < 32; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString())
        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 7 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

                evento.addEventListener('click', function() {
                    localStorage.setItem('selectedFechaHora', fechaHora);
                    window.location.href = "html/gestioneventos.html";
                });
            }
        });
        adicionarNodoAContenedor(window[variableName], listaOrdenada)
        window[variableName].setAttribute("onclick", "window.location.href='html/gestioneventos.html'")

    }
    variable1.setAttribute("class", "primerDiaJulio")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Julio"
}

function crearAgosto() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }
    var listaOrdenada = crearNodo("ol")

    //dias
    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    for (let i = 1; i < 32; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString())
        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 8 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

                evento.addEventListener('click', function() {
                    localStorage.setItem('selectedFechaHora', fechaHora);
                    window.location.href = "html/gestioneventos.html";
                });
            }
        });
        adicionarNodoAContenedor(window[variableName], listaOrdenada)
        window[variableName].setAttribute("onclick", "window.location.href='html/gestioneventos.html'")

    }
    variable1.setAttribute("class", "primerDiaAgosto")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Agosto"
}
function crearSeptiembre() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }

    var listaOrdenada = crearNodo("ol")

    //dias
    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    for (let i = 1; i < 31; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString())
        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 9 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

                evento.addEventListener('click', function() {
                    localStorage.setItem('selectedFechaHora', fechaHora);
                    window.location.href = "html/gestioneventos.html";
                });
            }
        });
        adicionarNodoAContenedor(window[variableName], listaOrdenada)
        window[variableName].setAttribute("onclick", "window.location.href='html/gestioneventos.html'")

    }
    variable1.setAttribute("class", "primerDiaSeptiembre")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Septiembre"
}

function crearOctubre() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }

    var listaOrdenada = crearNodo("ol")

    //dias
    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }
    for (let i = 1; i < 32; i++) {
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString())

        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 10 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

                evento.addEventListener('click', function() {
                    localStorage.setItem('selectedFechaHora', fechaHora);
                    window.location.href = "html/gestioneventos.html";
                });
            }
        });
        adicionarNodoAContenedor(window[variableName], listaOrdenada)
        window[variableName].setAttribute("onclick", "window.location.href='html/gestioneventos.html'")

    }
    variable1.setAttribute("class", "primerDiaOctubre")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Octubre"
}

function crearNoviembre() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }

    var listaOrdenada = crearNodo("ol")

    //dias
    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    for (let i = 1; i < 31; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString())
        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 11 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

                evento.addEventListener('click', function() {
                    localStorage.setItem('selectedFechaHora', fechaHora);
                    window.location.href = "html/gestioneventos.html";
                });
            }
        });
        adicionarNodoAContenedor(window[variableName], listaOrdenada)
        window[variableName].setAttribute("onclick", "window.location.href='html/gestioneventos.html'")

    }
    variable1.setAttribute("class", "primerDiaNoviembre")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Noviembre"
}
function crearDiciembre() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }

    var listaOrdenada = crearNodo("ol")

    //dias
    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    for (let i = 1; i < 32; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString())
        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 12 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

                evento.addEventListener('click', function() {
                    localStorage.setItem('selectedFechaHora', fechaHora);
                    window.location.href = "html/gestioneventos.html";
                });
            }
        });
        adicionarNodoAContenedor(window[variableName], listaOrdenada)
        window[variableName].setAttribute("onclick", "window.location.href='html/gestioneventos.html'")

    }
    variable1.setAttribute("class", "primerDiaDiciembre")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Diciembre"
}

//crear vista de dias
function crearDias() {
    var listaOrdenada = crearNodo("ol")
    //dias
    for (let i = 1; i < 13; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString() + " am")

        adicionarNodoAContenedor(window[variableName], listaOrdenada)

    }

    for (let i = 1; i < 13; i++) {
        // Genera el nombre de la variable basado en el valor de 'i'
        let variableName = `variable${i + 12}`
        // Asigna el valor de 'i' a la variable
        window[variableName] = crearNodoConTexto("li", i.toString() + " pm")

        adicionarNodoAContenedor(window[variableName], listaOrdenada)

    }

    var divDias = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divDias)
    divDias.setAttribute("class", "divDias")
    var divPrincipal = document.getElementById("divPrincipal")
    // Obtener el nuevo div creado
    var nuevoDiv = divDias
    nuevoDiv.id = "nuevoDivId"
    // Agregar el nuevo div al final del div principal
    divPrincipal.appendChild(nuevoDiv)
}

