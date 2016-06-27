var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 80;
hotel.booked = 49;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
