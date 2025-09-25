//animção atual
let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change',function(e){
    playerState = e.target.value;
});

//canvas para animações

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = (canvas.width=600);
const CANVAS_HEIGHT = (canvas.height= 600);

//Imagem

const playerImage = new Image();
playerImage.src = '/image/shadow_dog.png';
const spriteWidth = 575;
const spriteHeigth = 523;
let gameframe = 0;
const staggerFrames = 5;

const spriteAnimations = [];
const animationStates = [
    {name:'idle',frames: 7,},
    {name: 'Jump',frames: 7,},
    {name: 'down',frames: 7,},
    {name: 'bolt',frames: 9,},
    {name: 'dizzy',frames: 11,},
    {name: 'Sit',frames: 5,},
    {name: 'rolling',frames: 7,},
    {name: 'attack',frames: 7,},
    {name: 'faint',frames: 12,},
    {name: 'damage',frames: 4,},

];



animationStates.forEach((state,index) => {
    let frames =  {
        loc:[],
    };
    for (let i = 0; i < state.frames;i++){
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeigth;
        frames.loc.push({x:positionX,y:positionY});
    };
    spriteAnimations[state.name] = frames;
});

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let position = Math.floor(gameframe/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(
        playerImage,
        frameX,
        frameY,
        spriteWidth,
        spriteHeigth,
        0,
        0,
        spriteWidth,
        spriteHeigth,
    );

    gameframe ++;
    requestAnimationFrame(animate);
}
animate();