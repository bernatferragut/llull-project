## llull-project-Demo1 |  mp4 video

* Video Demo mp4- 2 Scenes: Intro + Scene1
> [LINK](https://drive.google.com/open?id=1ChxvXTbIlAZo9w469-dWbp-sUh9ogUfD)

## llull-project-Demo1 | Code

* Demo1 Code and structure.
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
