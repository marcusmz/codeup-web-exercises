(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split('|');
    console.log(planetsArray);



     //* TODO:
    // * Create a string with <br> tags between each planet. console.log() your
     //* results. Why might this be useful?

    var planetsHTML = planetsArray.join('<br>');
    console.log(planetsHTML);

    //useful for when we transition into HTML and CSS to join additional features to our texts and or functions.//


})();