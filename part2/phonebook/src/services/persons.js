import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = ()  => {
   return axios
      .get(url)
      .then(response => {
          console.log('persons downloaded', response.data);
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
        .update(url+`/${person.id}`, person)
        .then(response => response)

export default {getAll, add, deletePerson, update}

        
