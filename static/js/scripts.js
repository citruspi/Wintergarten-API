(function () {

    switch (window.location.pathname.split('/')[1]) {

        case 'popular':

            document.getElementById("popular").style.textDecoration="underline";
            break;

        case 'theatres':

            document.getElementById("theatres").style.textDecoration="underline";
            break;

        case 'upcoming':

            document.getElementById("upcoming").style.textDecoration="underline";
            break;

        case 'search':

            document.getElementById("search").style.textDecoration="underline";
            break;        

        case '':

            document.getElementById("search").style.textDecoration="underline";            

        default:

            ''

    }

})();

(function () {
    
    document.getElementById("submit").addEventListener("click", function () {

        document.getElementById("search_form").submit();

    }, false);

})();
