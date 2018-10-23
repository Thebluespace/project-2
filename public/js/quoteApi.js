console.log('API module linked successfully');

var queryURL = "https://geek-jokes.sameerkumar.website/api";

var addQuote = function (data) {
    var $quote = $("<p>").html(data)
    $("#quoteField").append($quote)
};
var getquote = function () {
    $.ajax({
        url: queryURL + '?' + $("#inputQuote"),
        method: "GET"
    }).then(function (response) {
        console.log(response);
        addQuote(response);
    });
};

$("#addQuote").on("click", function () {
    event.preventDefault();
    console.log('you clicked the add button');
    getquote()
});