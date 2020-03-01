//===========================================
//VARIABLES
    
    
    //make an array of keywords
    var buttonArray = [
    "dog", "confused", "Garth Brooks", "Texas Longhorns", "Noel Fielding", "I Dream of Jeannie", "MST3K", "The Mighty Boosh", "GBBO", "Kurupt FM", "South Park", "Atlanta Braves", "The Office", "annoyed", "Pantone", "FRIENDS", "London", "unicorn", "dinosaur", "clouds", "srsly", "I Love Lucy",
];

//===========================================
//FUNCTIONS





function renderButtons(buttonArray,classToAdd,areaToAddTo){
    $(areaToAddTo).empty();
    for (var i = 0; i < buttonArray.length; i++)
    {
        var a = $('<button>');
        a.addClass('btn');
        a.addClass('keywordButton');
        a.attr('data-type',buttonArray[i]);
        a.html(buttonArray[i]);
        $(areaToAddTo).append(a);
    }
}

$(document).on("click", ".keywordButton", function() {
    var data = $(this).data('type');
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=1eoMKqWov4lRudP6LsC1de32vllX8xLa&q=" + data + "&limit=10&offset=10&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET",
        }).then(function(response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                var responseDiv = $("<div class='search-item'>");
                var rating = (response.data[i].rating);
                var ratingText = rating.toString();
                var ratingUppercase = ratingText.toUpperCase();
                var h5 = $('<h5>').html('Rating: <b>' + ratingUppercase);
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var image = $("<img>");
                image.attr('src', still);
                image.attr('data-still', still);
                image.attr('data-animated', animated);
                image.attr('data-state', 'still')
                image.addClass('searchImage');
                responseDiv.append(h5);
                responseDiv.append(image);
                $('#GIFimages').append(responseDiv);
            }
        })
})

$("#submit-button").on("click", function () {
    var newSearch = $('input').eq(0).val();
    buttonArray.push(newSearch);
    renderButtons(buttonArray, 'keywordButton', '#keyword-buttons');
    return false;
})

//=============================================
//CALL FUNCTIONS

//run these functions when the page loads
$(function(){
    //render the buttons when the page loads
    renderButtons(buttonArray,'keywordButton','#keyword-buttons');
})