/* eslint-disable no-async-promise-executor */
import httpCommun  from "../api/http-commun"


class PersonService {
    static getPersons() {
        return new Promise( async (resolve, reject) =>{
            try {
               const res = await  httpCommun.get('/persons');

               const data = res.data
               resolve(data)
            } catch (error) {
                reject(error)
                console.log(error)
            }
        } ) 
    }
    // get one Person
    static getOnePerson(_id) {
        return new Promise( async (resolve, reject) =>{
            try {
               const res = await  httpCommun.get(`/persons/${_id}`);
               const data = res.data
               resolve(data)
            } catch (error) {
                reject(error)
                console.log(error)
            }
        } ) 
    }
    static createOnePerson(person) {
        return new Promise( async (resolve, reject) =>{
            try {
               const res = await  httpCommun.post(`/persons`, {person});
               const data = res.data
               resolve(data)
            } catch (error) {
                reject(error)
                console.log(error)
            }
        } ) 
    }
    static deletePerson(id) {
        return new Promise( async (resolve, reject) =>{
            try {
               const res = await  httpCommun.delete(`/persons/${id}` );
               const data = res.data
               resolve(data)
            } catch (error) {
                reject(error)
                console.log(error)
            }
        } ) 
    }
    static editPerson(person) {
        return new Promise( async (resolve, reject) =>{
            try {
               const res = await  httpCommun.patch(`/persons/${person._id}`, {person});
               const data = res.data
               resolve(data)
            } catch (error) {
                reject(error)
                console.log(error)
            }
        } ) 
    }
}

export default PersonService    