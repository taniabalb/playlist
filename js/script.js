/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Faded Heart", "Loner", "Test Drive", "Bury a Friend"];
var artists = ["BORNS", "Yungblud", "Joji", "Billie Eilish"];
var songLength = ["3:34", "3:55", "2:59", "3:20"];
var images_links = ["https://i.ytimg.com/vi/Sd_nfwzdts8/maxresdefault.jpg", "https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/01/yb.jpg", "https://ssle.ulximg.com/image/750x750/cover/1539705337_20a0c7ddc9f895f81da7d31ae7fe08f9.jpg/2bf6b2a1b08b82aa73b972f8e35c2a87/1539705337_145841fca5f902efabd8eec788dc9f10.jpg", "https://theseymourowl.com/wp-content/uploads/2018/10/billie-eilish-when-the-partys-over_10358735-41560_1800x945-900x472.jpg"];
var links = ["https://open.spotify.com/album/0NkHrlwQStoPlpzw7G3GK5", "https://open.spotify.com/album/00YBdFjhzULIC5bE3QJxAa", "https://open.spotify.com/album/34GQP3dILpyCN018y2k61L", "https://open.spotify.com/album/0lheRPWdziAtZEiww8TrUO"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    images_links.forEach(function(image){
       $("#images").append('<div class="column">  <img src="' + image + '">  </div>');
    });
    artists.forEach(function(artist){
        $("#artists").append('<div class="column">  ' + artist + '  </div>');
    });
    songs.forEach(function(song){
        $("#songs").append('<div class="column">  ' + song + '  </div>');
    });
    songLength.forEach(function(lengths){
        $("#lengths").append('<div class="column">  ' + lengths + '  </div>');
    });
    links.forEach(function(link){
        $("#links").append('<div class="column">  ' + link + '  </div>');
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var song = $("#song").val();
    songs.push(song);
    console.log(songs);
    
    var artist= $("#artist").val();
    artists.push(artist);
    
    var length= $("#length").val();
    songLength.push(length);
    
    var image= $("#image").val();
    images_links.push(image);
    
    var link= $("#link").val();
    links.push(link);
    
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
