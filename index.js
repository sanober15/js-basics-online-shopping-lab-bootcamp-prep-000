var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart;
function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var price = getRandomInt(1,100);
  cart.push({[item]: price});

console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  // write your code here
  if (cart.length <= 0) {
        console.log("Your shopping cart is empty.");
    }
const l = cart.length;
      let cartList = [];

      for (let i = 0; i < l; i++) {
    let cartList = cart[i];
    let item = Object.keys(cart)[0];
    let price = cartList[item];

    cartList.push(`${item} at $${price}`);
  }
  switch(cartList.length) {
    case 1:
      break;
    case 2:
      cartList = cartList.join(" and ");
      break;
    default:
      cartList[l-1] = "and ".concat(cartList[l-1]);
      cartList = cartList.join(", ");
  }

  console.log(`In your cart, you have ${cartList}.`);
}


/*
      var itemContents = [];
      var x = 1;
               for (var i = 0; i < cart.length; i++) {
                   var item = Object.keys(cart[i])[0];
                   if ( x === cart.length ) {
                   itemContents.push(`${item} at $${cart[i][item]}`);
               }

               switch(itemContents.length) {
                  case 1:
                    break;
                  case 2:
                    itemContents = itemsContents.join(" and ");
                    break;
                  default:
                    itemContents[cart.length -1] = "and ".concat(itemContents[cart.length-1]);
                    itemContents = itemContents.join(", ");
                }

}         console.log("In your cart, you have " + itemContents.join(", ") + ".");
        }}

*/
function total() {
  // write your code here
  cart;
  var t = 0;

   for (var i = 0; i < cart.length; i++) {
     for (var item in cart[i]) {
       t += cart[i][item]
     }
   }
   return t;

}


function removeFromCart(item) {
  // write your code here
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);

  } }} else {
  console.log("That item is not in your cart.");
  }
}


function placeOrder(cardNumber) {
  // write your code here

  if (cardNumber=== undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");}
    else {

    var value = total();
    console.log(`Your total cost is $${value}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
  }

}


/*
function viewCart() {
  // write your code here
  if (cart.length <= 0) {
        console.log("Your shopping cart is empty.");
    }else {


  var s = "In your cart, you have "
      for (var i = 0; i < cart.length; i++) {
        var item = `${cart[i]}`
        var price = cart.item;
        var x =0;
        while(x < cart.length){
          s += `${item} at $${price},`
          ++x

        }
        s += 'and' + item + " at $" + price

      }
      return console.log(`${s}.`);
    }

}*/
