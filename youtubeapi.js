$(document).ready(function() {
// youtube API Key
    var API_KEY = "AIzaSyDDwKCp2rr58dTbORH9RIfuBJ0alJY8PSY";
   

    $("#form").submit(function(event){
        event.preventDefault()

        var search = $('#search').val()

        videoSearch(API_KEY, search, 1)

    })
//retrieving video from API
    function videoSearch(key, search, maxResults){
//clears video 
        $("#videos").empty()
            

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search + "-trailer" + "-anime",
        function (data) {
            // console.log(data.items[0].id.videoId)

            data.items.forEach(item => {
                console.log(item.id.videoId);
                var video = $("<iframe>");
                var url = "https://www.youtube.com/embed/"+item.id.videoId;
                video.attr("src", url)
                         
                
console.log(video);
// append video to videos div
                $("#videos").append(video)
            })
        })


    }

})    
    