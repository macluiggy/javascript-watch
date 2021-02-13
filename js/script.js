(function () {
    var container = document.getElementById('watch-container');
    var greeting;
    var msg = document.createElement('div');
    var body = document.body;
function updateTime() {
    var date = new Date(),
    hours = date.getHours(),
    mins = date.getMinutes(),
    secs = date.getSeconds()

    if (mins < 10) {
        mins = '0' + mins;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (secs < 10) {
        secs = '0' + secs;
    }

    if (hours > 18 ) {
        greeting = 'Good evening';
        body.className = 'evening';
    } else if (hours > 12) {
        greeting = 'Good afternoon';
        body.className = 'afternoon';
    } else {
        greeting = 'Good morning';
        body.className = 'morning';
    }
    
    msg.innerHTML = hours + ':' + mins + ':' + secs + '<br>' + greeting
    container.appendChild(msg)
}
updateTime()
var intervalo = setInterval(updateTime, 1000);

}());


