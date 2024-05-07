2; // const cartIcon = document.querySelector(".cart_icon");
// const cartTap = document.querySelector(".cart_tap");
// const closeBtn = document.querySelector(".close_btn");
// const productList = document.querySelector(".product_list");
// console.log(cartIcon);

// cartIcon.addEventListener("click", () => {
//   cartTap.style.transform = "translateX(0)";
// });
// closeBtn.addEventListener("click", () => {
//   cartTap.style.transform = "translateX(100%)";
// });

// const cart = [];

// async function main() {
//   const requestData = await fetch("../assets/products.json");
//   const datas = await requestData.json();

//   if (datas) {
//     productList.innerHTML = "";

//     datas.forEach((item) => {
//       const productElement = document.createElement("div");
//       productElement.classList.add("product");
//       productElement.dataset.id = item.id;
//       productElement.innerHTML = `

//     <img width="200" height="200" src=${item.image}
//     alt="">
//     <h3>${item.name}</h3>
//     <p>${item.price}₼</p>
//     <button class="add_to_cart_btn">ADD TO CART</button>
//     `;

//       productList.appendChild(productElement);
//     });
//     const products = productList.querySelectorAll(".product");

//     if (products) {
//       products.forEach((p) => {
//         p.querySelector(".add_to_cart_btn").addEventListener("click", () => {
//           addToCart(parseInt(p.dataset.id));
//         });
//       });
//     }
//   }
// }

// main();

// function addToCart(productId) {
//   const existItem = cart.findIndex((item) => {
//     return item.product_id === parseInt(productId);
//   });
//   if (cart.length <= 0) {
//     cart.push({
//       product_id:(productId),
//       quantity: 1,
//     });
//   }
//   else if (existItem < 0) {
//     cart.push({
//       product_id:(productId),
//       quantity: 1,
//     });
//   } else {
//     cart[existItem].quantity += 1;
//   }
// }

// function createCartItemElement(){

// }

const cartIcon = document.querySelector(".cart_icon");
const cartTap = document.querySelector(".cart_tap");
const closeBtn = document.querySelector(".close_btn");
const productList = document.querySelector(".product_list");
const cartList = cartTap.querySelector(".cart_list");

cartIcon.addEventListener("click", () => {
  cartTap.style.transform = "translateX(0)";
});
closeBtn.addEventListener("click", () => {
  cartTap.style.transform = "translateX(100%)";
});

const cart = []; 




async function main() {
  const requestData = await fetch("../assets/products.json");
  const datas = await requestData.json();

  if (datas) {
    productList.innerHTML = " ";
  }
  datas.forEach((item) => {
    const productElement = document.createElement("div");
    productElement.cartList.add("product");
    productElement.dataset.id = item.id;
    productElement.innerHTML = `
 <img width="200" height="200" src=${item.image}
     alt="">
     <h3>${item.name}</h3>
     <p>${item.price}₼</p>
     <button class="add_to_cart_btn">ADD TO CART</button>
 `;

    productList.appendChild(productElement);
  });
  const products = productList.querySelectorAll(".product");

  if (products) {
    products.forEach((p) => {
      p.querySelector(".add_to_cart_btn").addEventListener("click", () => {
        addToCrt(parseInt(p.dataset.id));
      });
    });
  }

  cartList.addEventListener("click", (event) => {
    if (
      event.target.cartList.contains("pilus") ||
      event.target.cartList.contains("minus")
    ) {
      const productId = parseInt(
        event.target.parentElement.parentElement.dataset.id
      );

      const itemId = cart.findIndex(function (item) {
        return item.product_id === productId;
      });
      // ask of teacher itemId i didnt get itemId

      let type = "minus";
      if (event.target.cartList.contains("pilus")) {
        type = "plus";
      }

      changeItemQuantity(itemId, type);
      createCartItemElement();
    }
  });

  function changeItemQuantity(id, type) {
    if (type === "pilus") {
      cart[id].quantity += 1;
    }
  }
  function addToCart(productId) {
    const existItem = cart.findIndex((item) => {
      return item.product_id === productId;
    });
    if (cart.length <= 0) {
      cart.push({
        product_id: productId,
        quantity: 1,
      });
    } else if (cart.length < 0) {
      cart.push({
        product_id: productId,
        quantity: 1,
      });
    }
    else {
      cart[existItem].quantity += 1
    }
    createCartItemElement()
    cartIcon.querySelector("& > span").innerHTML= cart.length;
  }

  function createCartItemElement() {
    if (cart.length) {
      cartList.innerHTML=""
      cart.forEach((item) =>{
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart_item");
        cartItem.dataset.id=item.product_id;

        const itemInfo =datas.find((data)=> data.id === item.product_id);
        cartItem.innerHTML = `
                <div class="image">
                  <img  src=${itemInfo.image}
                    alt="">
                  </div>
                  <div class="name">${itemInfo.name}</div>
                    <div class="price">${itemInfo.price}</div>
                    <div class="quantity">
                        <span class="minus">-</span>
                        <spam class="count">${item.quantity}</spam>
                        <span class="pilus">+</span>
                    </div>
    `;
        cartList.appendChild(cartItem);

      })
    }
  }
}
main();
