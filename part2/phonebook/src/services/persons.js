import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = ()  => {
   return axios
      .get(url)
      .then(response => {
          return response.data
      })
    }

const add = person =>
    axios
        .post(url, person)
        .then(response => response.data)

const deletePerson = person =>
    axios
        .delete(url+`/${person.id}`)
        .then(response => response)

const update = person =>
    axios
        .put(url+`/${person.id}`, person)
        .then(response => response.data)

export default {getAll, add, deletePerson, update}

        
