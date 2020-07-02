import React from 'react';
import './Customer.css';
class Customer extends React.Component {

    render() {

        const { detail, handleClick } = this.props;
        return (
            <div className="customerRow" onClick={() => {
                handleClick(detail)
            }}>
                <div>{detail.id}</div>
                <div>{detail.name}</div>
                <div>{detail.age}</div>
            </div>
        )
    }

}

export default Customer;