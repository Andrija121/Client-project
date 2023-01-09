const output = document.querySelector(".output");
const output1 = document.createElement("div");
const ul = document.createElement("ul");
output.append(output1);
output.append(ul);
const url = "data.json";
const url1 = "myList.json";
let total = 0;
// var ajaxhttp = new XMLHttpRequest();

// ajaxhttp.open("GET", url, true);
// ajaxhttp.setRequestHeader("content-type", "application/json");
// ajaxhttp.onreadystatechange = function () {
//   if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {
//     var jcontent = JSON.parse(ajaxhttp.responseText);
//     console.log(jcontent);
//     console.log(ajaxhttp);
//   }
// };
// ajaxhttp.send(url1);
// console.log(ajaxhttp);

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
      total += el.price;
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
      var newData = JSON.stringify(el);
      console.log(newData);
      AddToJSON();
      //url1.append(url, JSON.stringify(el));
    });
  });
  function showTotal() {
    console.log(total);
    return total;
  }
}
function AddToJSON() {
  var fs = require("fs");
  fs.writeFile(url1, "HelloWorld!", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
