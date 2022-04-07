var searchBtn = document.querySelector(".searchBtn")
var userSearch = document.querySelector(".user-search")
var dropDown = document.querySelector("#dropdown")

searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    var captUserSearch = userSearch.value
    animeWatchList()
    storeAnimeNames()
    document.location.href="./results.html?search=" + captUserSearch
})

var searchGenre = document.querySelector(".searchGenre")
var userGenre = document.querySelector("#myList")

searchGenre.addEventListener("click", function(event){
event.preventDefault();
var captUserGenre = userGenre.value
document.location.href = "./resultsgenre.html?search=" + captUserGenre
})

var watchList = JSON.parse(localStorage.getItem("animeList"));
function animeWatchList () {
    watchList.push(userSearch.value)
    console.log(userSearch)
}
function storeAnimeNames() {
    localStorage.setItem("animeList", JSON.stringify(watchList));
  }
