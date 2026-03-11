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
    logos.push(loadImage("assets/0.svg"));
    logos.push(loadImage("assets/1.svg"));
    logos.push(loadImage("assets/2.svg"));
    logos.push(loadImage("assets/3.svg"));
    logos.push(loadImage("assets/4.svg"));
    logos.push(loadImage("assets/5.svg"));
    logos.push(loadImage("assets/6.svg"));
    logos.push(loadImage("assets/7.svg"));
}

// array for phase  + corresponding logo
let currentPhase = [
        "New Moon",
        "Waxing Crescent",
        "First Quarter",
        "Waxing Gibbous",
        "Full Moon",
        "Waning Gibbous",
        "Third Quarter",
        "Waning Crescent"
]; 






function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent("canvas-container");

    textFont("adobe-aldine");

    phaseSlider = createSlider(0, 7, 0, 1);
    phaseSlider.parent("canvas-container");

    phaseSlider.style('width', '200px');

}


function draw() {
    background(255, 255, 255);

    rightNow = new Date();
    

    let phaseIndex = phaseSlider.value();
    let phaseName = currentPhase[phaseIndex];
    
    imageMode(CENTER);


    textSize(40);
    textAlign(CENTER, CENTER);
    fill("#FF0000");
    text(phaseName, width/2, 50);
 
    image(logos[phaseIndex], width/2, height/2);
}

 
