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
            console.log(case_sensitive);
            filter(terms, case_sensitive);
        });
    });

});

function filter(terms, case_sensitive) {
    if (terms !== null) {
        console.log(terms.length);
        console.log(typeof(terms));
        if (case_sensitive == "false") {
            for (var i = 0; i < terms.length; i++) {
                var rows = $("a:icontains('" + terms[i] + "')").parent().parent();
                rows.css('display', 'none');
                console.log(rows);
            }
        } else {
            for (var j = 0; j < terms.length; j++) {
                var rows = $("a:contains('" + terms[j] + "')").parent().parent();
                rows.css('display', 'none');
                console.log(rows);
            }
        }
    }
}





