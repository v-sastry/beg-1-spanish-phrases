window.addEventListener("load", CreateTableFromJSON);

function CreateTableFromJSON() {

    const hideSpanishButton = document.getElementById("hideSpanish");
    const showSpanishButton = document.getElementById("showSpanish");

    var col = [];
    for (var i = 0; i < spanishSounds.length; i++) {
        for (var key in spanishSounds[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1); // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < spanishSounds.length; i++) {
        var track = 0;
        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {

            var tabCell = tr.insertCell(-1);

            if (j == col.length - 2) {
                var element = document.createElement("audio")
                element.id = "audio-player";
                element.controls = "controls";
                element.src = "Sounds_mp3/Spanish_" + ((i * 2) + 1) + ".mp3"
                element.type = "audio/mpeg";
                tabCell.appendChild(element)
                    // tabCell.innerHTML = "Sounds/Spanish_" + ((i * 2) + 1) + ".wav"
                    // tabCell.innerHTML = '<audio id="audio-player" controls="controls" type="audio/mpeg"> src="Sounds/Spanish_" + j + ".wav"';
            } else if (j == col.length - 1) {
                var element = document.createElement("audio")
                element.id = "audio-player";
                element.controls = "controls";
                element.src = "Sounds_mp3/Spanish_" + ((i * 2) + 2) + ".mp3"
                element.type = "audio/mpeg";
                tabCell.appendChild(element)
                    // tabCell.innerHTML = "Sounds/Spanish_" + ((i * 2) + 2) + ".wav"
            } else {
                tabCell.innerHTML = spanishSounds[i][col[j]];
                if (j == col.length - 3) {
                    tabCell.className = "Spanish";
                }
            }
        }
    }

    hideSpanishButton.addEventListener("click", function() {
        const spanishSection = document.querySelectorAll(".Spanish");
        spanishSection.forEach(element => {
            element.setAttribute("style", "visibility: hidden");
        })
    });

    showSpanishButton.addEventListener("click", function() {
        const spanishSection = document.querySelectorAll(".Spanish");
        spanishSection.forEach(element => {
            element.setAttribute("style", "visibility: visible");
        })
    });

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}


const spanishSounds = [{
        "PhraseID": "1",
        "English": "We never dance",
        "Spanish": "Nunca bailamos",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "2",
        "English": "Shall we dance?",
        "Spanish": "¿Bailamos?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "3",
        "English": "Marco and Anna dance well",
        "Spanish": "Marco y Anna bailan bien",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "4",
        "English": "She dances but I don't",
        "Spanish": "Ella baila pero yo no",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "5",
        "English": "Where do you dance?",
        "Spanish": "¿Dónde bailas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "6",
        "English": "I dance on Saturdays",
        "Spanish": "(yo) Bailo los sabados",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "7",
        "English": "What are you all looking for?",
        "Spanish": "¿Qué buscan?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "8",
        "English": "We're looking for a restaurant",
        "Spanish": "Buscamos un restaurante",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "9",
        "English": "I'm looking for (my) the keys",
        "Spanish": "Busco las llaves",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "10",
        "English": "She's looking for a new car",
        "Spanish": "Ella busca un coche nuevo",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "11",
        "English": "I'll look for the papers tomorrow",
        "Spanish": "Busco los papeles mañana",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "12",
        "English": "What are you looking for?",
        "Spanish": "¿Qué buscas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "13",
        "English": "I sing a lot",
        "Spanish": "(yo) Canto mucho",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "14",
        "English": "What do we sing now?",
        "Spanish": "¿Qué cantamos ahora?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "15",
        "English": "She sings in a band",
        "Spanish": "Ella canta en una banda",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "16",
        "English": "They sing this Friday",
        "Spanish": "Ellos cantan este viernes",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "17",
        "English": "Do you sing?",
        "Spanish": "¿Cantas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "18",
        "English": "What are they singing?",
        "Spanish": "¿Qué cantan?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "19",
        "English": "Do you buy a lot of shoes?",
        "Spanish": "¿Compras muchos zapatos?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "20",
        "English": "Where do we buy that?",
        "Spanish": "¿Dónde compramos esso?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "21",
        "English": "We're buying a house tomorrow",
        "Spanish": "Compramos casa mañana",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "22",
        "English": "What are they buying?",
        "Spanish": "¿Qué compran?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "23",
        "English": "I buy a lot of food",
        "Spanish": "Compro mucha comida",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "24",
        "English": "He buys a lot of wine",
        "Spanish": "Él compra mucho vino",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "25",
        "English": "Do they want tea or coffee?",
        "Spanish": "¿Desean té o café?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "26",
        "English": "We want to dance tonight",
        "Spanish": "De seamos bailar esta noche",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "27",
        "English": "I don't want to sing tonight",
        "Spanish": "No deseo cantar esta noche",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "28",
        "English": "I want coffee please",
        "Spanish": "Deseo café por favor",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "29",
        "English": "What does Marco want?",
        "Spanish": "¿Que desea Marco?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "30",
        "English": "Do you want to dance with me?",
        "Spanish": "¿Deseas bailar conmigo?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "31",
        "English": "They teach English",
        "Spanish": "Ellos enseñan ingles",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "32",
        "English": "When does your friend teach?",
        "Spanish": "¿Cuándo enseña tu amigo?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "33",
        "English": "We teach at the dance school",
        "Spanish": "Enseñamos en la escuela de baile",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "34",
        "English": "What do you teach?",
        "Spanish": "¿Qué enseñas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "35",
        "English": "I teach Spanish",
        "Spanish": "Enseño español",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "36",
        "English": "I like to teach",
        "Spanish": "Me gusta enseñar",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "37",
        "English": "What are we listening to?",
        "Spanish": "¿Qué escuchamos?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "38",
        "English": "I'm listening to the radio",
        "Spanish": "Escucho la radio",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "39",
        "English": "What music do you listen to?",
        "Spanish": "¿Que musica escuchas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "40",
        "English": "They never listen to me",
        "Spanish": "Ellos nunca me escuchan",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "41",
        "English": "She listens well",
        "Spanish": "Ella escucha bien",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "42",
        "English": "Are you listening to me?",
        "Spanish": "¿Me escuchas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "43",
        "English": "When do we study?",
        "Spanish": "¿Cuándo estudiamos?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "44",
        "English": "Where do they study?",
        "Spanish": "¿Dónde estudian?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "45",
        "English": "I study during the week",
        "Spanish": "Estudio durante la semana",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "46",
        "English": "What are you studying?",
        "Spanish": "¿Qué estudias?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "47",
        "English": "He studies a lot",
        "Spanish": "El estudia mucho",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "48",
        "English": "She almost never studies",
        "Spanish": "Ella casi nunca estudia",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "49",
        "English": "We'll talk tomorrow",
        "Spanish": "Hablamos mañana",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "50",
        "English": "Who are you talking with?",
        "Spanish": "¿Con quien hablas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "51",
        "English": "What are they talking about?",
        "Spanish": "De qué hablan?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "52",
        "English": "Tomorrow I'll talk with Anna",
        "Spanish": "Mañana hablo con Anna",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "53",
        "English": "Cecilio talks a lot",
        "Spanish": "Cecilio habla mucho",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "54",
        "English": "What are you talking about?",
        "Spanish": "¿De qué hablas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "55",
        "English": "Tomorrow I'll send you the papers",
        "Spanish": "Mañana te mando los papeles",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "56",
        "English": "We send a lot of texts",
        "Spanish": "Mandamos muchos textos",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "57",
        "English": "Will you send me the letter?",
        "Spanish": "¿Me mandas la carta?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "58",
        "English": "She'll send the letter on Monday",
        "Spanish": "Ella manda la carta el lunes",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "59",
        "English": "When will they send the package?",
        "Spanish": "¿Cuándo mandan el paquete?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "60",
        "English": "They'll send it next week",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "61",
        "English": "How much do we need?",
        "Spanish": "¿Cuanto necesitamos?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "62",
        "English": "Which one do you need?",
        "Spanish": "¿Cuál necesitas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "63",
        "English": "How much do they need?",
        "Spanish": "¿Cuánto necesitan?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "64",
        "English": "I need more time",
        "Spanish": "Necesito más tiempo",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "65",
        "English": "What does Marco need?",
        "Spanish": "¿Qué necesita Marco?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "66",
        "English": "What do you need to buy?",
        "Spanish": "¿Que necesitas comprar?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "67",
        "English": "I'll pay the bill",
        "Spanish": "Yo pago la cuenta",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "68",
        "English": "Where do we pay the bills?",
        "Spanish": "¿Dónde pagamos las cuentas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "69",
        "English": "You pay a lot for shoes",
        "Spanish": "Pagas mucho por zapatos",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "70",
        "English": "He always pays on time",
        "Spanish": "El siempre paga a tiempo",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "71",
        "English": "When do they pay us?",
        "Spanish": "¿Cuándo nos pagan?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "72",
        "English": "Do we pay now or later?",
        "Spanish": "¿Pagamos ahora o después?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "73",
        "English": "Where do we practice?",
        "Spanish": "¿Dónde practicamos?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "74",
        "English": "What days do you practice?",
        "Spanish": "¿Qué días practicas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "75",
        "English": "How much do they practice?",
        "Spanish": "¿Cuánto practican?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "76",
        "English": "She practices every day",
        "Spanish": "Ella practica todos los dias",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "77",
        "English": "I don't practice much",
        "Spanish": "No practico mucho",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "78",
        "English": "I want to practice more",
        "Spanish": "Deseo practicar mas", //why is this practicar?
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "79",
        "English": "When do they come back?",
        "Spanish": "¿Cuándo regresan?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "80",
        "English": "We'll be back tomorrow",
        "Spanish": "Regresamos mañana",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "81",
        "English": "I'll be back at three",
        "Spanish": "Regreso a las tres",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "82",
        "English": "What time does he come back?",
        "Spanish": "¿A qué hora regresa?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "83",
        "English": "Anna will come back early",
        "Spanish": "Anna regresa temprano",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "84",
        "English": "When will you come back?",
        "Spanish": "¿Cuándo regresas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "85",
        "English": "Do you play an instrument?",
        "Spanish": "¿Tocas un instrumento?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "86",
        "English": "I play the guitar",
        "Spanish": "(yo?) Toco la guitarra",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "87",
        "English": "What music are they playing?",
        "Spanish": "¿Qué música tocan?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "88",
        "English": "Cecilia plays the violin",
        "Spanish": "Cecilia toca el violín",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "89",
        "English": "Do you play piano?",
        "Spanish": "¿Tocas el piano?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "90",
        "English": "We play in a band",
        "Spanish": "Tocamos en una banda",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "91",
        "English": "What are you drinking?",
        "Spanish": "¿Qué tomas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "92",
        "English": "They drink a lot",
        "Spanish": "Ellos toman mucho",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "93",
        "English": "We drink a lot of wine",
        "Spanish": "Tomamos mucho vino",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "94",
        "English": "She never drinks coffee",
        "Spanish": "Ella nunca toma café",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "95",
        "English": "I don't drink anymore",
        "Spanish": "Yo ya no tomo",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "96",
        "English": "What are we drinking?",
        "Spanish": "¿Qué tomamos?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "97",
        "English": "Where do you work?",
        "Spanish": "¿Donde trabajas?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "98",
        "English": "Marco doesn't work",
        "Spanish": "Marco no trabaja",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "99",
        "English": "Where do we work today?",
        "Spanish": "¿Dónde trabajamos hoy?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "100",
        "English": "I work at night",
        "Spanish": "Trabajo de noche",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "101",
        "English": "When do they work?",
        "Spanish": "¿Ellos cuándo trabajan?",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "102",
        "English": "Does she work tomorrow?",
        "Spanish": "¿Ella trabaja mañana?",
        "English_Audio": "",
        "Spanish_Audio": ""
    }
]