$(document).ready(function () {

    var terms = localStorage['terms'];
    var case_sensitive = localStorage['case_sensitive'];

    $('#filters').val(terms);
    console.log(typeof(case_sensitive));
    if (case_sensitive == "false") {
        $('#case_sensitive').removeAttr('checked');
    } else {
        $('#case_sensitive').attr('checked', 'checked');
    }


    $('#save').click(function () {
        terms = $('#filters').val().split(",");
        case_sensitive = $('#case_sensitive').is(':checked');
        localStorage['terms'] = terms;
        localStorage['case_sensitive'] = case_sensitive;
    });

});
