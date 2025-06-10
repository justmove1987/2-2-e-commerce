
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
const product = products.find(p => p.id === id);
if (!product) return;
const existing = cart.find(item => item.id === id);
if (existing) {
  existing.quantity += 1;
} else {
  cart.push({ ...product, quantity: 1 });
}
printCart();  
};




// Exercici 2
const cleanCart = () => {
cart.length = 0;
printCart();  
};


document.querySelectorAll('.add-to-cart').forEach(btn => {
btn.addEventListener('click', () => {
  const id = parseInt(btn.dataset.productId, 10);
  buy(id);
});
});

document.getElementById('clean-cart')
      .addEventListener('click', cleanCart);





// Exercici 3
const calculateTotal = () => {
let total = 0;
for (let i = 0; i < cart.length; i++) {
  const item = cart[i];
  total += item.price * item.quantity;
}
return total;
};




// Exercise 4
const applyPromotionsCart = () =>  {
cart.forEach(item => {
  if (item.offer && item.quantity >= item.offer.number) {
    const fullSubtotal = item.price * item.quantity;
    const discountFactor = 1 - item.offer.percent / 100;
    item.subtotalWithDiscount = parseFloat(
      (fullSubtotal * discountFactor).toFixed(2)
    );
  } else {
    delete item.subtotalWithDiscount;
  }
});
};





// Exercise 5

const printCart = () => {
applyPromotionsCart();
totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
totalPrice = cart.reduce((sum, item) => {
  return sum + (item.subtotalWithDiscount ?? (item.price * item.quantity));
}, 0);
document.getElementById('count_product').innerText = totalCount;
document.getElementById('total_price').innerText = `${totalPrice.toFixed(2)}`;
const tbody = document.getElementById('cart_list');
tbody.innerHTML = '';
cart.forEach(item => {
  const unitPrice = item.price.toFixed(2);  
  const qty       = item.quantity;
  let disc = 0;
if (item.offer && item.quantity >= item.offer.number) {
disc = item.offer.percent;
}       
  const lineTotal = (item.subtotalWithDiscount ?? (item.price * qty)).toFixed(2);
  tbody.insertAdjacentHTML('beforeend', `
    <tr>
      <th scope="row">${item.name}</th>
      <td>$${unitPrice}</td>
      <td>${qty}</td>
      <td>
        <button class="btn btn-sm btn-secondary decrease-qty" data-id="${item.id}">–</button>      
        <button class="btn btn-sm btn-secondary increase-qty" data-id="${item.id}">+</button>
      </td>
      <td>$${lineTotal}</td>
      <td>${disc}%</td>
    </tr>
  `);
});
};;


// ** Nivell II **

// Exercici 7: Disminueix la quantitat d’un producte o l’elimina si arriba a zero
const removeFromCart = (id) => {
const index = cart.findIndex(item => item.id === id);
if (index === -1) return;
const item = cart[index];
if (item.quantity > 1) {
  item.quantity -= 1;
} else {
  cart.splice(index, 1);
}
printCart();

};


document.addEventListener('DOMContentLoaded', () => {
document.getElementById('cart_list').addEventListener('click', e => {
  const btn = e.target;
  if (btn.classList.contains('increase-qty')) {
    buy(parseInt(btn.dataset.id, 10));
  }
  if (btn.classList.contains('decrease-qty')) {
    removeFromCart(parseInt(btn.dataset.id, 10));
  }
});
});