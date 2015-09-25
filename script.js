var dim = 0;
var num = 0;
var colour = "blue";
$(document).ready(function () {

    createGrid();
    $("#container").on('mouseover', '.square', function () {
        $(this).css('background-color', colour);
    });

    $("#reset").on('click', createGrid);
    $("#red").on('click', makeRed);
    $("#yellow").on('click', makeYellow);
    $("#blue").on('click', makeBlue);
    $("#green").on('click', makeGreen);
    $("#hex").on('click', customColour);

});

function createGrid() {
    num = prompt("Enter number of squares per row:");
    $("#container").empty();
    dim = 640 / (num) - 2;
    for (var a = 0; a < num; a++) {

        for (var b = 0; b < num; b++) {
            $("<div class = 'square'></div>").appendTo("#container");
        }
        $("<br>").appendTo("#container");
    }
    $(".square").height(dim);
    $(".square").width(dim);
}

function makeBlue() {
    colour = "blue";
}

function makeRed() {
    colour = "red";
}

function makeYellow() {
    colour = "yellow";
}

function makeGreen() {
    colour = "green";
}

function customColour() {
    colour = prompt("Please enter a valid hex colour (including #):");
}