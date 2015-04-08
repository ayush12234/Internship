
function getContent(fragmentId){
var partials = {
home: "This is the Home page. Welcome to my site.",
about: "about.html",
contacts: "This is the Contact page."
};
return partials[fragmentId];
}
function navigate(){
var contentDiv = document.getElementById("content"),
fragmentId = location.hash.substr(1);
contentDiv.innerHTML = getContent(fragmentId);
}
if(!location.hash) {
location.hash = "#home";
}
navigate();
window.addEventListener("hashchange", navigate)