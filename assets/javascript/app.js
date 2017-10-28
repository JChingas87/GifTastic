var animals_Array = ["mongoose", "dog", "snake", "cat", "eagle", "wolf", "bear"];

function animalButtons() {
    $("#animal-catagories").empty();
    for (var i = 0; i < animals_Array.length; i++) {
        var button = $("<button>");
        button.addClass("btn btn-info");
        button.attr("data-name", animals_Array[i]);
        button.text(animals_Array[i]);
        $("#animal-catagories").append(button);
    }
}
$(document).ready(function() {
    $("#add-animal").on("click", function(event) {
        event.preventDefault();
        var animal = $("#animal-input").val().trim();
        if (animal == "") {
            return false;
        }
        // $("animal-input").val("");
        animals_Array.push(animal);
        animalButtons();
    });
    animalButtons();

    $("#animal-catagories").on("click", "button", function() {
        var gif_animals = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif_animals + "&api_key=A9UdrmvtGbAIwkb5pOXk3mquhXg3yO8y&limit=10";

        $.ajax({
                url: queryURL,
                method: "GET",
            })
            .done(function(object) {
                var animal_gifs = object.data;
                console.log(animal_gifs);
                $("#animal-gifs").empty();
                animal_gifs.forEach(function(gif) {
                    if (gif.rating !== "r" && gif.rating !== "pg-13") {

                        var gif_div = $("<div class='item'>");
                        var rating = gif.rating;
                        var p = $("<p>").text("Rating: " + rating);
                        var animal_Image = $("<img>");

                        animal_Image.attr("src", gif.images.fixed_height.url);
                        animal_Image.attr("src", gif.images.fixed_height_still.url);
                        animal_Image.attr("data-animate", gif.images.fixed_height.url);
                        animal_Image.attr("still", gif.images.fixed_height_still.url);
                        animal_Image.attr("data-state", "still");
                        animal_Image.addClass("image");
                        gif_div.prepend(p);
                        gif_div.prepend(animal_Image);

                        $("#animal-gifs").append(gif_div);
                    }
                });
                // $("#animal-gifs").on("click", ".image", function() {
                $(".image").on("click", function() {
                    var faced = $(this).attr('data-state');
                    if (faced == 'still') {
                        $(this).attr('src', $(this).data('animate'));
                        $(this).attr('data-state', 'animate');
                    } else {
                        $(this).attr('src', $(this).attr('still'));
                        $(this).attr('data-state', 'still');
                    }
                });
            })
    });
});

// $(document).ready(function() {
//     $("#animal-form").hide();
//     $("#get-started").click(function() {
//         getTheGifs();
//         animalButtons();
//         $("#get-started").hide();
//         $("#animal-form").show();
//     })

// })

// });

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
// make a function that calls the new input from the array into a button that displays the gifs)