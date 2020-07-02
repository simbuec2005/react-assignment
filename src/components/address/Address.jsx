import React from 'react';

import './Address.css';

class Address extends React.Component {
    componentDidMount() {
        const { customer: { id } } = this.props;
        this.props.getCustomerAddress(id);
    }


    render() {

        const { address, customer: { name } } = this.props;
        return (
            <div className="address-container">
                <h3 className="title">Adderesses of {name}</h3>
                {
                    address.loading ? (<div>Loading...</div>) : address.data.length > 0 ? address.data.map((address, index) => {
                        return (
                            <div key={index} className="address">
                                <address>
                                    {address.streetAddress},
                                    {address.city},
                                    {address.state},
                                    {address.postalCode}
                                </address>
                            </div>
                        )
                    }) : <div>No address assigned</div>
                }
            </div>
        )
    }

}

Address.defaultProps = {
    address: {
        data: [],
        loading: false
    }
}

export default Address;