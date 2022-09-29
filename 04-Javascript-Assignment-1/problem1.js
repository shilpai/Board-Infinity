

function startButton() {
    let time = new Date();
    let hour = (document.getElementById("hour").innerHTML = time.getHours());
    let min = (document.getElementById("minutes").innerHTML = time.getMinutes());
    let sec = (document.getElementById("second").innerHTML = time.getSeconds());
    let AM_PM = (document.getElementById("AM_PM").innerHTML);
  
  
  
    if (hour > 12) {
      hour -= 12;
      AM_PM = "PM";
    }
    if (hour == 0) {
      hr = 12;
      AM_PM = "AM";
    }
  
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
  
  
  
  
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("second").innerHTML = sec;
    document.getElementById("AM_PM").innerHTML = AM_PM;
  
  
  
  
  
  }
  
  let timer = setInterval(startButton, 1000);
  
  function stopButton() {
    clearInterval(timer);
  }
  
  
  function live_date() {
    let time = new Date();
    let month = (document.getElementById("month").innerHTML = time.getMonth());
    let date = (document.getElementById("date").innerHTML = time.getDate());
    let year = (document.getElementById("year").innerHTML = time.getFullYear());
  
    let month_Name = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'
    ];
   
   
    document.getElementById("month").innerHTML = month_Name[month];
    document.getElementById("date").innerHTML = date;
    document.getElementById("year").innerHTML = year;
  
  
  }
  live_date();