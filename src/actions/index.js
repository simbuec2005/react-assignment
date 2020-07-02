export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const GET_CUSTOMERS_SUCCESS = 'GET_CUSTOMERS_SUCCESS';
export const GET_CUSTOMER_ADDRESS = 'GET_CUSTOMER_ADDRESS';
export const GET_CUSTOMER_ADDRESS_SUCCESS = 'GET_CUSTOMER_ADDRESS_SUCCESS';

export function getCustomers() {
  return {
    type: GET_CUSTOMERS
  }
}

export function getCustomerAddress(customerId) {
  return {
    type: GET_CUSTOMER_ADDRESS,
    customerId
  }
}

export function getCustomersSuccess(customers) {
  return {
    type: GET_CUSTOMERS_SUCCESS,
    customers,
  }
}

export function getCustomerAddressSuccess(address) {
    return {
      type: GET_CUSTOMER_ADDRESS_SUCCESS,
      address
    }
  }
