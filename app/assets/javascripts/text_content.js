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

// function area(width, height){
//   var el = document.getElementById('tester');
//   el.textContent = area;
//   return width * height;
// }
//
// var areaSize = area(3, 4);

// areaSize.document.getElementById('tester');

var hotel = {
  name: "L'europe",
  rooms: 500,
  booked: 250,
  checkAvailability: function () {
    return this.rooms - this.booked;
  }
};
