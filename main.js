// current date & time
let rightNow = new Date();

let currentYear = rightNow.getFullYear();
console.log("Current year: " + currentYear);

let currentMonth = rightNow.getMonth() + 1;
console.log("Current month: " + currentMonth);

let currentDate = rightNow.getDate();
console.log("Current date: " + currentDate);




// testing if moonPhase code works with slider 
let phaseSlider;
let logos = [];


// preloading svg 
function preload (){
    logos.push(loadImage("0.svg"));
    logos.push(loadImage("1.0.svg"));
    logos.push(loadImage("1.1.svg"));
    logos.push(loadImage("2.svg"));
}

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
            console.log(data); 

            let moonPhase = data.properties.data.curphase;
            console.log("Moon phase:", moonPhase);

            let index = currentPhase.indexOf(moonPhase);

        })
}

getMoonPhase();



function setup() {
    createCanvas(1000, 820);

    // slider
    phaseSlider = createSlider(0, 7, 0, 1);
    phaseSlider.position(20, 100);

}

function draw() {
    translate(0, 0);
    background(255, 255, 255);
    rightNow = new Date();
    
    imageMode(CENTER);

    let phaseIndex = phaseSlider.value();
    let phaseName = currentPhase[phaseIndex];

    textSize(20);
    textAlign(CENTER);
    fill(0);
    text(phaseName, 100, 50);
 


    image(logos[phaseIndex], width/2, height/2);
   

    // if (phaseIndex >= 1) {
    //     image(logos["1.0"], width/2, 150);
    //     image(logos["1.1"], width/2,  40);
    // }

}

