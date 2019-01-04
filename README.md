## llull-project-demo1 |  mp4 video

* mp4 video demo1 - Intro + Scene1
> [LINK](https://drive.google.com/open?id=1ChxvXTbIlAZo9w469-dWbp-sUh9ogUfD)

## llull-project-demo1 | code

* code demo1 + structure
> [LINK](https://github.com/bernatferragut/llull-project)

## Multiples scenes with P5JS Scene Manager Plugin

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
