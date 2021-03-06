var body = document.querySelector("#main");
var columns = document.querySelector(".columns")
console.log(body)
var urlData = document.location.search;
console.log(urlData)
var newUrlData=urlData.split('=');
console.log(newUrlData)
var finalData = newUrlData[1];



function getApi (){
    var kitsuBaseUrl = 'https://kitsu.io/api/edge';
    var kitsuCatUrl = `/anime?filter[categories]=${finalData}`;
    fetch(kitsuBaseUrl + kitsuCatUrl)
    .then(function (response){
        return response.json();
    })
    .then (function (data){
        console.log(data);
        for (var i=0; i < data.data.length; i++){
            var column = document.createElement("div")
            column.classList.add("column", "is-one-quarter")
            column.setAttribute("id", "columns")
            var card = document.createElement("div")
            card.classList.add("card")
            column.appendChild(card)
            var cardImage = document.createElement("div")
            cardImage.classList.add("card-image")
            card.appendChild(cardImage)
            var figure = document.createElement("figure")
            figure.classList.add("image", "is-4by3")
            cardImage.appendChild(figure);
            var image = document.createElement("img")
            var displayImage = data.data[i].attributes.posterImage.small
            image.setAttribute("src", displayImage)
            figure.appendChild(image)
            if (displayImage = null){
                image.removeAttribute("src", displayImage)
            }
            var cardContent = document.createElement("div")
            cardContent.classList.add("card-content")
            card.appendChild(cardContent)
            var media = document.createElement("div")
            media.classList.add("media")
            cardContent.appendChild(media)
            var mediaLeft = document.createElement("div")
            mediaLeft.classList.add("media-left")
            media.appendChild(mediaLeft)
            var mediaContent = document.createElement("div")
            mediaContent.classList.add("media-content")
            cardContent.appendChild(mediaContent)
            var para = document.createElement("p")
            para.classList.add("title", "is-4")
            mediaContent.appendChild(para)
            para.textContent= data.data[i].attributes.canonicalTitle
            var rating = document.createElement("p")
            mediaContent.appendChild(rating)
            rating.textContent = "Release Date: " + data.data[i].attributes.startDate
            var content = document.createElement("div")
            content.classList.add("content", "text", "text-margin")
            card.appendChild(content)
            content.textContent= data.data[i].attributes.description

            var viewTrailer = document.createElement("button")
            viewTrailer.textContent = "View Trailer"
            columns.appendChild(column)

        }
    })
}
getApi()