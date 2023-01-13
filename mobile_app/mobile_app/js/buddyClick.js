function changeText() {
  var text = document.getElementById("tiger");
  var item1 = document.getElementById("item1");
  var item2 = document.getElementById("item2");
  var item3 = document.getElementById("item3");
  var item4 = document.getElementById("item4");
  var h1 = document.getElementById("tigerSays");
  text.style.cursor = "pointer";
  const items = [item1, item2, item3, item4];
  let random = Math.floor(Math.random() * 20) + 1;

  text.onclick = function () {
    h1.textContent = "Please select the an item";

    for (let i = 0; i < items.length; i++) {
      items[i].style.cursor = "pointer";
      items[i].onclick = function () {
        h1.textContent = "Please go to section " + random;
        setTimeout(() => {
          window.location.href = "./buddyToScreenPage.html";
        }, 5000);
      };
    }
  };
}
