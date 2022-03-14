window.addEventListener("load", CreateTableFromJSON);

function CreateTableFromJSON() {
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

            }
            // track++;

        }
        //track++;
    }

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
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "26",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "27",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "28",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "29",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "30",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "31",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "32",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "33",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "34",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "35",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "36",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "37",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "38",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "39",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "40",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "41",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "42",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "43",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "44",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "45",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "46",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "47",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "48",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "49",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "50",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "51",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "52",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "53",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "54",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "55",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "56",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "57",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "58",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "59",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "60",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "61",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "62",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "63",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "64",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "65",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "66",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "67",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "68",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "69",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "70",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "71",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "72",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "73",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "74",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "75",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "76",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "77",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "78",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "79",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "80",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "81",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "82",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "83",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "84",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "85",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "86",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "87",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "88",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "89",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "90",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "91",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "92",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "93",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "94",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "95",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "96",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "97",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "98",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "99",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "100",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "101",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "102",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "103",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    },
    {
        "PhraseID": "104",
        "English": "",
        "Spanish": "",
        "English_Audio": "",
        "Spanish_Audio": ""
    }
]