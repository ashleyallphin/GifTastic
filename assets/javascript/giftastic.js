var buttonArray = [
    "dog", "baseball", "Garth Brooks", "The University of Texas", "Noel Fielding", "The Mighty Boosh", "Kurupt FM", "Maria Sharapova", "Atlanta Braves", "The Office", "annoyed", "Pantone", "FRIENDS", "London", "unicorn", "dinosaur", "clouds"
]






//========

for (var i=0; i<buttonArray.length; i++) {
    console.log(buttonArray[i]);
    $('#keyword-buttons').append(
        '<button class="btn">' + buttonArray[i] + '</button>');
}

$('button').on("click", function() {
    console.log("button-clicked");
})