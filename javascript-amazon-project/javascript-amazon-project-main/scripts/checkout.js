import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import '../data/car.js'
import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

new Promise((resolve) => {
    loadProducts(() => {
        resolve();
    });
}); 
//async function için, resolve en zaman yeni adıma geçileceğini kontrol ediyor.

loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
