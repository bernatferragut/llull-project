# P5JS SCENE MANAGER

> Follow this new format for building the scenes:

```JavaScript
// Intro scene constructor function
function Intro() {
    this.setup = function() {
        // Code
    }

    this.draw = function() {
        // Code
    }

    this.keyPressed = function() {
        // switch the scene
        this.sceneManager.showScene( Game );
    }
}

// Main games scene constructor function
function Game() {
    this.setup = function() {
        // Code
    }

    this.draw = function() {
        // Code
    }
}
```