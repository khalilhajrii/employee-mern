import React, {Component} from 'react';
import axios from 'axios';
import {Table, Button} from 'react-bootstrap';
// To use routing functionalities
import {Link} from 'react-router-dom';
import '../index.css';
import EmployeeService from './Services';

var divStyle = {
    margin: '8% 8%'
};

class ListEmployee extends Component {

    constructor(props) {
        super(props);
        this.employeeService = new EmployeeService();
        this.state = {
            employees: []
        }
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount = () => {
        this.getEmployeeList();
    }

    // Get les employée
    getEmployeeList() {
        axios.get('http://localhost:4000/employees').then((response) => {
            console.log(response);
            this.setState({employees: response.data});
        }).catch((error) => {
            console.log(error);
        })
    }

    // Suppression des employées
    deleteEmployee(empid) {
        this.employeeService.deleteEmployee(empid);
        this.getEmployeeList();
    }

    render() {
        const {employees} = this.state;
        return (<div style={divStyle}>
            <Table responsive className='table table-striped'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Tel</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody> {
                    employees && employees.map((employee, i) => {
                        return (<tr key={i}>
                            <td> {i}</td>
                            <td> {
                                employee.nom
                            }</td>
                            <td> {
                                employee.prenom
                            }</td>
                            <td> {
                                employee.email
                            }</td>
                            <td> {
                                employee.tel
                            }</td>
                            <td>
                                <Link to={
                                        "editemployee/" + employee._id
                                    }
                                    className="btn btn-primary">Edit</Link>
                            </td>
                            <td>
                                <Button onClick={
                                        () => this.deleteEmployee(employee._id)
                                    }
                                    bsStyle="danger">Delete</Button>
                            </td>
                        </tr>)
                    })
                } </tbody>
            </Table>
        </div>);
    }
}

export default ListEmployee;
