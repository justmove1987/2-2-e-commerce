
// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

let totalCount = 0;
let totalPrice = 0;




// Exercici 1
const buy = (id) => {
  // Busquem el producte corresponent a l'id dins l'array products
  const product = products.find(p => p.id === id);
  // Si no existeix el producte, sortim de la funció
  if (!product) return;
  // Comprovem si ja hi ha aquest producte al carret
  const existing = cart.find(item => item.id === id);
  if (existing) {
    // Si ja existeix, incrementem la seva quantitat
    existing.quantity += 1;
  } else {
    // Si no existeix, creem una nova entrada amb quantitat 1
    cart.push({ ...product, quantity: 1 });
  }
  // Actualitzem la interfície del carret
  printCart();  // <-- actualitzem la UI!
};




// Exercici 2
const cleanCart = () => {
  // Buidem l'array cart mantenint la referència
  cart.length = 0;
  // Tornem a actualitzar la interfície del carret
  printCart();  // <-- i aquí també!
};

// Enllaçem esdeveniments un cop el DOM estigui carregat
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    // Convertim l'atribut data-product-id a nombre
    const id = parseInt(btn.dataset.productId, 10);
    // Cridem la funció buy per afegir el producte
    buy(id);
  });
});

// Botó per buidar el carret
document.getElementById('clean-cart')
        .addEventListener('click', cleanCart);





// Exercici 3
const calculateTotal = () => {
  let total = 0;
  // Recorrem cada element del carret i sumem preu * quantitat
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total += item.price * item.quantity;
  }
  return total;
};




// Exercise 4
const applyPromotionsCart = () =>  {
  // Recorrem tots els elements del carret
  cart.forEach(item => {
    // Si el producte té una oferta definida...
    if (item.offer && item.quantity >= item.offer.number) {
      // Calculem el preu total sense descompte
      const fullSubtotal = item.price * item.quantity;
      // Factor de descompte (per exemple, 20% → 0.8)
      const discountFactor = 1 - item.offer.percent / 100;
      // Guardem el subtotal amb descompte (rodonit a 2 decimals)
      item.subtotalWithDiscount = parseFloat(
        (fullSubtotal * discountFactor).toFixed(2)
      );
    } else {
      // Si no toca descompte, eliminem qualsevol camp anterior
      delete item.subtotalWithDiscount;
    }
  });
};





// Exercise 5

// Actualitza la interfície del carret: badge, total i taula
const printCart = () => {
  // 0) Apliquem les promocions abans de qualsevol càlcul
  applyPromotionsCart();

  // 1) Calculem totalCount (nombre total d'unitats) i totalPrice
  totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  // Utilitzem el subtotal amb descompte si existeix, altrament preu normal
  totalPrice = cart.reduce((sum, item) => {
    return sum + (item.subtotalWithDiscount ?? (item.price * item.quantity));
  }, 0);

  // 2) Actualitzem el badge (nombre d'articles) i el total
  document.getElementById('count_product').innerText = totalCount;
  document.getElementById('total_price').innerText = totalPrice.toFixed(2);

  // 3) Refresquem la taula del carret
  const tbody = document.getElementById('cart_list');
  // Netejem contingut anterior
  tbody.innerHTML = '';
  // Inserim una fila per cada element del carret
  cart.forEach(item => {
    const unitPrice = item.price.toFixed(2);  // Preu unitari amb 2 decimals
    const qty       = item.quantity;          // Quantitat
    // Línia total: aplica descompte si hi és, sinó preu * quantitat
    const lineTotal = (item.subtotalWithDiscount ?? (item.price * qty)).toFixed(2);
    tbody.insertAdjacentHTML('beforeend', `
      <tr>
        <th scope="row">${item.name}</th>
        <td>$${unitPrice}</td>
        <td>${qty}</td>
        <td>$${lineTotal}</td>
      </tr>
    `);
  });
};;


// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

}

const open_modal = () =>  {
    printCart();
}