window.onload = function(){
    //click events
    $('#lap').click(stopwatch.recordLap);
    $('#stop').click(stopwatch.stop);
    $('#reset').click(stopwatch.reset);
    $('#start').click(stopwatch.start);
};

var count= 0;
var interval;
var lap =1;

var stopwatch = {
    time:0,
    lap:1,
    reset: function () {
        stopwatch.time = 0;
        stopwatch.lap = 1;
        //change the inital  "display"
        $("#display").html("00:00");
        //empty the "laps" div
        $("#laps").empty();
    },
    start: function(){
        //Use setInterval to start the count 
        interval = setInterval(function(){stopwatch.count()},1000);
        //console.log(interval);
    },
    stop: function(){
        //Use clearInterval to stop the count 
        clearInterval(interval);
        count = 0;
        lap =1;


    },
    recordLap: function() {
        //Get the current time, pass that into the stopwatch.timeConverter function, and save the result in a variable
        var currentLap = stopwatch.timeConverter(count);
        //console.log(currentLap);
        //Add the current lap and time to the "laps" div
        $("#laps").append("<p>" + "lap # " + lap + " at " +currentLap + "</p>");

        //increment lap by 1
        lap++;
        stopwatch["lap"] = lap;
    },
    count: function(){
    //increment time by 1
     count++;
     //console.log(this)
     stopwatch["time"] = count;
    //Get the current time, pass that into the stopwatch.timeConverter function, and save the result in a variable
     var currentTime = stopwatch.timeConverter(count);
     //console.log(currentTime);
    //Use the variable and converted time in the "display" div
    
      $("#display").html(currentTime);
     },  
    timeConverter: function(t){
        // It takes the current time in seconds and converts it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
};
