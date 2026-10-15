// my_info.js

// Get the element
var elementcontact = document.getElementById('personal-contacts')
var elementaddress = document.getElementById('personal-address')

// Set the inner text
elementcontact.innerHTML = '<li><a href="https://uwaterloo.ca/combinatorics-and-optimization/">Department of Combinatorics and Optimization</a></li>'
elementcontact.innerHTML += '<li><a href="https://www.linkedin.com/in/leonardo-colo">Linkedin page</a></li>'
elementcontact.innerHTML += '<li>lcolo (at) uwaterloo (dot) ca</li>'
elementaddress.innerHTML = '<li>University of Waterloo</li>'
elementaddress.innerHTML += '<li>Mathematics and Computers (Office MC 5438)</li>'
elementaddress.innerHTML += '<li>200 University Avenue W. </li>'
elementaddress.innerHTML += '<li>Waterloo, ON N2L 3G1, Canada</li>'


//This happens on all pages but the Soutenance one
//where I want the date to be the one of the defense
var pathname = window.location.pathname; 
if (pathname !== 'soutenance.html'){
// Get the element
var elementupdate = document.getElementById('last-update')
// Set the inner text
elementupdate.innerText = 'Updated on October 15, 2026'
}