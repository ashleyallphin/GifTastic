/*
    //make an array of keywords
    var buttonArray = [
    "dog", "baseball", "Garth Brooks", "Texas Longhorns", "Noel Fielding", "The Mighty Boosh", "GBBO" "Kurupt FM", "Maria Sharapova", "Atlanta Braves", "The Office", "annoyed", "Pantone", "FRIENDS", "London", "unicorn", "dinosaur", "clouds"
]

========

//push keywords to page
for (var i=0; i<buttonArray.length; i++) {
    console.log(buttonArray[i]);
    $('#keyword-buttons').append(
        '<button class="btn">' + buttonArray[i] + '</button>');
}

$('button').on("click", function() {
    console.log("button-clicked");
})

*/
/*

$('button').on('click', function() {
  
    //grab the arrays by our category tags
    var data = $(this).data("category");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=1eoMKqWov4lRudP6LsC1de32vllX8xLa&q=" + data + "&limit=10&offset=0&lang=en";
    $.ajax({url:queryURL,method:"GET"})
        .done(function(response){
            console.log(response);
        })
    
        for (var i=0; i<response.data.length; i++) {
            console.log(response.length);
            $("#response").append('scr',response.data[i].images.fixed_height_still.url);
        }

})

*/






// $('button').on('click', function() {
//     var data = $(this).data("category");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=1eoMKqWov4lRudP6LsC1de32vllX8xLa&q=" + data + "&limit=10&offset=0&lang=en";
    
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(response) {
//         console.log(response);
//       ))}




$('button').on("click", function() {
    var data = $(this).data("category");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=1eoMKqWov4lRudP6LsC1de32vllX8xLa&q=" + data + "&limit=10&offset=0&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET",
        }).then(function(response) {
            for (var i=0; i<response.data.length; i++) {
                console.log(response.data[i].images.fixed_height_still.url);
            }
        })
})



