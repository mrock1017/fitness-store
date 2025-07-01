const products = [
  {
    id: 1,
    name: "Resistance Bands Set",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/71Q0npMVEHL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    name: "Massage Gun",
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/61LupRbQpDL._AC_SL1500_.jpg"
  },
  {
    id: 3,
    name: "Eco Yoga Mat",
    price: 34.99,
    image: "https://m.media-amazon.com/images/I/81bttqIKiXL._AC_SL1500_.jpg"
  },
  {
    id: 4,
    name: "Posture Corrector",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/61ZL1U6Fe9L._AC_SL1500_.jpg"
  }
];

const cart = {};

function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>$${p.price.toFixed(2)}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
    list.appendChild(div);
  });
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";
  const keys = Object.keys(cart);
  if (keys.length === 0) {
    cartDiv.textContent = "Cart is empty.";
    return;
  }

  let total = 0;
  keys.forEach(id => {
    const p = products.find(x => x.id == id);
    const qty = cart[id];
    const itemTotal = p.price * qty;
    total += itemTotal;
    const itemDiv = document.createElement("div");
    itemDiv.textContent = `${p.name} x ${qty} = $${itemTotal.toFixed(2)}`;
    cartDiv.appendChild(itemDiv);
  });

  const totalDiv = document.createElement("div");
  totalDiv.style.marginTop = "1em";
  totalDiv.style.fontWeight = "bold";
  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
  cartDiv.appendChild(totalDiv);
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
}

renderProducts();
renderCart();
