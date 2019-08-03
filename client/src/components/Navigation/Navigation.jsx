import React, { Component } from 'react';
import { addRecord } from "../Api"

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            dob: "",
            age: 0,
            address: ""
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }
    addCustomer(event) {
        let Customer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dob: this.state.dob,
            age: this.state.age,
            address: this.state.address
        }
        addRecord(Customer, (response) => {
            this.props.refreshRecords();
        });

        event.preventDefault();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <span className="navbar-brand">Customer Info</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown ">
                                <button className="nav-link dropdown-toggle btn my-2 my-sm-0" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Add Customer
                                </button>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <div className="p-2  rounded-lg m-3 text-left">
                                        <div className="form-group form-row">
                                            <div className="col">
                                                <label >First Name</label>
                                                <input type="text" name="firstName" className="form-control" id="firstname" onChange={this.handleChange} />
                                            </div>
                                            <div className="col">
                                                <label >Last Name</label>
                                                <input type="text" name="lastName" className="form-control" id="lastname" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label >Date of Birth</label>
                                            <input type="date" name="dob" className="form-control" id="dob" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label >Age</label>
                                            <input type="number" name="age" className="form-control" id="age" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label >Address</label>
                                            <textarea className="form-control" name="address" id="address" rows="3" onChange={this.handleChange} />
                                        </div>

                                        <button className="btn btn-outline-success m-1 float-right" type="submit" onClick={this.addCustomer}>Add</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
