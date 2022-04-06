var searchBtn = document.querySelector(".searchBtn")
var userSearch = document.querySelector(".user-search")

searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    var captUserSearch = userSearch.value
    document.location.href="./results.html?search=" + captUserSearch
})