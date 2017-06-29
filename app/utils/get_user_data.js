import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export {getUserMedicines, getIndividualMedicine};

function getUserMedicines() {
    const url = 'http://localhost:3333/medicinelist';
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

function getIndividualMedicine(id) {
    const url = 'http://localhost:3333/medicinedetails/' + id;
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}