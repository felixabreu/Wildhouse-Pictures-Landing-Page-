$(document).ready(function() { 
    "use strict";
    var videosRowOnHover = false;
    var elementsOnHover = false;
    var wildhouseOnHover = false;

    $("#fadeOnLoad").animate({opacity: "1"}, 1000);


    $("#wildhouseVideo").hover(
        function() {
            wildhouseOnHover = true;
            $("#elementsVideo").animate({width: "35%"});
          $("#wildhouseVideo").animate({width: "65%"});
        }, function() {
            wildhouseOnHover = false;
            if(videosRowOnHover && elementsOnHover) {
                $("#wildhouseVideo").animate({width: "35%"});
                $("#elementsVideo").animate({width: "65%"});
            }
        }
    );

    $("#elementsVideo").hover(
        function() {
            elementsOnHover = true;
            $("#wildhouseVideo").animate({width: "35%"});
            $("#elementsVideo").animate({width: "65%"});
        }, function() {
            elementsOnHover = false;
            if(videosRowOnHover && wildhouseOnHover) {
                $("#elementsVideo").animate({width: "35%"});
                $("#wildhouseVideo").animate({width: "65%"});
            }
        }
    );

    $("#videosRow").hover(
        function() {
            videosRowOnHover = true;
        }, function() {
            videosRowOnHover = false;
            wildhouseOnHover = false;
            elementsOnHover = false;
            $("#elementsVideo").animate({width: "50%"});
            $("#wildhouseVideo").animate({width: "50%"});
        }
    );
})