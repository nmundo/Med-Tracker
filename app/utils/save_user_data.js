import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export {addNewMedicine, changeMedicine};

function addNewMedicine(name, time) {
    //const url = 'http://localhost:3333/medicinelist';
    axios.post('http://localhost:3333/addnewmedicine', {
        name: {name},
        time: {time},
        id: null
    });
}

function changeMedicine(id) {
    const url = 'http://localhost:3333/medicinedetails/' + id;
    {/*TODO add edit medicine logic*/}
}