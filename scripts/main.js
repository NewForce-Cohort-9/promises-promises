import { fetchData } from "./fetch.js"
import { fetchZodiacData } from "./async-await.js"

const container = document.querySelector("#container")

const render = async () => {

    const zodiacHTML = await fetchZodiacData()
    const poisonHTML = await fetchData()
  

 const newHTML = `
 <h1> The Poisons </h1>
${poisonHTML}

 <h1> The Zodiacs </h1>
${zodiacHTML}
 `   

 container.innerHTML = newHTML
}

render()