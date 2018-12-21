// MAIN.JS
console.log('> main-connected');

// global vars
let w = window.innerWidth, h = window.innerHeight;

// main p5js setup
// here we create the sceneManager instance
function setup() {
    createCanvas(w, h);
    background(0);

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
}

// check up if midi here or in each of the scenes
