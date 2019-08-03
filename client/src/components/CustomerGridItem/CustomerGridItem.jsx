import React, { Component } from 'react';
import "./CustomerGridItem.css";
import { deleteRecord, updateRecord } from "../Api";
import moment from "moment";

export default class CustomerGridItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.value.firstName,
            lastName: props.value.lastName,
            dob: moment(props.value.dob).format("YYYY-MM-DD"),
            age: props.value.age,
            address: props.value.address,
            disabled: true,
            error: ""
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.delete = this.delete.bind(this);
        this.save = this.save.bind(this);
        this.submitToServer = this.submitToServer.bind(this);
    }
    toggleEdit() {
        this.setState({ disabled: !this.state.disabled })

    }
    delete() {
        deleteRecord(this.props.value._id, (response) => {
            this.props.refreshRecords();
        })
    }
    save(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }
    submitToServer(event) {
        const Customer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dob: this.state.dob,
            age: this.state.age,
            address: this.state.address,
        };
        this.toggleEdit();
        updateRecord(this.props.value._id, Customer, (response) => {
            if (response.errmsg) {
                this.setState({ error: response.errmsg });
            }
        })
        event.preventDefault();
    }
    render() {
        return (
            <div className="p-2 border rounded-lg m-2 text-left cardWidth">
                <div className="form-group form-row">
                    <div className="col">
                        <label >First Name</label>
                        <input type="text" name="firstName" className="form-control" id="firstname" onChange={this.save} value={this.state.firstName} disabled={this.state.disabled} />
                    </div>
                    <div className="col">
                        <label >Last Name</label>
                        <input type="text" name="lastName" className="form-control" id="lastname" onChange={this.save} value={this.state.lastName} disabled={this.state.disabled} />
                    </div>
                </div>
                <div className="form-group">
                    <label >Date of Birth</label>
                    <input type="date" name="dob" className="form-control" id="dob" onChange={this.save} value={
                        this.state.dob} disabled={this.state.disabled} />
                </div>
                <div className="form-group">
                    <label >Age</label>
                    <input type="number" name="age" className="form-control" id="age" onChange={this.save} value={this.state.age} disabled={this.state.disabled} />
                </div>
                <div className="form-group">
                    <label >Address</label>
                    <textarea className="form-control" name="address" id="address" rows="3" onChange={this.save} value={this.state.address} disabled={this.state.disabled}></textarea>
                </div>
                {!this.state.disabled &&
                    (<button className="btn btn-outline-success m-1 float-right" onClick={this.submitToServer} type="submit" >Save </button>)
                }

                <button className="btn btn-outline-dark m-1 float-right" onClick={this.toggleEdit} >Edit</button>
                <button type="button" className="btn btn-outline-danger m-1 float-right" onClick={this.delete}>Delete</button>
            </div>
        )
    }
}
