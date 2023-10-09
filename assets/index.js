/*

// STRIPE INTEGRATION

let stripe = Stripe('pk_test_51Nto2BDRoA0SgYmiS2hVRGer44W86yXPrlf4B38qiaqPAKoNrCDwom2dLZOOKqcqOKqcVUVj5qSIBIiZF6LESo4q008IuRFOEt')

const payButton = document.querySelector("#checkout");

let products = [
  {
    name: "OLIFILM 50D",
    price:  "price_1Ntr4qDRoA0SgYmiuVcx3R8y"
  },
  {
    name: "OLIFILM 200T",
    price:  "price_1Ntr52DRoA0SgYmiS6ZSJQ9h"
  },
  {
    name: "OLIFILM 250D",
    price:  "price_1Ntr5TDRoA0SgYmiuxS7S6qp"
  },
  {
    name: "OLIFILM 500T",
    price:  "price_1Ntr5GDRoA0SgYmiz2KWOa1l"
  },
]

let shoppingCart = []

payButton.addEventListener("click", e => {
  const {error} = stripe.redirectToCheckout({
    lineItems: [
      {
        price: 'price_1Ntr5GDRoA0SgYmiz2KWOa1l', // Replace with the ID of your price
        quantity: 1,
      },
      {
        price: 'price_1Ntr5TDRoA0SgYmiuxS7S6qp', // Replace with the ID of your price
        quantity: 4,
      },
  ],
    mode: 'payment',
    billingAddressCollection: 'required',
    shippingAddressCollection: {
      allowedCountries: ["AC","AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CV","CW","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MK","ML","MM","MN","MO","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VA","VC","VE","VG","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW","ZZ"]
    },
    successUrl: 'http://127.0.0.1:5500/success.html',
    cancelUrl: 'http://127.0.0.1:5500/',
  })
})




// RATINGS CAROUSEL

new Flickity( '#ratings', {
    // options
    cellAlign: 'center',
    wrapAround: true,
    contain: true
});

*/


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
