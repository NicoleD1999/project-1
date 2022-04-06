var searchBtn = document.querySelector(".searchBtn")
var userSearch = document.querySelector(".user-search")

searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    var captUserSearch = userSearch.value
    document.location.href="./results.html?search=" + captUserSearch
})

var searchGenre = document.querySelector(".searchGenre")
var userGenre = document.querySelector("#myList")

searchGenre.addEventListener("click", function(event){
event.preventDefault();
var captUserGenre = userGenre.value
document.location.href = "./resultsgenre.html?search=" + captUserGenre
})