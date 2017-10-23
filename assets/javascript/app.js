// Here we grab the text from the input box


$("#add-animal").on("click", function() {
    // event.preventDefault();
    var animal = $("#animal-input").val().attr("data-animal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=A9UdrmvtGbAIwkb5pOXk3mquhXg3yO8y&limit=10";
    $.ajax({
            url: queryURL,
            method: "GET",
        })
        .done(function(response) {
            console.log(response);
        });
});

// Need an array of animals

// create API url and key

// $("button").on("click", function() {
// var person = $(this).attr("data-person");

// key: A9UdrmvtGbAIwkb5pOXk3mquhXg3yO8y
// .ajax call with queryURL and GET
// .done(function(response))
// console.log(respsone);

// pausing if else 
//  if (state === 'still') {
//     $(this).attr("src", $(this).attr("data-animate"));
//     $(this).attr("data-state", "animate");
// } else {
//     $(this).attr("src", $(this).attr("data-still"));
//     $(this).attr("data-state", "still");
// }

// create for loop that appends a button for each string in the array

//     the loop should grab 10 none static gifs

// for (var i = 0; i < results.length; i++) {
//     var gifDiv = $("<div class='item'>");

//     var rating = results[i].rating;

//     var p = $("<p>").text("Rating: " + rating);

//     var personImage = $("<img>");
//     personImage.attr("src", results[i].images.fixed_height.url);

//     gifDiv.prepend(p);
//     gifDiv.prepend(personImage);

//     $("#gifs-appear-here").prepend(gifDiv);
// }

// take form input and add to array 
// make a function that calls the new input from the array into a button that displays the gifs