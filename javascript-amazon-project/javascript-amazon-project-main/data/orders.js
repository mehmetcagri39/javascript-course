export const orders = JSON.parse(localStorage.getItem('orders')) || []; //default is empty array means no order

export function addOrder(order) {
    orders.unshift(order);
    saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}