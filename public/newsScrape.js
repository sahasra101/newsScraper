$(document).ready(function () {

    $(document).on("click", "#delete-scrape", function (event) {
        $.ajax({
            method: "DELETE",
            url: "/articles/"
        }).then(function () {
            location.reload();
        });
    });

    // $("#save-article").on("click", function (event) {
    $(document).on("click", "#save-article", function (event) {
        var id = $(this).attr("data-id");
        console.log(`id of saved article: ${id}`);
        var newSaved = {
            _id: id,
            saved: true
        };
        // Send the PUT request to controller.
        $.ajax("/article/saved/" + id, {
            type: "PUT",
            data: newSaved
        }).then(
            function () {
                console.log("Saved", newSaved);
                // Reload the page to get the updated list
                location.reload();
            });
    });

    // $("#unsave-article").on("click", function (event) {
    $(document).on("click", "#unsave-article", function (event) {
        var id = $(this).attr("data-id");
        console.log(`id of unsaved article: ${id}`);
        var newUnSaved = {
            _id: id,
            saved: false
        };
        // Send the PUT request to controller.
        $.ajax("/article/unsaved/" + id, {
            type: "PUT",
            data: newUnSaved
        }).then(
            function () {
                console.log("Unsaved", newUnSaved);
                // Reload the page to get the updated list
                location.reload();
            });
    });

});




// // Grab the articles as a json
// $.getJSON("/articles", function (data) {
//     // For each one
//     for (var i = 0; i < data.length; i++) {
//         // Display the apropos information on the page
//         $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
//     }
// });

$(document).on("click", "#note-modal", function (event) {
    var thisId = $(this).attr("data-id");
    $("#noteInput").val("");
    $("#notes").empty();
    console.log(`id of article to get note: ${thisId}`);

    // Now make an ajax call for the Article
    $.ajax({
        method: "GET",
        url: "/articles/" + thisId
    })
        // With that done, add the note information to the page
        .then(function (data) {
            console.log(data);
            // If there's a note in the article
            if (data.note) {
                // Place the body of the note in the modal body input
                $("#notes").append("<h4>Your Notes: "+data.note.note+"</h4>");
            }
        });
});

// When you click the add-note button
$(document).on("click", "#add-note", function () {

    // Grab the id associated with the article from the submit button
    var noteId = $(this).attr("data-id");
    var body = $("#noteInput").val();
    console.log(noteId + " id followed by note: ");
    console.log(body);

    // Run a POST request to change the note, using what's entered in the inputs
    $.ajax({
        method: "POST",
        url: "/articles/" + noteId,
        data: {
            // Value taken from note text area
            note: body
        }
    })
        // With that done
        .then(function (data) {
            // Log the response
            console.log(data);
            // Empty the notes section
            // $("#noteInput").empty();
        });
    // Also, remove the values entered in the input and textarea for note entry
    $("#noteInput").val("");
    location.reload();
});

$("#delete-note").on("click", function (event) {
    var delNoteId = $(this).attr(data-id);
    // Send the DELETE request.
    $.ajax("/articles/delnote/" + delNoteId, {
        type: "POST"
    }).then(
        function () {
            location.reload();
        }
    );
});