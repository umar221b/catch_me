// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap
//= require bootstrap-colorpicker
//= require rails-ujs
//= require turbolinks
//= require_tree .


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

subscribers = {};

function moveSubscriber(coordinates, user_info) {
  subscribers[user_info['name']].x = coordinates['x']
  subscribers[user_info['name']].y = coordinates['y']
}

function initializeSubscriber(user_info) {
  if (user_info['name'] in subscribers)
    return;
  var subscriber = { name: user_info['name'], color: user_info['color'], x: 300, y: 300 };
  subscribers[user_info['name']] = subscriber
}

function removeDisconnectedSubscriber(user_info) {
  delete subscribers[user_info['name']];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  $(window).resize(function() {
    resizeCanvas(windowWidth, windowHeight);
  });
  noStroke();
  ellipseMode(CENTER);
  textSize(18);
  textAlign(CENTER);
};

function draw() {
  clear();
  for (var key in subscribers) {
    if (subscribers.hasOwnProperty(key)) {
      var x = subscribers[key].x;
      var y = subscribers[key].y;
      fill(subscribers[key].color);
      ellipse(x, y, 10, 10);
      if (abs(mouseX - x) <= 10 && abs(mouseY - y) <= 10) {
        console.log(mouseX);
        fill(subscribers[key].color);
        text(subscribers[key].name, x, y - 10);
      }
    }
  }
};
