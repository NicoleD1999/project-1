var searchBtn = document.querySelector(".searchBtn")
var userSearch = document.querySelector(".user-search")
var dropDown = document.querySelector("#dropdown")

searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    var captUserSearch = userSearch.value
    document.location.href="./results.html?search=" + captUserSearch
    animeWatchList()
    storeAnimeNames()
})

var searchGenre = document.querySelector(".searchGenre")
var userGenre = document.querySelector("#myList")

searchGenre.addEventListener("click", function(event){
event.preventDefault();
var captUserGenre = userGenre.value
document.location.href = "./resultsgenre.html?search=" + captUserGenre
})

var watchList = [];
function animeWatchList () {
    watchList.push(userSearch.value)
}
function storeAnimeNames() {
    localStorage.setItem("animeList", JSON.stringify(watchList));
  }
