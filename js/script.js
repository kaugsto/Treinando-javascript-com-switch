function hoje(){


    const tempo = new Date();

    var dia = tempo.getDate();
    var mes = tempo.getMonth();
    var ano = tempo.getFullYear();

    switch (mes) {

        case 0:
            mes = "Janeiro";
            break;
    default:
        alert("Esse mes não existe")
        break;
}

console.log("Hoje é dia ",dia,"de", mes, "de", ano);
}

// IMPORTANTE SABER 
//O javascript faz leituras de cima para baixo ou seja no exemplo acima
//caso quiséssemos colocar o console log acima do switch o mês não rodaria.
// = serve para atrelar
//== serve para comparar 