
// canvas vars
let w = window.innerWidth, h = window.innerHeight;
let canvas;
// dot vars
let dot;
let rnd = 3;
// oscillators
let osc1;
// slider vars ( multipliers ) 
let x0, x1, x2, x3, x4, x5, x6, x7;

function setup() {
    // canvas
    canvas = createCanvas(w, h);
    canvas.parent('sketch-holder');

    // sliders 
    createSliders();

    // dot
    dot = new Dot(w / 2, h / 2, 10);

    // oscillators
    osc1= new p5.TriOsc();
    osc1.freq(440);
    osc1.amp(.5);
    osc1.start();
}

function draw() {
    // BG
    background(0);
    // dot
    dot.on(x2);
    dot.randomness();
    // oscillators
    osc1.freq(x2.value());
}

// Dot object
class Dot {
    // class attributes
    constructor(x, y, s) {
        this.x = x | 0;
        this.y = y | 0;
        this.size = s | 2;
    }
    // class methods 
    on(x) { // here we pass the size parameter to affect this method
        noStroke();
        fill(255);
        ellipse(this.x, this.y, x.value(), x.value());
    }
    randomness() {
        this.x += random(-rnd, rnd);
        this.y += random(-rnd, rnd);
    }
}

// Sliders creation
function createSliders() {
    // sliders -> createSlider(min, max, [default], [stepSize])
    x0 = createSlider(0, 127, 0, 0.1);
    x0.position(100, 100);
    x1 = createSlider(0, 127, 0, 0.1);
    x1.position(200, 100);
    x2 = createSlider(0, 127, 0, 0.1);
    x2.position(300, 100);
    x3 = createSlider(0, 127, 0, 0.1);
    x3.position(400, 100);
    x4 = createSlider(0, 127, 0, 0.1);
    x4.position(500, 100);
    x5 = createSlider(0, 127, 0, 0.1);
    x5.position(600, 100);
    x6 = createSlider(0, 127, 0, 0.1);
    x6.position(700, 100);
    x7 = createSlider(0, 127, 0, 0.1);
    x7.position(800, 100);
}

// MIDI Controller management
WebMidi.enable(function () {

    // Retrieve an input by name, id or index
    var input = WebMidi.getInputByName("Midi Fighter Twister"); // ID: 663841880

    // Listen to control change message on all channels
    input.addListener('controlchange', 1,
        function (e) {
            console.log("Received 'controlchange' message.", e);
            switch (e.controller.number) {
                case 0:
                    x0.value(e.value);
                case 1:
                    x1.value(e.value);
                    break;
                case 2:
                    x2.value(e.value);
                    break;
                case 3:
                    x3.value(e.value);
                    break;
                case 4:
                    x4.value(e.value);
                    break;
                case 5:
                    x5.value(e.value);
                    break;
                case 6:
                    x6.value(e.value);
                    break;
                case 7:
                    x7.value(e.value);
                    break;
            }
        }
    );
});  