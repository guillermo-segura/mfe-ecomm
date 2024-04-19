import { mount as productMount } from 'products/ProductIndex';
import { mount as cartMount } from 'cart/CartShow';

productMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));

console.log('Container!');
