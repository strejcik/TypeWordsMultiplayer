var timerExecuted = false;
var mainScreenExecuted = false;
var errors = 0;
var errorsPlayerTwo = 0;

var sentenceArrayIndex = 0;
var sentenceArrayIndexPlayer2 = 0;
var wordsCounter = 0;
var wordsCounterPlayerTwo = 0;

var isPlayerRoomCreator;

var roomNameCreated;
var roomName;

var isGameOn = false;
var isPlayerTwoJoinedLobby = false;




function TypedCharacter(){
    this.characters = "";
}

TypedCharacter.prototype.addCharacter = function (c) {
    this.characters += c;
};

TypedCharacter.prototype.displayWord = function () {
    return this.characters;
};

TypedCharacter.prototype.remLastChar = function () {
    this.characters = this.characters.slice(0, -1);
};

TypedCharacter.prototype.clear = function () {
    this.characters = "";
};

TypedCharacter.prototype.compareTwoStrings = function(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false;
        }
    }

    return true;
}


function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }





var sentenceArray = [];
var sentenceArrayPlayerTwo = [];
function Sentence(){
    this.sentence = "the european languages are members of the same family their separate existence is a myth for science music sport etc europe uses the same vocabulary the languages only differ in their grammar their pronunciation and their most common words everyone realizes why a new common language would be desirable one could refuse to pay expensive translators to achieve this it would be necessary to have uniform grammar pronunciation and more common words if several languages coalesce the grammar of the resulting language is more simple and regular than that of the individual languages the new common language will be more simple and regular than the existing european languages it will be as simple as occidental in fact it will be occidental to an english person it will seem like simplified english as a skeptical cambridge friend of mine told me what occidental is the european languages are members of the same family their separate existence is a myth for science music sport etc europe uses the same vocabulary the languages only differ in their grammar their pronunciation and their most common words everyone realizes why a new common language would be desirable one could refuse to pay expensive translators to achieve this it would be necessary to have uniform grammar pronunciation and more common words if several languages coalesce the grammar of the resulting language is more simple and regular than that of the individual languages the new common language will be more simple and regular than the existing european languages it will be as simple as occidental in fact it will be occidental to an english person it will seem like simplified english as a skeptical cambridge friend of mine told me what occidental is the european languages are members of the same family their separate existence is a myth for science music sport etc europe uses the same vocabulary the languages only differ in their grammar their pronunciation and their most common words everyone realizes why a new common language would be desirable one could refuse to pay expensive translators to achieve this it would be necessary to have uniform grammar pronunciation and more common words if several languages coalesce the grammar of the resulting language is more simple and regular than that of the individual languages the new common language will be more simple and regular than the existing european languages it will be as simple as occidental in fact it will be occidental to an english person it will seem like simplified english as a skeptical cambridge friend of mine told me what occidental isthe european languages are members of the same family their separate existence is a myth for science music sport etc europe uses the same vocabulary the languages only differ in their grammar their pronunciation and their most common words everyone realizes why a new common language would be desirable one could refuse to pay expensive translators to achieve this it would be necessary to have uniform grammar pronunciation and more common words if several languages coalesce the grammar of the resulting language is as";
}

Sentence.prototype.splitSentence = function () {
    //this.sentenceArray = this.sentence.split(" ");

    let words = this.sentence.split(" ");
    let arrays = [];
    let i = 0;
    while (i < words.length) {
    let array = [];
    for (let j = 0; j < 4 && i < words.length; j++) {
        array.push(words[i]);
        i++;
    }
    arrays.push(array);
    }
    sentenceArray = arrays; 
};

Sentence.prototype.displaySentence = function () {
    return this.sentence;
};

Sentence.prototype.displaySentenceArray = function () {
    return sentenceArray;
};

Sentence.prototype.deleteFirstArrEl = function () {
    sentenceArray[0].shift();
    this.sentence = this.sentence.split(' ').slice(1).join(' ');
};














function SentencePlayerTwo(){
    this.sentence = "the european languages are members of the same family their separate existence is a myth for science music sport etc europe uses the same vocabulary the languages only differ in their grammar their pronunciation and their most common words everyone realizes why a new common language would be desirable one could refuse to pay expensive translators to achieve this it would be necessary to have uniform grammar pronunciation and more common words if several languages coalesce the grammar of the resulting language is more simple and regular than that of the individual languages the new common language will be more simple and regular than the existing european languages it will be as simple as occidental in fact it will be occidental to an english person it will seem like simplified english as a skeptical cambridge friend of mine told me what occidental is the european languages are members of the same family their separate existence is a myth for science music sport etc europe uses the same vocabulary the languages only differ in their grammar their pronunciation and their most common words everyone realizes why a new common language would be desirable one could refuse to pay expensive translators to achieve this it would be necessary to have uniform grammar pronunciation and more common words if several languages coalesce the grammar of the resulting language is more simple and regular than that of the individual languages the new common language will be more simple and regular than the existing european languages it will be as simple as occidental in fact it will be occidental to an english person it will seem like simplified english as a skeptical cambridge friend of mine told me what occidental is the european languages are members of the same family their separate existence is a myth for science music sport etc europe uses the same vocabulary the languages only differ in their grammar their pronunciation and their most common words everyone realizes why a new common language would be desirable one could refuse to pay expensive translators to achieve this it would be necessary to have uniform grammar pronunciation and more common words if several languages coalesce the grammar of the resulting language is more simple and regular than that of the individual languages the new common language will be more simple and regular than the existing european languages it will be as simple as occidental in fact it will be occidental to an english person it will seem like simplified english as a skeptical cambridge friend of mine told me what occidental isthe european languages are members of the same family their separate existence is a myth for science music sport etc europe uses the same vocabulary the languages only differ in their grammar their pronunciation and their most common words everyone realizes why a new common language would be desirable one could refuse to pay expensive translators to achieve this it would be necessary to have uniform grammar pronunciation and more common words if several languages coalesce the grammar of the resulting language is as";
}

SentencePlayerTwo.prototype.splitSentence = function () {
    //this.sentenceArray = this.sentence.split(" ");

    let words = this.sentence.split(" ");
    let arrays = [];
    let i = 0;
    while (i < words.length) {
    let array = [];
    for (let j = 0; j < 4 && i < words.length; j++) {
        array.push(words[i]);
        i++;
    }
    arrays.push(array);
    }
    sentenceArrayPlayerTwo = arrays;
};

SentencePlayerTwo.prototype.displaySentence = function () {
    return this.sentence;
};

SentencePlayerTwo.prototype.displaySentenceArray = function () {
    return sentenceArrayPlayerTwo;
};

SentencePlayerTwo.prototype.deleteFirstArrEl = function () {
    sentenceArrayPlayerTwo[0].shift();
    this.sentence = this.sentence.split(' ').slice(1).join(' ');
};



function MainScreen(){
    this.element = createMainScreen();

    function createMainScreen() {

        let mainDiv = document.createElement('div');
        mainDiv.setAttribute('id', 'app');
        mainDiv.setAttribute('class', 'app-class');

        let container = document.createElement('div');
        container.setAttribute('id', 'container');
        container.setAttribute('class', 'container-class');

        let child1 = document.createElement('div');
        child1.setAttribute('id', 'child-1');
        child1.setAttribute('class', 'child1-class-player-1');


        let child2 = document.createElement('div');
        child2.setAttribute('id', 'child-2');
        child2.setAttribute('class', 'child2-class-player-2');






        let toTypeDivPlayerOne = document.createElement('div');
        toTypeDivPlayerOne.setAttribute('id', 'to-type-1');
        toTypeDivPlayerOne.setAttribute('class', 'to-type-class-player-1');
    
        let typedNowDivPlayerOne = document.createElement('div');
        typedNowDivPlayerOne.setAttribute('id', 'typed_now-1');
        typedNowDivPlayerOne.setAttribute('class', 'typed-now-class-player-1');




        let toTypeDivPlayerTwo = document.createElement('div');
        toTypeDivPlayerTwo.setAttribute('id', 'to-type-2');
        toTypeDivPlayerTwo.setAttribute('class', 'to-type-class-player-2');
    
        let typedNowDivPlayerTwo = document.createElement('div');
        typedNowDivPlayerTwo.setAttribute('id', 'typed_now-2');
        typedNowDivPlayerTwo.setAttribute('class', 'typed-now-class-player-2');





    
        let timerDiv = document.createElement('div');
        timerDiv.setAttribute('id', 'timer');
        timerDiv.setAttribute('class', 'timer-class');

        document.body.appendChild(mainDiv);
        mainDiv.appendChild(container);
        
        container.appendChild(child1);
        container.appendChild(child2);
        
        child1.appendChild(timerDiv);
        child1.appendChild(toTypeDivPlayerOne);
        child1.appendChild(typedNowDivPlayerOne);


        child2.appendChild(toTypeDivPlayerTwo);
        child2.appendChild(typedNowDivPlayerTwo);
    }
}


function preMainScreen(){
    this.element = createPreMainScreen();

    function createPreMainScreen() {
        let preMainScreenInfo = document.createElement('h1');
        preMainScreenInfo.setAttribute('id', 'pre-main-screen');
        preMainScreenInfo.setAttribute('class', 'pre-main-screen-class');
        preMainScreenInfo.innerHTML = 'Press Enter to start';

        document.body.appendChild(preMainScreenInfo);
    }
}

function ResultsScreen(){
    this.element = createResultsScreen();

    function createResultsScreen() {
        let toTypeDiv = document.getElementById("to-type-1");
        let typedNowDiv = document.getElementById('typed_now-1');
        let timerDiv = document.getElementById('timer');

        toTypeDiv.outerHTML = "";
        typedNowDiv.outerHTML = "";
        timerDiv.outerHTML = "";
        
        
        
        let resultsScreenInfo = document.createElement('h1');
        resultsScreenInfo.setAttribute('id', 'results-screen');
        resultsScreenInfo.setAttribute('class', 'results-screen-class');
        resultsScreenInfo.innerHTML = `Errors: ${errors}, Correct words: ${wordsCounter}`;

        document.body.appendChild(resultsScreenInfo);
    }
}













function countdown(minutes, seconds) {
    var timeoutHandle;
    function tick() {
        var counter = document.getElementById("timer");
        if(counter != null)
            counter.innerHTML = minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        seconds--;
        if (seconds >= 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {
            if (minutes >= 1) {
                setTimeout(function () {
                    countdown(minutes - 1, 59);
                }, 1000);
            }
        }

        if(minutes == 0 && seconds == 0)
        {
            console.log('Errors:', errors);
            console.log('Correct typed words:', wordsCounter);
            new ResultsScreen();
        }
    }
    tick();
}




var runTimerOnce = (function() {
    
    return function() {
        if (!timerExecuted) {
            timerExecuted = true;
            countdown(1, 0);
        }
    };
})();

var runMainScreenOnce = (function() {
    
    return function() {
        if (!mainScreenExecuted) {
            mainScreenExecuted = true;
            new MainScreen();
        }
    };
})();






window.addEventListener('load', function() {

    var user = { id: uuidv4(), roomId: 123};
    console.log(user);



    //===============Player One================/
    var player1TypedNowLetter = {};
    //===============Player One================/





    //===============Player Two================/
    var typedNowPlayerTwo;
    var player2TypedNowLetter = {};
    //===============Player Two===============/

    var socket = io('http://127.0.0.1:3001');

    socket.on('connect', function(data){
        
        socket.on("typed-p1-to-p2", (d) => {
            console.log(d);
            console.log('=======typed-p1-to-p2======');
            if(d.letter === 'Backspace') {
                typedNowPlayerTwo.innerHTML = typedNowPlayerTwo.innerHTML.slice(0, -1);
                return;
            }
            if(d.letter === 'Whitespace') {
                typedNowPlayerTwo.innerHTML = ""
                return;
            }

            d?.sentence && (to_type_player2.innerHTML = d.sentence)
            
            typedNowPlayerTwo.innerHTML += d.letter;
        });

        socket.on("typed-p2-to-p1", (d) => {
            console.log(d);
            console.log('=======typed-p2-to-p1======');
            if(d.letter === 'Backspace') {
                typedNowPlayerTwo.innerHTML = typedNowPlayerTwo.innerHTML.slice(0, -1);
                return;
            }
            if(d.letter === 'Whitespace') {
                if (typedNowPlayerTwo !== undefined)
                    typedNowPlayerTwo.innerHTML = "";
                return;
            }

            d?.sentence && (to_type_player2.innerHTML = d.sentence)

            if(typedNowPlayerTwo !== undefined)
                typedNowPlayerTwo.innerHTML += d.letter;
        });



        socket.on("to-type-p1-to-p2", (d) => {
            console.log('=======to-type-p1-to-p2======');
            console.log(d.sentence);
            
        });


        socket.on('confirmjoin',function(d){

            if(d.roomCreator === true)
            {
                isPlayerRoomCreator = true;
                console.log('confirm join passed');
                console.log(d);
                socket.emit('allowtojoin',d);
            } else{
                socket.emit('allowtojoin-p2-to-p1',d);
            }
        });

        socket.on('allow-request-from-p2', function(d){
            do{
                var r=confirm("User try to connect to your room. Press ok to continue.");
                if (r==true)
                {
                    socket.emit('allowtojoin',d);
                    isGameOn = true;
                    isPlayerTwoJoinedLobby = true;
                }
                if(r==false){
                    break;
                }
            }while(r==false)

        })


        socket.on('switch-p2-screen', () => {
            console.log('RECEIVED SWITCH SCREEN')

            
            runMainScreenOnce();

            typed_now = document.getElementById('typed_now-1');
            to_type = document.getElementById('to-type-1');
            to_type_player2 = document.getElementById('to-type-2');

            typedNowPlayerTwo = document.getElementById('typed_now-2');


            if(to_type != null)
                to_type.innerHTML = sentenceArray[sentenceArrayIndex].join(" ");

            if(to_type_player2 != null)
                to_type_player2.innerHTML = sentenceArrayPlayerTwo[sentenceArrayIndexPlayer2].join(" ");


            runTimerOnce();
            let preMainScreen = document.getElementById("pre-main-screen");
            if(preMainScreen != null) preMainScreen.outerHTML = "";
        });
    });

    let typedCharacter = new TypedCharacter();
    let typedCharacterPlayerTwo = new TypedCharacter();
    let sentence = new Sentence();
    sentence.splitSentence();
    let sentencePlayerTwo = new SentencePlayerTwo();
    sentencePlayerTwo.splitSentence();

    new preMainScreen();
    



    var typed_now;
    var to_type;
    var to_type_player2;

    
    
    
    
    addEventListener('keydown', ({key}) => {
        switch(key){
            case 'a':
                typedCharacter.addCharacter('a');
                typedCharacterPlayerTwo.addCharacter('a');
                if(typed_now != null)
                    typed_now.innerHTML += 'a';
                
                player1TypedNowLetter.user = user;
                player1TypedNowLetter.letter = 'a';

                player2TypedNowLetter.user = user;
                player2TypedNowLetter.letter = 'a';


                if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'b':
                typedCharacter.addCharacter('b');
                typedCharacterPlayerTwo.addCharacter('b');
                if(typed_now != null)
                    typed_now.innerHTML += 'b';

                player1TypedNowLetter.user = user;
                player1TypedNowLetter.letter = 'b';

                player2TypedNowLetter.user = user;
                player2TypedNowLetter.letter = 'b';

                
                if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'c':
                typedCharacter.addCharacter('c');
                typedCharacterPlayerTwo.addCharacter('c');
                if(typed_now != null)
                    typed_now.innerHTML += 'c';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'c';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'c';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'd':
                typedCharacter.addCharacter('d');
                typedCharacterPlayerTwo.addCharacter('d');
                if(typed_now != null)
                    typed_now.innerHTML += 'd';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'd';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'd';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'e':
                typedCharacter.addCharacter('e');
                typedCharacterPlayerTwo.addCharacter('e');
                if(typed_now != null)
                    typed_now.innerHTML += 'e';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'e';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'e';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'f':
                typedCharacter.addCharacter('f');
                typedCharacterPlayerTwo.addCharacter('f');
                if(typed_now != null)
                    typed_now.innerHTML += 'f';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'f';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'f';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'g':
                typedCharacter.addCharacter('g');
                typedCharacterPlayerTwo.addCharacter('g');
                if(typed_now != null)
                    typed_now.innerHTML += 'g';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'g';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'g';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'h':
                typedCharacter.addCharacter('h');
                typedCharacterPlayerTwo.addCharacter('h');
                if(typed_now != null)
                    typed_now.innerHTML += 'h';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'h';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'h';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'i':
                typedCharacter.addCharacter('i');
                typedCharacterPlayerTwo.addCharacter('i');
                if(typed_now != null)
                    typed_now.innerHTML += 'i';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'i';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'i';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'j':
                typedCharacter.addCharacter('j');
                typedCharacterPlayerTwo.addCharacter('j');
                if(typed_now != null)
                    typed_now.innerHTML += 'j';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'j';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'j';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'k':
                typedCharacter.addCharacter('k');
                typedCharacterPlayerTwo.addCharacter('k');
                if(typed_now != null)
                    typed_now.innerHTML += 'k';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'k';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'k';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'l':
                typedCharacter.addCharacter('l');
                typedCharacterPlayerTwo.addCharacter('l');
                if(typed_now != null)
                    typed_now.innerHTML += 'l';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'l';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'l';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'm':
                typedCharacter.addCharacter('m');
                typedCharacterPlayerTwo.addCharacter('m');
                if(typed_now != null)
                    typed_now.innerHTML += 'm';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'm';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'm';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'n':
                typedCharacter.addCharacter('n');
                typedCharacterPlayerTwo.addCharacter('n');
                if(typed_now != null)
                    typed_now.innerHTML += 'n';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'n';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'n';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'o':
                typedCharacter.addCharacter('o');
                typedCharacterPlayerTwo.addCharacter('o');
                if(typed_now != null)
                    typed_now.innerHTML += 'o';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'o';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'o';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'p':
                typedCharacter.addCharacter('p');
                typedCharacterPlayerTwo.addCharacter('p');
                if(typed_now != null)
                    typed_now.innerHTML += 'p';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'p';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'p';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'q':
                typedCharacter.addCharacter('q');
                typedCharacterPlayerTwo.addCharacter('q');
                if(typed_now != null)
                    typed_now.innerHTML += 'q';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'q';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'q';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'r':
                typedCharacter.addCharacter('r');
                typedCharacterPlayerTwo.addCharacter('r');
                if(typed_now != null)
                    typed_now.innerHTML += 'r';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'r';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'r';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 's':
                typedCharacter.addCharacter('s');
                typedCharacterPlayerTwo.addCharacter('s');
                if(typed_now != null)
                    typed_now.innerHTML += 's';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 's';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 's';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 't':
                typedCharacter.addCharacter('t');
                typedCharacterPlayerTwo.addCharacter('t');
                if(typed_now != null)
                    typed_now.innerHTML += 't';
                
                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 't';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 't';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'u':
                typedCharacter.addCharacter('u');
                typedCharacterPlayerTwo.addCharacter('u');
                if(typed_now != null)
                    typed_now.innerHTML += 'u';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'u';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'u';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'v':
                typedCharacter.addCharacter('v');
                typedCharacterPlayerTwo.addCharacter('v');
                if(typed_now != null)
                    typed_now.innerHTML += 'v';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'v';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'v';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'w':
                typedCharacter.addCharacter('w');
                typedCharacterPlayerTwo.addCharacter('w');
                if(typed_now != null)
                    typed_now.innerHTML += 'w';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'w';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'w';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'x':
                typedCharacter.addCharacter('x');
                typedCharacterPlayerTwo.addCharacter('x');
                if(typed_now != null)
                    typed_now.innerHTML += 'x';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'x';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'x';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'y':
                typedCharacter.addCharacter('y');
                typedCharacterPlayerTwo.addCharacter('y');
                if(typed_now != null)
                    typed_now.innerHTML += 'y';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'y';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'y';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'z':
                typedCharacter.addCharacter('z');
                typedCharacterPlayerTwo.addCharacter('z');
                if(typed_now != null)
                    typed_now.innerHTML += 'z';

                    player1TypedNowLetter.user = user;
                    player1TypedNowLetter.letter = 'z';
    
                    player2TypedNowLetter.user = user;
                    player2TypedNowLetter.letter = 'z';
    
                    
                    if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                    if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case '`':
                roomNameCreated = prompt("Enter room name");
                user.roomId = roomNameCreated;
                socket.emit('createroom', user);
                break;
            case 'Tab':
                roomName = prompt("Enter room name that you want to join");
                user.roomId = roomName;
                socket.emit('joingame', user);
            case ' ':
                sentence.splitSentence();
                sentencePlayerTwo.splitSentence();
                
                if(typedCharacter.compareTwoStrings(typedCharacter.characters, sentenceArray[0][0]))
                {
                    sentence.deleteFirstArrEl();
                    wordsCounter++;
                }
                else
                {
                    errors++;
                }


                if(typedCharacterPlayerTwo.compareTwoStrings(typedCharacterPlayerTwo.characters, sentenceArrayPlayerTwo[0][0]))
                {
                    sentencePlayerTwo.deleteFirstArrEl();
                    wordsCounterPlayerTwo++;
                }
                else
                {
                    errorsPlayerTwo++;
                }





                //Clear typed character after pressing space
                typedCharacter.clear();
                typedCharacterPlayerTwo.clear();

                if(to_type != null)
                    to_type.innerHTML = sentenceArray[sentenceArrayIndex].join(" ");
                
                
                //Clear typed_now div
                if(to_type != null)
                    typed_now.innerHTML = "";

                if(typedNowPlayerTwo != null)
                    typedNowPlayerTwo.innerHTML = "";


                player1TypedNowLetter.user = user;
                player1TypedNowLetter.letter = 'Whitespace';

                player2TypedNowLetter.user = user;
                player2TypedNowLetter.letter = 'Whitespace';

                let tempObj = {};
                tempObj.user = user;
                tempObj.sentence = to_type?.innerHTML;


                let tempObj2 = {};
                tempObj2.user = user;
                tempObj2.sentence = to_type?.innerHTML;
                
                if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',tempObj);
                if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',tempObj2);

                if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);


                break;
            case 'Backspace':
                typed_now.innerHTML = typed_now.innerHTML.slice(0, -1);
                typedCharacter.remLastChar();

                player1TypedNowLetter.user = user;
                player1TypedNowLetter.letter = 'Backspace';

                player2TypedNowLetter.user = user;
                player2TypedNowLetter.letter = 'Backspace';

                if(isPlayerRoomCreator) socket.emit('typed-p1-to-p2',player1TypedNowLetter);
                if(!isPlayerRoomCreator) socket.emit('typed-p2-to-p1',player2TypedNowLetter);
                break;
            case 'Enter':
                
                
                if(isGameOn)
                {
                    socket.emit('joingame', user);
                    socket.emit('switch-p2-screen', user);
                    runMainScreenOnce();

                    typed_now = document.getElementById('typed_now-1');
                    to_type = document.getElementById('to-type-1');
                    to_type_player2 = document.getElementById('to-type-2');

                    typedNowPlayerTwo = document.getElementById('typed_now-2');


                    if(to_type != null)
                        to_type.innerHTML = sentenceArray[sentenceArrayIndex].join(" ");

                    if(to_type_player2 != null)
                        to_type_player2.innerHTML = sentenceArrayPlayerTwo[sentenceArrayIndexPlayer2].join(" ");


                    runTimerOnce();
                    let preMainScreen = document.getElementById("pre-main-screen");
                    if(preMainScreen != null) preMainScreen.outerHTML = "";
                }
                break;
        }
        
    });

});





