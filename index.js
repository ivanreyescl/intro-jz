const precio = 400000
const precioSpan = document.querySelector(".precio-inicial")
const quantitySpan = document.querySelector(".cantidad")
const sum = document.querySelector("#sum")
const substract = document.querySelector("#substract")
const totalSpan = document.querySelector(".valor-total")

const updateTotal = () => {
  const quantity = quantitySpan.textContent
  const total = precio * quantity
  totalSpan.textContent = total
};

substract.addEventListener("click", () => {
  let quantity = quantitySpan.textContent
  if (quantity > 1) {
    quantity--
    quantitySpan.textContent = quantity
    updateTotal()
  }
})

sum.addEventListener("click", () => {
  let quantity = quantitySpan.textContent
  quantity++
  quantitySpan.textContent = quantity
  updateTotal()
})

