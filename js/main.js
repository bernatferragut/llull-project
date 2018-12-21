// MAIN.JS
console.log('> main: connected');

// global vars
let w = window.innerWidth, h = window.innerHeight;
let sliderHeight = 50, sliderWidth = 100;

// main p5js setup
function setup() {
     // scene manager
    var manager = new SceneManager();
    manager.wire();
    manager.addScene ( Intro );
    manager.addScene ( Scene1 );
    manager.addScene ( Scene2 );
    manager.addScene ( Scene3 );
    manager.addScene ( Scene4 );
    manager.addScene ( Scene5 );
    manager.addScene ( Scene6 );
    manager.addScene ( Scene7 );
    manager.addScene ( Scene8 );
    manager.addScene ( Scene9 );
    manager.showScene( Intro );   
    // canvas
    createCanvas(w, h);
    background(0);
    // sliders
    createSliders();
}

// Sliders creation
function createSliders() {
    // sliders -> createSlider(min, max, [default], [stepSize])
    x0 = createSlider(0, 127, 0, 0.1);
    x0.position(sliderWidth, sliderHeight);
    x0.style('width', '80px');
    x1 = createSlider(0, 127, 0, 0.1);
    x1.position(sliderWidth * 2, sliderHeight);
    x1.style('width', '80px');
    x2 = createSlider(0, 127, 0, 0.1);
    x2.position(sliderWidth * 3, sliderHeight);
    x2.style('width', '80px');
    x3 = createSlider(0, 127, 0, 0.1);
    x3.position(sliderWidth * 4, sliderHeight);
    x3.style('width', '80px');
    x4 = createSlider(0, 127, 0, 0.1);
    x4.position(sliderWidth * 5, sliderHeight);
    x4.style('width', '80px');
    x5 = createSlider(0, 127, 0, 0.1);
    x5.position(sliderWidth * 6, sliderHeight);
    x5.style('width', '80px');
    x6 = createSlider(0, 127, 0, 0.1);
    x6.position(sliderWidth * 7, sliderHeight);
    x6.style('width', '80px');
    x7 = createSlider(0, 127, 0, 0.1);
    x7.position(sliderWidth * 8, sliderHeight);
    x7.style('width', '80px');
}

// check up if midi here or in each of the scenes
WebMidi.enable(function () {

    // Retrieve an input by name, id or index
    let input = WebMidi.getInputByName("Midi Fighter Twister"); // ID: 663841880

    // Listen to control change message on all channels
    input.addListener('controlchange', 1,
        function (e) {
            console.log("Received 'controlchange' message.", e);
            switch (e.controller.number) {
                case 0:
                    x0.value(e.value);
                    console.log(x0.value(e.value));
                    break
                case 1:
                    x1.value(e.value);
                    console.log(x1.value(e.value));
                    break;
                case 2:
                    x2.value(e.value);
                    console.log(x2.value(e.value));
                    break;
                case 3:
                    x3.value(e.value);
                    console.log(x3.value(e.value));
                    break;
                case 4:
                    x4.value(e.value);
                    console.log(x4.value(e.value));
                    break;
                case 5:
                    x5.value(e.value);
                    console.log(x5.value(e.value));
                    break;
                case 6:
                    x6.value(e.value);
                    console.log(x6.value(e.value));
                    break;
                case 7:
                    x7.value(e.value);
                    console.log(x7.value(e.value));
                    break;
            }
        }
    );
    console.log('> web-midi: connected');
}); 