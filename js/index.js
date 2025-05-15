const chars1 = {
    "Mario": "Mario",
    "Luigi": "Luigi",
    "Bowser": "Bowser Morton Koopa",
    "Peach": "Princesa Peach Toadstool",
    "Yoshi": "T. Yoshisaur Munchakoopas",
    "Toad": "Toad",
    "Toadette": "Toadette",
    "Daisy": "Princesa Daisy"
}

var arrChar = []

const readChars = async () => {
    const response = await fetch("data/chars.json", { method: "GET" })
    // await espera a que fetch devuelva datos para pasar de renglon
    const chars = await response.json()
    // movies en formato json
   // console.log(chars)
    return chars
}
let charActual = -1
// PUNTO 1

//selectedChar = prompt("¿Quién se presenta hoy? \n (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)")
//console.log("Se eligió : ", selectedChar)
// PUNTO 6 EL PROMPT VA AL BOTON

//console.log(spanTag.innerText)

//spanTag.innerText = selectedChar

//console.log(spanTag)
//console.log(chars[spanTag])
const spanTag = document.getElementsByTagName("span")[0] // trae un arrayPeachdddd
const leerChars = () => {
    readChars()
    .then( data => {
        
            // console.log(data)
            // PUNTO 2 MOSTRAR EL NOMBRE EN EL SPAN 

            nameExt = findChar(data)
            console.log("nombre largo ", nameExt)
            if (nameExt != -1)
            {
                spanTag.innerText = nameExt
                //showChar(selectedChar)
                
            }
            else
                spanTag.innerText = "(Desconocido)"     
            
        } 
    )
    .catch( 
        err => console.log(err)
        //spanTag.innerText = "(Desconocido)" 
    )
}

const addEvents = () => {
    readChars()
    .then( data => {
            constAddEvent(data)
        } 
    )
    .catch( 
        err => console.log(err)
        //spanTag.innerText = "(Desconocido)" 
    )
}


const findChar = array => {
    console.log(array)
    const indice = array.findIndex(personaje => personaje.name.toLowerCase() === selectedChar.toLowerCase())  // busca coincidencia
    if (indice == -1)
        return -1 // no existe el nombre

    indexActual = indice // para el cambio punto bonus
    console.log("findIndex ", indice)
    console.log(array[indice].extName)
    showChar(selectedChar)
    return array[indice].extName
}

const showChar = (selectedCharClick) => {
    //alert("por acaLuig")
    let idSelected = selectedCharClick.toLowerCase()
    console.log("id elemento seleccionado", idSelected)
    if (charActual == idSelected) // si se clickea el que está presionado
    {
        document.getElementById(charActual).setAttribute('title', "");   
        charActual = -1
        return 0    
    }
    //document.getElementById(idSelected).title = "Presentado"
    if (charActual != -1)
        document.getElementById(charActual).setAttribute('title', "");   
    document.getElementById(idSelected).setAttribute('title', "Presentado");
    
    charActual = idSelected // para el cambio punto bonus
   

}

const showPrompt = (personaje) => {
    if (personaje == "")
        selectedChar = prompt("¿Quién se presenta hoy? \n (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)")
    else 
        selectedChar = personaje
    console.log("Se eligió : ", selectedChar)
    let boton = document.getElementById("showButton")
    // boton.style.display = "none" punto 6 pide que desaparezca el boton
}

let boton = document.getElementById("showButton")
boton.addEventListener("click", function (e) {
    showPrompt("");
    leerChars();
});


const constAddEvent = (array) => {
    //alert("entra")
    for (char of array) 
    {
        // recorro los personajes y por cada uno le agrego el evento click
        console.log()
        let divChar = document.getElementById(char.name.toLowerCase())
        divChar.addEventListener("click", function (e) {
        showPrompt(divChar.id);

        leerChars();
    //        showChar(divChar.id)
            
        })
    }
}
addEvents() // leo el json y dentro llamo a la funcion constAddEvent