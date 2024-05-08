//.then --- replaced by async/await


export const fetchPoisonsData = () => {
   return fetch("http://localhost:8088/poisons")
   .then((response) => response.json())
   
}