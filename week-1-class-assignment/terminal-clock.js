//  Create a terminal clock (HH:MM:SS)

// don't put Date function outside of the getTime then it will only show time which is static in nature(single value)
function getTime(){
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    console.log(hours + " : " + minutes + " : " + seconds);
}

setInterval(getTime, 1000);