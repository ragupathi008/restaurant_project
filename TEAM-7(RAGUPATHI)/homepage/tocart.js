// tocart.js

function AddToCart(itemId) {
  const item = document.getElementById(itemId);
  const itemData = {
    id: itemId,
    imgSrc: item.querySelector("img").src,
    title:
      item.querySelector(".title1")?.innerText ||
      item.querySelector(".content h2")?.innerText,
    size: item.querySelector("select")?.value || "N/A",
    price:
      parseInt(item.querySelector(".price h3")?.innerText.split(": ")[1]) || 0,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(itemData);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(
    `${itemData.title} (Size: ${itemData.size}, Price: ${itemData.price}) has been added to your cart.`
  );
}
