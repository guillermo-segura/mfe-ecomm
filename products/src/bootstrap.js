import faker from 'faker';

const mount = (element) => {
  let products = '';
  
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
  }

  element.innerHTML = products
  // ReactDOM.render(<App />, element);
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  if (el) {
    mount(el);
  }
};

export { mount };
