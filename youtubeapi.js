$(document).ready(function() {

    var API_KEY = "AIzaSyB58v8FQf2ARu32WeXiQQsb3coxR19L7HM";
    
    // var video =''

    

    $("#form").submit(function(event){
        event.preventDefault()

        var search = $('#search').val()

        videoSearch(API_KEY, search, 1)


    })

    function videoSearch(key, search, maxResults){

        $("#videos").empty()
            
    // https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + key + "&type=video&q=
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search + "-trailer",
        function (data) {
            // console.log(data.items[0].id.videoId)

            data.items.forEach(item => {
                console.log(item.id.videoId);
                var video = $("<iframe>");
                var url = "https://www.youtube.com/embed/"+item.id.videoId;
                video.attr("src", url)
                
                
                // var video = $(`<iframe width="420" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" title="YouTube video player" frameborder="0" allow=" allowfullscreen>`)
console.log(video);
                $("#videos").append(video)
            })
        })


    }

})    
    