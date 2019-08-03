import React, { Component } from 'react';
import CustomerGridItem from "../CustomerGridItem/CustomerGridItem"

export default class CustomerGrid extends Component {
    render() {
        const users = this.props.customers;
        const items = users.map((user) =>
            <CustomerGridItem key={user._id} value={user} refreshRecords={this.props.refreshRecords} />
        );
        return (
            <div className="p-2 mx-auto" >
                <div className="d-flex flex-row flex-wrap">
                    {items}
                </div>
            </div>
        )
    }
}
