chars1 = {
    "Mario": "Mario",
    "Luigi": "Luigi",
    "Bowser": "Bowser Morton Koopa",
    "Peach": "Princesa Peach Toadstool",
    "Yoshi": "T. Yoshisaur Munchakoopas",
    "Toad": "Toad",
    "Toadette": "Toadette",
    "Daisy": "Princesa Daisy"
}
const readChars = async () => {
    const response = await fetch("data/chars.json", { method: "GET" })
    // await espera a que fetch devuelva datos para pasar de renglon
    const chars = await response.json()
    // movies en formato json
   // console.log(chars)
    return chars
}


selectedChar = prompt("¿Quién se presenta hoy? \n (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)")
console.log("Se eligió : ", selectedChar)

const spanTag = document.getElementsByTagName("span")[0] // trae un array
console.log(spanTag.innerText)

spanTag.innerText = selectedChar

console.log(spanTag)
//console.log(chars[spanTag])

readChars()
    .then( data => {
        
       // console.log(data)
        findChar(data)
        } 
    )
    .catch( err => console.log(err) )


const findChar = array => {
    console.log(array)
    const indice = array.findIndex(personaje => personaje.name === selectedChar)  // busca coincidencia
    console.log("findIndex", indice)
    console.log(array[indice].extName)
}