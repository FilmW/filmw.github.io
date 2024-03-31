


// PARRALAX BACKGROUNDS

const parallax_down = document.getElementsByClassName('parallax_down');
new simpleParallax(parallax_down, {
	orientation: 'down',
  delay: 0.2,
  scale: 1.2,
  transition: 'cubic-bezier(0,0,0,1)'
}); 

const parallax_up = document.getElementsByClassName('parallax_up');
new simpleParallax(parallax_up, {
	orientation: 'up',
  delay: 0.2,
  scale: 1.2,
  transition: 'cubic-bezier(0,0,0,1)'
}); 

/* HOVER CARD EFFECT */

document.getElementById("hovereffect").onmousemove = e => {
    for(const card of document.getElementsByClassName("hoverelem")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
}

// NAVBAR

const navBar = document.querySelector("nav");

function scrollObserver() {
  const y = window.scrollY;

  if (y > window.innerHeight) {
    navBar.classList.remove("hidden");
  } else {
    navBar.classList.add("hidden");
  }
}

window.addEventListener("scroll", scrollObserver);

// Close after clicking link

const links = document.querySelectorAll("nav > .links > a");
const toggle = document.querySelector("#toggle");

links.forEach(link => {
  link.addEventListener("click", e => {
    toggle.checked = false;
  })
});

// ESHOP

document.querySelectorAll(".product").forEach(product => {
  const amount = product.querySelector(".amount");

  product.querySelector(".plus").addEventListener("click", e => {
    if(amount.innerText - 0 < 20) {
      amount.innerText = amount.innerText - 0 + 1;
    }
  })
  product.querySelector(".minus").addEventListener("click", e => {
    if(amount.innerText - 0 > 0) {
      amount.innerText = amount.innerText - 1;
    }
  })


});

document.querySelector("#checkout").addEventListener("click", e => {
  e.preventDefault();

  let itemsOrdered = 0;
  
  const order = {};
  document.querySelectorAll(".product").forEach(product => {
    const amount = product.querySelector(".amount").innerText - 0;

    itemsOrdered = itemsOrdered + (amount - 0);
  
    order[product.dataset.productid] = amount
  });

  const checkout_error = document.querySelector("#checkout_error");


  if(itemsOrdered > 0) {
    // Proceed
    checkout_error.classList.add("hidden");
    const url = `https://flare35.deno.dev/pay?50D=${order['50D']}&200T=${order['200T']}&250D=${order['250D']}&500T=${order['500T']}`;
    window.location = url;

  } else {
    checkout_error.classList.remove("hidden");
    checkout_error.innerText = "Cannot checkout an empty order";
  }
  console.log(order);
  
});