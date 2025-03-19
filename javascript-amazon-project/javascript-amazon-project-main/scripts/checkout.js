import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import '../data/car.js'
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

Promise.all([
  new Promise((resolve) => { //promises let us split the code
    loadProducts(() => {
        resolve('value1');
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve('value2');
    });
  })

]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

/*
new Promise((resolve) => { //promises let us split the code
    loadProducts(() => {
        resolve('value1');
    });

}).then((value) => {

  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
     resolve();
    });
  });

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
})
*/

//async function için, resolve en zaman yeni adıma geçileceğini kontrol ediyor.
/*
loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });  
});
*/
