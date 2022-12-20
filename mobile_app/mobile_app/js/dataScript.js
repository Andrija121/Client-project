const output = document.querySelector(".output");
const output1 = document.createElement("div");
const ul = document.createElement("ul");
output.append(output1);
output.append(ul);
const url = "data.json";
let total = 0;

window.addEventListener("DOMContentLoaded", () => {
  output1.textContent = "ready";
  loadData();
});

function loadData() {
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      //console.log(data);
      addToPage(data);
    });
}

function addToPage(arr) {
  arr.forEach((el) => {
    //console.log(el);
    const li = document.createElement("li");
    li.textContent =
      el.name + ", " + el.quantity + ", " + el.price + "$, " + "       +";
    ul.append(li);
    li.addEventListener("click", (e) => {
      if (el.quantity <= 0) {
        li.textContent = el.name + " Product sold out " + el.price + "$";
        return;
      }
      el.quantity--;
      price = el.price;
      total += price;
      showTotal();
      li.textContent =
        el.name +
        ", " +
        el.quantity +
        ", " +
        el.price +
        "$, " +
        "       +" +
        total;
    });
  });
  function showTotal() {
    console.log(total);
    return total;
  }
}
