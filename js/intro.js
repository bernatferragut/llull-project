function Intro() {

    // font
    let choice;
    let letters = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K'];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let surprise = [];
    let formedWord;
    let llull;
    // x0=>size, x1=>transparency, x2=>color, x3=>random

    this.setup = function() {
        console.log('> intro: connected')
    }
    
    this.draw = function() {
        // bg
        background(0);
        // random generation letters
        surprise = []; // 4 letters long
        for(let i=0; i < 3; i++) {
            choice = random(); // (0-1) float number
            if(choice > 0.5) {
                surprise.push(letters[int(random(letters.length))]);
            }
            surprise.push(numbers[int(random(numbers.length))]);
        }
        formedWord = surprise.join('');
        // text formation in two layers
        if(choice > 0.5) {
            llull = new word(
                    w/2 + random( x2.value(), -x2.value()),
                    h/2 + random( x2.value(), -x2.value()),
                    x1.value() + 123,  
                    x0.value() + 100, 
                    formedWord);
            llull.creation();
        } else {
            llull = new word(
                    w/2 + random( x2.value(), -x2.value()),
                    h/2 + random( x2.value(), -x2.value()),
                    'tomato',  
                    x0.value() + 100, 
                    'LLULL');
            llull.creation();
        }
    }

    // KEYS CONTROL
    this.keyPressed = function() {
        if(key == 0) {
            this.sceneManager.showScene( Intro );
            console.log('Intro');
        }else if (key == '1') {
            this.sceneManager.showScene( Scene1 );
            console.log('Scene-1');
        } else if (key == '2') {
            this.sceneManager.showScene( Scene2 );
            console.log('Scene-2')
        } else if (key == '3') {
            this.sceneManager.showScene( Scene3 );
            console.log('Scene-3')
        } else if (key == '4') {
            this.sceneManager.showScene( Scene4 );
            console.log('Scene-4')
        } else if (key == '5') {
            this.sceneManager.showScene( Scene5 );
            console.log('Scene-5')
        } else if (key == '6') {
            this.sceneManager.showScene( Scene6 );
            console.log('Scene-6')
        } else if (key == '7') {
            this.sceneManager.showScene( Scene7 );
            console.log('Scene-7')
        } else if (key == '8') {
            this.sceneManager.showScene( Scene8 );
            console.log('Scene-8')
        } else if (key == '9') {
            this.sceneManager.showScene( Scene9 );
            console.log('Scene-9')
        }
    }
}
