import { connect } from 'react-redux';

import Address from '../components/address/Address';

import { getCustomerAddress } from '../actions';

function mapStateToProps(state) {
    const { address } = state;
    return {
        address
    }
}

const mapDispatchToProps = dispatch => {
    return {        
        getCustomerAddress: (id) => {
            return dispatch(getCustomerAddress(id))
        }
    }
}


export default connect(
    mapStateToProps, mapDispatchToProps,
)(Address)
