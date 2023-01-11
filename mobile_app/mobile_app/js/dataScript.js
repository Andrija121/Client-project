// // const output = document.querySelector(".output");
// // const output1 = document.createElement("div");
// // const ul = document.createElement("ul");
// // output.append(output1);
// // output.append(ul);

// // const url1 = "myList.json";
// // let total = 0;
// // // var ajaxhttp = new XMLHttpRequest();

// // // ajaxhttp.open("GET", url, true);
// // // ajaxhttp.setRequestHeader("content-type", "application/json");
// // // ajaxhttp.onreadystatechange = function () {
// // //   if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {
// // //     var jcontent = JSON.parse(ajaxhttp.responseText);
// // //     console.log(jcontent);
// // //     console.log(ajaxhttp);
// // //   }
// // // };
// // // ajaxhttp.send(url1);
// // // console.log(ajaxhttp);

// // window.addEventListener("DOMContentLoaded", () => {
// //   output1.textContent = "ready";
// //   loadData();
// // });

// // function loadData() {
// //   fetch(url)
// //     .then((rep) => rep.json())
// //     .then((data) => {
// //       //console.log(data);
// //       addToPage(data);
// //     });
// // }

// // function addToPage(arr) {
// //   arr.forEach((el) => {
// //     //console.log(el);
// //     const li = document.createElement("li");
// //     const span = document.createElement("span");

// //     span.textContent = el.name;

// //     li.textContent =
// //       el.name + ", " + el.quantity + ", " + el.price + "$, " + "       +";
// //     ul.append(li);
// //     li.addEventListener("click", (e) => {
// //       if (el.quantity <= 0) {
// //         li.textContent = el.name + " Product sold out " + el.price + "$";
// //         return;
// //       }
// //       el.quantity--;
// //       total += el.price;
// //       showTotal();
// //       li.textContent =
// //         el.name +
// //         ", " +
// //         el.quantity +
// //         ", " +
// //         el.price +
// //         "$, " +
// //         "       +" +
// //         total;
// //       var newData = JSON.stringify(el);
// //       console.log(newData);
// //       AddToJSON();
// //       //url1.append(url, JSON.stringify(el));
// //     });
// //   });
// //   function showTotal() {
// //     console.log(total);
// //     return total;
// //   }
// // }
const url = "CPdata.json";
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });
function appendData(data) {
  var mainContainer = document.getElementById("myData");
  var total = 0;
  var p = document.createElement("p");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    total += data[i].price;

    div.innerHTML =
      data[i].name + "  _____________________________  " + data[i].price + " $";
    mainContainer.appendChild(div);
    p.innerHTML = "Total " + total.toFixed(2) + " $";

    mainContainer.appendChild(p);
  }
}
