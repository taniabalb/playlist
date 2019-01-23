/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Faded Heart", "Loner", "Test Drive", "When the Party's Over"];
var artists = ["BORNS", "Yungblud", "Joji", "Billie Eilish"];
var songLength = ["3:34", "3:55", "2:59", "3:20"];
var images_links = ["https://i.ytimg.com/vi/Sd_nfwzdts8/maxresdefault.jpg", "https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/01/yb.jpg", "https://ssle.ulximg.com/image/750x750/cover/1539705337_20a0c7ddc9f895f81da7d31ae7fe08f9.jpg/2bf6b2a1b08b82aa73b972f8e35c2a87/1539705337_145841fca5f902efabd8eec788dc9f10.jpg", "https://theseymourowl.com/wp-content/uploads/2018/10/billie-eilish-when-the-partys-over_10358735-41560_1800x945-900x472.jpg"];
var links = ["https://open.spotify.com/album/0NkHrlwQStoPlpzw7G3GK5", "", "", ""];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song){
        $("#songs").append('<div class="title">  ' + song + '  </div>');
    });
    artists.forEach(function(artist){
        $("#artists").append('<div class="artist">  ' + artist + '  </div>');
    });

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
