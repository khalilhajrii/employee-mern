import axios from 'axios';

class EmployeeService {

    deleteEmployee(id) {
        axios.get('http://localhost:4000/employees/deleteEmployee/' + id).then(() => {
            console.log('Employée a été supprimé')
        }).catch((error) => {
            console.log(error)
        })
    }
}

export default EmployeeService;
