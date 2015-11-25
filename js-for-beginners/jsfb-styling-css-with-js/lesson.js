function changeStyle() {
  var element = document.getElementById('first-container');
  //toggle colors
  if (element.style.color === 'white' && element.style.backgroundColor === 'red') {
    element.style.color = 'red';
    element.style.backgroundColor = 'white';
  } else {
    element.style.color = 'white';
    element.style.backgroundColor = 'red';
  }
}

//run once at the start to set the initial style attribute on the container
var element = document.getElementById('first-container');
element.style.color = 'white';
element.style.backgroundColor = 'red';
