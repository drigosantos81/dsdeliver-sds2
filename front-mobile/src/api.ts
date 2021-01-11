import axios from "axios";

// const API_URL = 'http://localhost:8081';
const API_URL = 'https://sds2-rodrigo81.herokuapp.com';

export function fetchOrders() {
  return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number) {
  return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}