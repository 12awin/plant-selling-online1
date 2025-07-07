document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const tree = document.getElementById("tree").value;
  const qty = document.getElementById("quantity").value;

  const message = `Thank you, ${name}! Your order for ${qty} ${tree}(s) has been received.`;
  document.getElementById("orderResult").textContent = message;

  this.reset();
});



let cart = [];

function addToCart(treeName, price) {
  const existing = cart.find(item => item.name === treeName);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name: treeName, price: price, quantity: 1 });
  }
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = total;
}

// Optional: Handle Order Form Submit
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const quantity = document.getElementById("quantity").value;

  document.getElementById("orderResult").textContent = `Thank you ${name}, your order for ${quantity} tree(s) will be delivered to: ${address}`;
  this.reset();
});
