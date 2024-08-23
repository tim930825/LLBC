const LN = ({
    1: [[3, 3], [], [[1, 1]], [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]], 1, []],
    2: [[5, 3], [[1, 2]], [[1, 1]], [[0, 0], [-1, 0], [1, 0]], 1, [[0, 0], [0, 1]]],
});//[rows, columns], cancelled_blocks, prerun, rules, per_switch, fixeds

const zero_matrix = (rows, columns) => new Array(columns).fill(0).map((o, i) => new Array(rows).fill(0));

const canvasWidth = window.innerWidth*0.9;
const canvasHeight = window.innerHeight*0.9;
var gamecanvas = document.getElementById("game");
var gamectx = gamecanvas.getContext("2d");
var level = 1;
var maxlevel = window.localStorage.getItem("maxlevel");
if ((maxlevel > 0) != true) {maxlevel = 1;}
var gamePath = "menu";
var game_buttons = [];
var pushed = "Na";
var levelmap = [];
var y = 0;

class menuButtons{
    constructor(number) {
        this.number = number;
        this.x = canvasWidth*(((this.number-1)%5)*0.18+0.065);
        this.y = canvasHeight*(Math.floor((this.number-1)/5)*0.22+0.18);
        this.width = canvasWidth*0.15;
        this.height = canvasHeight*0.18;
        this.index = 0;
        this.run();
    }
    run() {
        if (pushed == this.number) {this.index = 5;}
        else {
            this.index -= 0.1;
            if (this.index < 0) {this.index = 0;}
        }
        gamectx.beginPath();
        gamectx.fillStyle = "#999";
        gamectx.moveTo(this.x, this.y + this.height + 10);
        gamectx.lineTo(this.x, this.y + this.height + this.index);
        gamectx.lineTo(this.x + this.width, this.y + this.height + this.index);
        gamectx.lineTo(this.x + this.width, this.y + this.height + 10);
        gamectx.fill();
        gamectx.stroke();
        gamectx.fillStyle = "#fff";
        gamectx.fillRect(this.x, this.y + this.index, this.width, this.height);
        gamectx.strokeRect(this.x, this.y + this.index, this.width, this.height);
        gamectx.closePath();
        gamectx.beginPath();
        gamectx.fillStyle = "#000";
        gamectx.font = this.height*10/(this.number.toString().length+10)+"px Arial";
        gamectx.textAlign = "center";
        gamectx.fillText(this.number, this.x + this.width*0.5, this.y + this.height*0.9);
        gamectx.closePath();
    }
    Poscheck(px, py) {if ((this.x <= px)&&(px <= this.x+this.width)&&(this.y <= py)&&(py <= this.y+this.height)) {pushed = this.number;}}
    Posover(px, py) {
        if ((this.x <= px)&&(px <= this.x+this.width)&&(this.y <= py)&&(py <= this.y+this.height)&&(pushed == this.number)) {this.clickReact();}
    }
    clickReact() {
        level = this.number;
        switch_to_level();
    }
}

class gameButtons{
    constructor(number, CRs, fixeds) {
        this.number = number;
        this.position = [(number-1)%CRs[0], Math.floor((number-1)/CRs[0])];
        this.light = levelmap[this.position[1]][this.position[0]];
        if (this.light !== "Na") {
            this.light = levelmap[this.position[1]][this.position[0]];
            if (fixeds.some(point => this.position.every((value, i) => value === point[i]))) {this.fixed = true;}
            else {this.fixed = false;}
            let buttonRestriction = [0.1, 0.1, 0.8, 0.8];
            if (CRs[0] > CRs[1]) {buttonRestriction = [0.1, 0.5 - CRs[1]/CRs[0]*0.5,  0.8,  CRs[1]/CRs[0]*0.8];}
            else if (CRs[0] < CRs[1]) {buttonRestriction = [0.5 - CRs[0]/CRs[1]*0.5, 0.1, CRs[0]/CRs[1]*0.8, 0.8];}
            if (canvasWidth > canvasHeight) {
                this.x = (canvasWidth - canvasHeight)*0.5 + canvasHeight/CRs[0]*(this.position[0] + buttonRestriction[0]);
                this.y = canvasHeight/CRs[1]*(this.position[1] + buttonRestriction[1]);
                this.width = canvasHeight/CRs[0]*buttonRestriction[2];
                this.height = canvasHeight/CRs[1]*buttonRestriction[3];
            }
            else {
                this.x = canvasWidth/CRs[0]*(this.position[0] + buttonRestriction[0]);
                this.y = (canvasHeight - canvasWidth)*0.5 + canvasWidth/CRs[1]*(this.position[1] + buttonRestriction[1]);
                this.width = canvasWidth/CRs[0]*buttonRestriction[2];
                this.height = canvasWidth/CRs[1]*buttonRestriction[3];
            }
        }
        this.index = 0;
        this.run();
    }
    run() {
        if (this.light !== levelmap[this.position[1]][this.position[0]]) {
            this.light = levelmap[this.position[1]][this.position[0]];
            this.index = 5;
        }
        if (pushed == this.number) {this.index = 5;}
        else {
            this.index -= 0.1;
            if (this.index < 0) {this.index = 0;}
        }
        gamectx.beginPath();
        if (this.fixed == false) {
            gamectx.fillStyle = "#999";
            gamectx.moveTo(this.x, this.y + this.height + 10);
            gamectx.lineTo(this.x, this.y + this.height + this.index);
            gamectx.lineTo(this.x + this.width, this.y + this.height + this.index);
            gamectx.lineTo(this.x + this.width, this.y + this.height + 10);
            gamectx.fill();
            gamectx.stroke();
        }
        else {this.index = 0;}
        if (this.light == 1) {gamectx.fillStyle = "#fff";}
        else {gamectx.fillStyle = "#000";}
        gamectx.fillRect(this.x, this.y + this.index, this.width, this.height);
        gamectx.strokeRect(this.x, this.y + this.index, this.width, this.height);
        gamectx.closePath();
    }
    Poscheck(px, py) {if ((this.x <= px)&&(px <= this.x+this.width)&&(this.y <= py)&&(py <= this.y+this.height)) {pushed = this.number;}}
    Posover(px, py) {
        if ((this.x <= px)&&(px <= this.x+this.width)&&(this.y <= py)&&(py <= this.y+this.height)&&(pushed == this.number)&&(this.fixed == false)) {this.clickReact();}
    }
    clickReact() {
        levelmap = turnlight(levelmap, LN[level], this.position);
    }
}

gamecanvas.addEventListener("mousedown", function(event){
    let mousePos = getMousePos(gamecanvas, event);
    game_buttons.forEach(buttons => {buttons.Poscheck(mousePos.x, mousePos.y);});
});

gamecanvas.addEventListener("mouseup", function(event){
    let mousePos = getMousePos(gamecanvas, event);
    game_buttons.forEach(buttons => {buttons.Posover(mousePos.x, mousePos.y);});
    pushed = "Na";
});

function getMousePos(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function switchlight(map , point ,per_switch) {
    let changed_map = map;
    if (typeof(changed_map[point[1]][point[0]]) == "number") {
        changed_map[point[1]][point[0]] += per_switch;
        if (changed_map[point[1]][point[0]] > 1) {changed_map[point[1]][point[0]] = 0}
    }
    return(changed_map);
}

function turnlight(map, content, point) {
    content[3].forEach(rule_point => {
        let xp = point[0]+rule_point[0];
        let yp = point[1]+rule_point[1];
        if ((xp >= 0)&&(xp < content[0][0])&&(yp >= 0)&&(yp < content[0][1])) {map = switchlight(map, [xp, yp], content[4]);}
    });
    return(map);
}

function overcheck() {
    let sum = 0;
    game_buttons.forEach(BLs => {sum += BLs.light + BLs.index;});
    if (sum == 0) {
        if ((level == maxlevel)&&(maxlevel < Object.getOwnPropertyNames(LN).length)) {maxlevel ++;}
        window.localStorage.setItem("maxlevel", maxlevel);
        setTimeout(function() {
            if (level < maxlevel) {
                if (confirm("Level "+level+" CLEAR\nMove on to the next level?") == true) {
                    level ++;
                    switch_to_level();
                }
                else {switch_to_menu();}
            }
            else {
                alert("Level "+level+" Clear");
                switch_to_menu();

            }
        }, 10);
    }
}

function creatmap(content) {
    let map = zero_matrix(content[0][0], content[0][1]);
    content[1].forEach(point => {
        if (point[0] == "r") {map[point[1]].fill("Na");}
        else if (point[0] == "c") {map.forEach(columns => {columns[point[1]] = "Na"});}
        else {map[point[0]][point[1]] = "Na";}
    });
    content[2].forEach(point => {map = turnlight(map, content, point);});
    
    return(map);
}

function resizeCanvas() {
    c_H = canvasHeight;
    gamecanvas.width = canvasWidth;
    gamecanvas.height = c_H;
}

function runGame() {
    gamectx.clearRect(0, 0, canvasWidth, c_H);
    gamectx.beginPath();
    gamectx.fillStyle = "#456789";
    gamectx.fillRect(0, 0, canvasWidth, c_H);
    gamectx.closePath();
    if (gamePath == "level") {
        let text = "Level "+level;
        gamectx.beginPath();
        gamectx.fillStyle = "#000";
        gamectx.textAlign = "center";
        if (canvasWidth > canvasHeight) {
            let difference = canvasWidth - canvasHeight;
            gamectx.font = difference*1.5/(text.length+10)+"px Arial";
            gamectx.fillText(text, difference*0.25, canvasHeight*0.15);
        }
        else {
            let difference = canvasHeight - canvasWidth;
            gamectx.font = difference*4/(text.length+10)+"px Arial";
            gamectx.fillText(text, canvasWidth*0.5, difference*0.4);
        }
        gamectx.closePath();
    }
    game_buttons.forEach(buttons => {buttons.run();});
    overcheck();
    setTimeout(function() {runGame()}, 10);
}

function switch_to_menu() {
    resizeCanvas();
    c_H = Math.max(canvasHeight*(Math.floor((maxlevel-1)/5)*0.22+0.4), canvasHeight);
    gamecanvas.height = c_H;
    gamePath = "menu";
    pushed = "Na";
    game_buttons = [];
    for (i = 1; i <= maxlevel; i++) {game_buttons.push(new menuButtons(i));}
}

function switch_to_level() {
    resizeCanvas();
    gamePath = "level";
    pushed = "Na";
    game_buttons = [];
    levelmap = creatmap(LN[level]);
    let CRs = LN[level][0];
    let fixeds = LN[level][5];
    for (i = 1; i <= CRs[0]*CRs[1]; i++) {game_buttons.push(new gameButtons(i, CRs, fixeds));}
    for (i = game_buttons.length-1; i >= 0; i--) {if (game_buttons[i].light == "Na") {game_buttons.splice(i, 1)}}
}

window.onload = function() {
    resizeCanvas();
    switch_to_menu();
    runGame();
}