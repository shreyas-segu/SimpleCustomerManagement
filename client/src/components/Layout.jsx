import React, { Component } from 'react'
import CustomerGrid from "./CustomerGrid/CustomerGrid";
import Nav from "./Navigation/Navigation"
import { getRecords } from "./Api";

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: []
        }
        this.getCustomers = this.getCustomers.bind(this);
        this.refreshRecords = this.refreshRecords.bind(this);
    }
    //getting records and passing as props
    getCustomers() {
        getRecords(response => {
            this.setState({ records: response });
        });
    }
    //used to reload the records in case of any additions, deletions or modifications
    refreshRecords() {
        this.getCustomers();
    }
    componentDidMount() {
        this.getCustomers();
    }
    render() {
        return (
            <div>
                <Nav refreshRecords={this.refreshRecords} />
                <CustomerGrid customers={this.state.records} refreshRecords={this.refreshRecords} />
            </div>
        )
    }
}
