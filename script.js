

// Get Tab Values
const home = document.getElementById('home');
const skills = document.getElementById('skills');
const experience = document.getElementById('experience');
const about = document.getElementById('about');
const contacts = document.getElementById('contacts');

// Get Image ID value
const image = document.getElementById('Image');

image.addEventListener('click', function(e)  {
  
  // Hide Image
  image.style.visibility = 'hidden';

});


// Get a Random Integer
function randomInteger(max) {
  return Math.floor(Math.random()*(max + 1));
}

// Get a Random RGB Color Number
function randomRgbColor() {

  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);

  return [r,g,b];
}

// Convert Number to Hex
function randomHexColor() {

  let [r,g,b] =randomRgbColor();

  let hr = r.toString(16).padStart(2, '0');
  let hg = g.toString(16).padStart(2, '0');
  let hb = b.toString(16).padStart(2, '0');
  
  return "#" + hr + hg + hb;
}

// Change Background and Navigation Bar Color after clicking on the Home Tab on the Navigation Bar
home.addEventListener('click', function()  {
  
  document.body.style.backgroundColor = randomHexColor();
  document.getElementById('topnav').style.backgroundColor = randomHexColor();

});

// Change Background and Navigation Bar Color after clicking on the Skills Tab on the Navigation Bar
skills.addEventListener('click', function()  {
  
  document.body.style.backgroundColor = randomHexColor();
  document.getElementById('topnav').style.backgroundColor = randomHexColor();

});

// Change Background and Navigation Bar Color after clicking on the Experience Tab on the Navigation Bar
experience.addEventListener('click', function()  {
  
  document.body.style.backgroundColor = randomHexColor();
  document.getElementById('topnav').style.backgroundColor = randomHexColor();

});

// Change Background and Navigation Bar Color after clicking on the About Tab on the Navigation Bar
about.addEventListener('click', function()  {
  
  document.body.style.backgroundColor = randomHexColor();
  document.getElementById('topnav').style.backgroundColor = randomHexColor();

});

// Change Background and Navigation Bar Color after clicking on the Contacts Tab on the Navigation Bar
contacts.addEventListener('click', function()  {
  
  document.body.style.backgroundColor = randomHexColor();
  document.getElementById('topnav').style.backgroundColor = randomHexColor();

});

