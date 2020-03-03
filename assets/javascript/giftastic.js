//===========================================
//VARIABLES
    
    
    //make an array of keywords
    var buttonArray = [
    "dog", "confused", "Garth Brooks", "Texas Longhorns", "Noel Fielding", "I Dream of Jeannie", "MST3K", "The Mighty Boosh", "GBBO", "Kurupt FM", "South Park", "Atlanta Braves", "The Office", "annoyed", "Pantone", "FRIENDS", "London", "unicorn", "dinosaur", "clouds", "srsly", "I Love Lucy", "rly", "Brock Lesnar", "It's Always Sunny in Philadelphia"
];

//===========================================
//FUNCTIONS

$("#empty-button").on("click", function() {
    $("#GIFimages").empty();
    $(".load-more").empty();
})


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
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=1eoMKqWov4lRudP6LsC1de32vllX8xLa&q=" + data + "&limit=10&offset=20&lang=en";
    $.ajax({
        url: queryURL,
        method: "GET",
        }).then(function(response) {

            //for ever instace of response (10)
            for (var i = 0; i < response.data.length; i++) {
                //create a div with the class 'search-item'
                var responseDiv = $("<div class='search-item'>");
                //grab the rating of the GIF
                var rating = (response.data[i].rating);
                //grab the title of the GIF
                var name = (response.data[i].title);
                //turn the rating into a string
                var ratingText = rating.toString();
                //make the rating string uppercase
                var ratingUppercase = ratingText.toUpperCase();
                //store the title in h5
                var h5 = $('<h5>').html(name);
                //display the rating in an paragraph
                var p = $('<p>').html('Rating: <b>' + ratingUppercase);
                                                //store the animated state
                var animated = response.data[i].images.fixed_height.url;
                //store the still state
                var still = response.data[i].images.fixed_height_still.url;
                //create an image tag for the image
                var image = $("<img>");
                //add the still attribute on load
                image.attr('src', still);
                //create data-still attribute equal to still
                image.attr('data-still', still);
                //create the data-animated attribute equal to animated
                image.attr('data-animated', animated);
                //create the data-state equal to the string 'still'
                image.attr('data-state', 'still')
                //give the image the class of 'searchImage'
                image.addClass('searchImage');
                //append the h5/title into the responseDiv
                responseDiv.append(h5);
                //append the p/rating into the responseDiv
                responseDiv.append(p);
                //append the image into the responseDiv
                responseDiv.append(image);
                //prepend the responseDiv to the GIFImages section of the HTML page
                $('#GIFimages').prepend(responseDiv);

        } //end of for loop
        
        }).then(function() {
            $(".load-more").empty();
            var backToTopButton = $("<button style='margin: 10px; border: 2px solid white; border-radius: 5px; font-size: 20px;    font-weight: bold; text-decoration:none'>");
            backToTopButton.addClass("btn-dark keyword-button");
            backToTopButton.html('<a style="color:white; text-decoration:none;" href="#top">Back to Top</a>');
            $(".load-more").append(backToTopButton);
            })    
    })

    




$("#submit-button").on("click", function () {
    var newSearch = $('input').eq(0).val();
    buttonArray.push(newSearch);
    renderButtons(buttonArray, 'keywordButton', '#keyword-buttons');
    return false;
})


//make the GIF animate on click
$(document).on("click", '.searchImage', function () {
    var state = $(this).attr('data-state');
    if (state === 'still') {
        $(this).attr('src',$(this).data('animated'));
        $(this).attr('data-state','animated');
    } else {
        $(this).attr('src',$(this).data('still'));
        $(this).attr('data-state','still');
    }
})


//=============================================
//CALL FUNCTIONS

//run these functions when the page loads
$(function(){
    //render the buttons when the page loads
    renderButtons(buttonArray,'keywordButton','#keyword-buttons');
    //run addToFavorites

})