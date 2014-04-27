$(document).ready(function () {


    $.expr[':'].icontains = function(x, y, z){
        return jQuery(x).text().toUpperCase().indexOf(z[3].toUpperCase())>=0;
    };

    var terms;
    var case_sensitive;

    chrome.runtime.sendMessage({greeting: "getLocalStorage", key: "terms"}, function(response) {
        terms = response.data.split(",");
        chrome.runtime.sendMessage({greeting: "getLocalStorage", key: "case_sensitive"}, function(response) {
            case_sensitive = response.data;
            filter(terms, case_sensitive);
        });
    });

});

function filter(terms, case_sensitive) {
    if (terms !== null) {
        if (case_sensitive == "false") {
            for (var i = 0; i < terms.length; i++) {
                var rows = $("a:icontains('" + terms[i] + "')").parent().parent();
                rows.css('display', 'none');
                var location_rows = jQuery('.pnr');
                location_rows.map(function () {
                    if ($(this).text().toUpperCase().indexOf(terms[i].toUpperCase())>=0) {
                        $(this).parent().parent().css('display', 'none');
                    }
                });
            }
        } else {
            for (var j = 0; j < terms.length; j++) {
                var rows = $("a:contains('" + terms[j] + "')").parent().parent();
                var location_rows = $(".pnr:contains('" + terms[i] + "')").parent().parent();
                rows.css('display', 'none');
                location_rows.css('display', 'none');
            }
        }
    }
}





