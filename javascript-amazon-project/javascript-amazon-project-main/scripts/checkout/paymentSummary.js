import { calculateCartQuantity, cart } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { getProduct } from "../../data/products.js";
import { formatCurrency } from '../utils/money.js';

export function renderPaymentSummary() {
  //1 save the data (mvc'deki modeli oluşturma)
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  //2 generate the html (View)
  const paymentSummaryHTML = `
    <div class="payment-summary-title">
        Order Summary
    </div>

    <div class="payment-summary-row">
        <div class="js-order-summary-quantity">Items (${calculateCartQuantity()}):
</div>
        <div class="payment-summary-money">
            $${formatCurrency(productPriceCents)}
        </div>
    </div>

    <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">
            $${formatCurrency(shippingPriceCents)}
        </div>
    </div>

    <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">
            $${formatCurrency(totalBeforeTaxCents)}
        </div>
    </div>

    <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">
            $${formatCurrency(taxCents)}
        </div>
    </div>

    <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">
            $${formatCurrency(totalCents)}
        </div>
    </div>

    <button class="place-order-button button-primary">
        Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML;  
    
    
    //3 make it interactive (Controller - place order button)
    
    
}
