import { API_URL } from '../config/basic';

export function getEmployeesData() {
    return fetch(API_URL).then(response => { 
            return response.json()});
}
