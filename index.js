
//Connecting/access to all the drums via their classes;
var drum = document.querySelectorAll('.drum'); 

//identifying the drums & connecting their sounds.
for(let x of drum){
    x.addEventListener('click', function (){
        var clickIdentified = this.innerHTML; //identifier Esp. for the looped
    press(clickIdentified);

    addAnimation(clickIdentified);
    
//Conntecting their individual sounds through constructor function &
// using switch or if statment to place sound to key/
// new Audio('')
// switch(keyIdentified){
//     case 'a' :
//         new Audio('sounds/tom-4.mp3').play();
//         break;

//     case 's' :
//         new Audio('sounds/tom-3.mp3').play();
//         break;

//     case 'd' :
//         new Audio('sounds/tom-2.mp3').play();
//         break;

//     case 'f' :
//         new Audio('sounds/tom-1.mp3').play();
//         break;

//     case 'j' :
//         new Audio('sounds/snare.mp3').play();
//         break;

//     case 'k' :
//         new Audio('sounds/kick-bass.mp3').play();
//         break;

//     case 'l' :
//         new Audio('sounds/crash.mp3').play();
//         break;
//         default :
//         console.log('not working/playing')
// }
});  
}

//Connecting the keyboard specific keys to the sounds
//connect first the whole HTML document
//...using Event-type 'keypress' to get the keyboard
//...then passing a parameter to identify the keypress(object) and their properties
//...and indexing the property 'key' in the object.k

document.addEventListener('keypress', function (evt){
    var keywords = evt.key; //keypress identifier...
    press(keywords);
addAnimation(keywords);
});

//Creating a CALLBACK function & passing var 'keyIdentified' and
//var 'keywords' as arguments, one after another. 

function press(k){

    switch(k){
        case 'a' :
            new Audio('sounds/tom-4.mp3').play();
            break;
    
        case 's' :
            new Audio('sounds/tom-3.mp3').play();
            break;
    
        case 'd' :
            new Audio('sounds/tom-2.mp3').play();
            break;
    
        case 'f' :
            new Audio('sounds/tom-1.mp3').play();
            break;
    
        case 'j' :
            new Audio('sounds/snare.mp3').play();
            break;
    
        case 'k' :
            new Audio('sounds/kick-bass.mp3').play();
            break;
    
        case 'l' :
            new Audio('sounds/crash.mp3').play();
            break;
            default :
            console.log('not working properly')
    }
}

//Making the drums Animated using a classlist. and settime function

function addAnimation(n){
    var animate = document.querySelector('.' + n);
    animate.classList.add('pressed');
    
    setTimeout(()=>{
        animate.classList.remove('pressed');
    }, 100);
}