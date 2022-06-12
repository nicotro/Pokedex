import axios from 'axios'

const urlList = "https://pokeapi.co/api/v2/pokemon?limit=300"
const urlDetail = "https://pokeapi.co/api/v2/pokemon/"

export const getAll = async () => {
    return await axios.get(urlList);
}

export const getDetail = async (id) => {
    return await axios.get(urlDetail+(parseInt(id)+1));
}



