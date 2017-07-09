import axios from 'axios';

const BASE_URL = 'http://192.168.1.42:3333';

export {getUserMedicines, getIndividualMedicine};

function getUserMedicines() {
    const url = BASE_URL + '/medicinelist';
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

function getIndividualMedicine(id) {
    const url = BASE_URL + '/medicinedetails/' + id;
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}