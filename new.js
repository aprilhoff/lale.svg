// current date & time
let rightNow = new Date();

let currentYear = rightNow.getFullYear();
console.log("Current year = " + currentYear);

let currentMonth = rightNow.getMonth() + 1;
console.log("Current month = " + currentMonth);

let currentDate = rightNow.getDate();
console.log("Current date = " + currentDate);



// array for phase  + corresponding logo
let currentPhase = [
        "New Moon",
        "Waxing Crescent",
        "First Quarter",
        "Waxing Gibbous",
        "Full Moon",
        "Waning Gibbous",
        "Last Quarter",
        "Waning Crescent"
]; 


// fetch moon phase data
function getMoonPhase() {

    fetch(`https://corsproxy.io/?https://aa.usno.navy.mil/api/rstt/oneday?date=${currentYear}-${currentMonth}-${currentDate}&coords=49.1233,55.7879&tz=3&dst=false`)
        .then(response => response.json())
        .then(data => {

            let moonPhase = data.properties.data.curphase;
            console.log("Moon phase = ", moonPhase);

            let index = currentPhase.indexOf(moonPhase);
            console.log("Phase index = ", index);

            if (index !== -1) {
                document.querySelector("#phase").src =
                    "assets/" + index + ".svg";
            } 

            document.querySelector(".currentPhase").textContent = moonPhase;
        })
}

getMoonPhase();



