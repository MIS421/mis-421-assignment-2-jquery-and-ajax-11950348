//Requirement 15
function bingBongTime() {
    document.getElementById("time").style.visibility = "visible";

    setInterval(displayClock, 1000);
    function displayClock() {
        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        var am_pm = 'AM';

        if (hours > 12) {
            hours = hours - 12;
            am_pm = 'PM';
        }
        if (hours == 0) {
            hours = 12;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (hours >= 12) {
            am_pm = 'PM';
        }
        document.getElementById('time').innerHTML = hours + " : " + minutes + " : " + seconds + " " + am_pm;
    }

    $(function () {
        $("#time").dialog({
            title: 'Current Time:',
            buttons: {
                "Close": function () {
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
                effect: "clip",
                duration: 500
            }
        });

    });
}