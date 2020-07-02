import { connect } from 'react-redux';

import CustomerList from '../components/customerList/CustomerList';

import { getCustomers } from '../actions';

function mapStateToProps(state) {
    const { customer: customers } = state;
    return {
        customers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCustomers: () => {
            return dispatch(getCustomers())
        }
    }
}


export default connect(
    mapStateToProps, mapDispatchToProps,
)(CustomerList)
