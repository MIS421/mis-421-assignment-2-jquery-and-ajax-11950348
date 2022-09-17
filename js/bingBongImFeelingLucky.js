//BONUS
var len;
var results = '';

function imFeelingLucky() {

    document.getElementById("searchResults").style.visibility = "visible";

    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };
    $.ajax({

        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "f11be7edac7a4011b9422b7c0d988612");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            
            window.open(data.webPages.value[0].url, '_blank');

            $('#searchResults').html(results);

            results = '';
        })
        .fail(function () {
            alert("Bing Bong Search Error, Please Try Again!");
        });

    closeBingBongSearch();
}
