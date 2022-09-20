function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
    var day = dateTime.getDay();
    
    if(hrs >=12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }


    switch (day){
        case 0:
            day = 'Sun';
            break;
        case 1:
            day = 'Mon';
            break;
        case 2:
            day = 'Tue';
            break;
        case 3:
            day = 'Wed';
            break;
        case 4:
            day = 'Thurs';
            break;
        case 5:
            day = 'Fri';
            break;
        case 6:
            day = 'Sat';
            break;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('mins').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('day').innerHTML = day;
}

setInterval(displayTime, 10);