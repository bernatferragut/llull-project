# LLULL-Demo1

* Video Demo mp4- 2 Scenes: Intro + Scene1
> [LINK](https://drive.google.com/open?id=1ChxvXTbIlAZo9w469-dWbp-sUh9ogUfD)

# GITHUB - Code - LLULL-Demo1

* Demo1 Code and structure.
> [LINK](https://github.com/bernatferragut/llull-project)

# USING MULTIPLE JS FILES WITH P5JS SCENE MANAGER PLUGIN

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
