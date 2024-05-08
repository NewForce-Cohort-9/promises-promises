
// Old Way:
// const getPoisonArray = () => {
//     return database.poisons.map((singlePoison) => {...singlePoison})
// }

//import {getPoisonArray} from "./database.js"

//const poisons = getPoisonArray()


export const fetchZodiacData = async() => {
    const response = await fetch("http://localhost:8088/zodiacs") // dirty money
    const zodiacs = await response.json() // money gets laundered 
 
    let zodiacHTML = ``
    const divStringArray = await zodiacs.map( //clean money that you can manipulate
        (singleZodiac) => {
            return `
            <div> ${singleZodiac.name} </div>

            <div> ${singleZodiac.wvAnimal} </div>
            `
        }
    )
    zodiacHTML += divStringArray.join("-hot diggity - that's fancy -")

    return zodiacHTML
}