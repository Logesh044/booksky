var popupbutton=document.getElementById("addpopup-button")
var popupoverlay=document.getElementById("popup-overlay")
var popupcontent=document.getElementById("popup-content")
var cancelpopup=document.getElementById("cancel-popup")
popupbutton.addEventListener("click",function()
{
    popupoverlay.style.display="block"
    popupcontent.style.display="block"
})
cancelpopup.addEventListener("click",function(event){
event.preventDefault()
popupoverlay.style.display="none"
    popupcontent.style.display="none"
})
// add-book,book-title-input,book-author-input,book-description-area
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-area")
var container=document.querySelector(".container")
 
addbook.addEventListener("click",function(event){
 event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","book-container")
  div.innerHTML=`<h1>${booktitleinput.value}</h1>
  <h5>${bookauthorinput.value}</h5>
  <p>${bookdescriptioninput.value}</p>
 <button onclick="deleteitem(event)">Delete</button>`
  container.append(div)
  popupoverlay.style.display="none"
    popupcontent.style.display="none"
})
function deleteitem(event){
    event.target.parentElement.remove()
}
