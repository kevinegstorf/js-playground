// example 1
var subtotal = (13 + 1) * 5;
var shipping = 0.5 * (13+1);

var total = subtotal + shipping;

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

// example 2
var msg = "Sign up to receive our newsletter";
function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
}

updateMessage();
