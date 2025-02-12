import { cart } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { getProduct } from "../../data/products.js";

export function renderPaymentSummary() {
    //1 save the data (mvc'deki modeli oluşturma)
    let productPriceCents = 0;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        
    });

    console.log(productPriceCents);


    //2 generate the html
    //3 make it interactive
}