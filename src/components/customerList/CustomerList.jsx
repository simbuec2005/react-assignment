import React from 'react';
import Customer from '../customer/Customer';
import AddressContainer from '../../containers/AddressContainer';
import './CustomerList.css';

class CustomerList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customer: null
        }
    }

    componentDidMount() {
        this.props.getCustomers();
    }

    handleCustomerSelection = (customer) => {
        this.setState({
            customer
        })
    }

    render() {
        const { customers } = this.props;
        const { customer } = this.state;
        return (
            <div className="container">
                <div className="customet-list">
                    <div className="customet-list-header">
                        <div className="col">ID</div>
                        <div className="col">NAME</div>
                        <div className="col">AGE</div>
                    </div>
                    {
                        customers.loading ? <div>Loading...</div> : customers.data.map(customer => {
                            return <Customer key={customer.id} detail={customer} handleClick={this.handleCustomerSelection} />
                        })
                    }
                </div>

                {customer && <AddressContainer customer={customer} />}
            </div>
        )
    }

}

CustomerList.defaultProps = {
    customers: {
        data: [],
        loading: false
    }
}

export default CustomerList;