// JavaScript File
$(document).ready(function() {
    $("#go").click(function() {
        var name = $("#search").val();
        var location = $("#zipcode").val();
        var part1 = "https://api.foursquare.com/v2/venues/search?client_id=U2PH1W2NAAE01Y4PNBEJCJYL2NJAUAYGXMGWPFCTI0FNLY2G&client_secret=WMGWXQY1XRZADDN5URBI4FWZ4FGCVIFDH5LF0JQ1A3F3CSJA&v=20130815";
        var part2 = "&near=";
        var part3 = "&query=";
        var url = part1 + part2 + location + part3 + name;



        $.getJSON(url, function(response) {
          //$("#results").append("This is the resturant's name " + " " + response.response.venues[0].name + "<br>");
           //$("#results").append("This is the resturant's number " + " " + response.response.venues[0].contact.phone + "<br>");
        //    $("#results").append("This is the resturant's address " + " " + response.response.venues[0].location.address + "<br>");
         // console.log(response);
            
        var Venues = response.response.venues;
        for (var i = 0; i <Venues.length; i++) {
            $("#results").append("This is the resturant's name " + " " + Venues[i].name + "<br>");
           $("#results").append("This is the resturant's number " + " " + Venues[i].contact.phone + "<br>");
           $("#results").append("This is the resturant's address " + " " + Venues[i].location.address + "<br>");
            console.log (Venues[i]);
            }
        });
    });
});