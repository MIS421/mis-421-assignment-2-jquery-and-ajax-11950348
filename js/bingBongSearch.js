var len;
var results = '';

function apiSearch() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };
    $.ajax({
        //Requirement 11
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            //Requirement 12
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "f11be7edac7a4011b9422b7c0d988612");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            for (i = 0; i < len; i++) {
                results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
            }
            $('#searchResults').html(results);

            $('#searchResults').dialog({
                title: 'Bing Bong Results for "' + $("#query").val() + '"',
                height: ($(window).height() - 75),
                width: '100%',
                close: closeBingBongSearch,
                modal: true,
                buttons: {
                    "Close Window": function () {
                        $(this).dialog("close");
                    }
                },
                open: function (event, ui) {
                    $(this).parent().children().children('.ui-dialog-titlebar-close').hide();
                },
                show: {
                    effect: "blind",
                    duration: 1000
                },
                hide: {
                    effect: "fold",
                    duration: 500
                }
            });
            results = '';
        })
        .fail(function () {
            alert("Bing Bong Search Error, Please Try Again!");
        });
}


//Requirement 13
function bingBongSearch() {
    apiSearch();
    document.getElementById("searchResults").style.visibility = "visible";
}

function closeBingBongSearch() {
    $("#query").val('');
    document.getElementById("searchResults").innerHTML = "";
    document.getElementById("searchResults").style.visibility = "hidden";

}