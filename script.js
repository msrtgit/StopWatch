
// created Time variables to hold milliseconds,seconds,minutes and hours values
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

// select the Element to display timer value
let display = document.getElementById("display");
// it shows that no interval is present or started Status
let timer = null;

//The stopWatch function is responsible for doing the calculations for milliseconds, seconds, minutes, and hours and then displaying the timer on UI.
function stopWatch(){

    milliseconds += 10; 
    // increase milliseconds by 10 after each encounter
    if(milliseconds == 1000){ 
        //when milliseconds reaches to 1000 change it to 0 and increase the secondsby 1
        milliseconds = 0;
        seconds++;
        if(seconds == 60){ 
            //when seconds reaches to 60, change it to 0 and increase minutes by 1
            seconds = 0;
            minutes++;
            if(minutes == 60){
             //when minutes reaches to 60, change it to 0 and increase hours by 1
                minutes = 0;
                hours++;
            }
        }
    }

    // Logic to display Additional 0 prior to values of  milliseconds, seconds, minutes & hours if thier values < 10

    let hoursText = hours < 10 ? "0" + hours : hours;
    let minutesText = minutes < 10 ? "0" + minutes : minutes;
    let secondsText = seconds < 10 ? "0" + seconds : seconds;
    let millisecondsText = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    // display the latest time using selected Element 
    display.innerHTML = hoursText + ":" + minutesText + ":" + secondsText + ":" + millisecondsText;
}

// This actions Function is Perform Actions such as Start, Stop & reset Actions of StopWatch Timer
/********** 
 ** When a user clicks on the start button we clear any previous intervals and start calling the ‘stopWatch’ function at an interval of 10ms.
 ** When the user clicks on the Stop timer we simply clear the interval. 
 ** For the Reset timer, we clear the interval and set the milliseconds, seconds, minutes, and hours to 0 and finally, we display the timer in our UI.
************/
function actions(actionParameter){

	switch(actionParameter) {
	  
	  case "START":

	    // if any interval is present stop it and then restart it 
	    if(timer !== null){
        clearInterval(timer);
    	}
    	timer = setInterval(stopWatch, 10);
	    break;

	  case "STOP":

	    // clear the interval
    	clearInterval(timer);
	    break;

	case "RESET":

		// Clear the interval
		clearInterval(timer);
		// Clear variable values by setting thier values to 0 
		milliseconds, seconds, minutes, hours = 0;
		//Update Timer Text 
        display.innerHTML = "00:00:00:000";
	}
}