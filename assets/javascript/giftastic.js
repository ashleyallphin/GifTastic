//===========================================
//VARIABLES
    
    
    //make an array of keywords
    var buttonArray = [
    "dog", "baseball", "Garth Brooks", "Texas Longhorns", "Noel Fielding", "The Mighty Boosh", "GBBO", "Kurupt FM", "Maria Sharapova", "Atlanta Braves", "The Office", "annoyed", "Pantone", "FRIENDS", "London", "unicorn", "dinosaur", "clouds"
];

//===========================================
//FUNCTIONS

//function for putting the array buttons on the page

function renderButtons() {

// Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary, or we would have repeat buttons)
        $("#GIFimages").empty();

        //loop through array
    for (var i=0; i<buttonArray.length; i++) {
        //console.log(buttonArray[i]);

          // create a button for each category in the array.
          var a = $("<button>");
          // Adding a class
          a.addClass("category");
          a.addClass("btn");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-category", buttonArray[i]);
          // Providing the button's text with a value of the movie at index i
          a.html(buttonArray[i]);
          // Adding the button to the HTML
          $(".keyword-buttons").append(a);

          //console.log(a);

}}

renderButtons();


$('button').on("click", function() {
    
    $("#GIFimages").empty();

    var data = $(this).data("category");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=1eoMKqWov4lRudP6LsC1de32vllX8xLa&q=" + data + "&limit=10&offset=10&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET",
        }).then(function(response) {
            for (var i=0; i<response.data.length; i++) {
                
                var result = $('<div>');
                var rating = (response.data[i].rating);
                var ratingText = rating.toString();
                var ratingUppercase = ratingText.toUpperCase();
                var h5 = $('<h5>').html('Rating: <b>' + ratingUppercase);
                var GIFimage = $('<img>');
                GIFimage.attr('src',response.data[i].images.fixed_height_still.url);
                result.append(h5);
                result.append(GIFimage);
                //prepend in here:
                $("#GIFimages").prepend(result);

                
            }
        })
})

