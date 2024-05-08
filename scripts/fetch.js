
// Old Way:
// const getPoisonArray = () => {
//     return database.poisons.map((singlePoison) => {...singlePoison})
// }

//import {getPoisonArray} from "./database.js"

//const poisons = getPoisonArray()


export const fetchData = async() => {
    const response = await fetch("http://localhost:8088/poisons")
    const poisons = await response.json()
  const errorMessage = "Oh no. It's broken"


    let poisonHTML = `<div>`
    try {

        const divStringArray = await poisons.map(
            (singlePoison) => {
                return `
                <div> ${singlePoison.species} </div>
                `
            }
        )
        poisonHTML += divStringArray.join("")
    }
    catch {
        console.log(errorMessage)
    }

    return poisonHTML
}