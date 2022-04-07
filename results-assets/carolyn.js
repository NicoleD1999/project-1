// modal
// active button
$(document).ready(function () {
    const mainEl = document.querySelector('#main');
    const modalBg = document.querySelector('.modal-background');
    const modal = document.querySelector('.modal')
    var API_KEY = "AIzaSyDDwKCp2rr58dTbORH9RIfuBJ0alJY8PSY";

    //close button
    const infoButtonModal = document.querySelector('#infoBtnModal')
    // var searchTitle = "";

    mainEl.addEventListener('click', (event) => {

        if (event.target.matches("#infoBtn")) {
            console.log("working", event.target.dataset)
            // //    document.location.href = "?title="+event.target.dataset.title;
            //     console.log(event.target.dataset.youtubeid)
            modal.classList.add('is-active');
            if (event.target.dataset.youtubeid !== null) {

                videoSearch(API_KEY, event.target.dataset.youtubeid)
            }

            else {

                $(".imgNone").removeAttr("id");

            }

        }
    });

    modalBg.addEventListener('click', () => {
        modal.classList.add('is-active');
    });

    infoButtonModal.addEventListener('click', () => {
        modal.classList.remove('is-active');
    });


    function videoSearch(key, searchId) {
        //clears video 
        $("#videos").empty()
        console.log(searchId);


        $.get("https://www.googleapis.com/youtube/v3/videos?key=" + key + "&type=video&part=snippet&maxResults=1&id=" + searchId,
            function (data) {
                console.log(data)

                data.items.forEach(item => {
                    console.log(item.id);
                    var video = $("<iframe>");
                    var url = "https://www.youtube.com/embed/" + item.id;
                    video.attr("src", url)


                    console.log(video);
                    // append video to videos div
                    $("#videos").append(video)
                })
            })


    }
});