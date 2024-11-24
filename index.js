const precio = 400000
const precioSpan = document.querySelector(".precio-inicial")
const quantitySpan = document.querySelector(".cantidad")
const sum = document.querySelector("#sum")
const substract = document.querySelector("#substract")
const totalSpan = document.querySelector(".valor-total")

const updateTotal = () => {
  const quantity = quantitySpan.innerHTML
  const total = precio * quantity
  totalSpan.innerHTML = total
};

substract.addEventListener("click", () => {
  let quantity = quantitySpan.innerHTML
  if (quantity > 1) {
    quantity--
    quantitySpan.innerHTML = quantity;
    updateTotal()
  }
})

sum.addEventListener("click", () => {
  let quantity = quantitySpan.innerHTML
  quantity++
  quantitySpan.innerHTML = quantity
  updateTotal()
})

