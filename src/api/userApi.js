import 'whatwg-fetch';
import getBaseUrl from './baseUrl.js'


const baseUrl = getBaseUrl();

export function getUsers(){
    return get('Users')
}


function get(resource){
    return fetch.get(baseUrl + resource).then(onSucess , onError)
}


function onSucess(response){
    return response.json()
}


function onError(error){
    console.log(error) //eslint-disable-line no-console
}