const LN = ({
    1: [[5, 1], [], [[2, 0]], [[0, 0], [-1, 0], [1, 0]], 1, []],
    2: [[8, 1], [], [[4, 0],[2, 0],[3, 0],[6, 0],[4, 0]], [[0, 0], [-1, 0], [1, 0]], 1, []],
    3: [[10, 1], [], [[1, 0],[2, 0],[5, 0],[6, 0]], [[0, 0], [-1, 0], [1, 0]], 1, []],
    4: [[5, 1], [], [[2, 0]], [[-1, 0], [1, 0]], 1, []],
    5: [[8, 1], [], [[4, 0],[3, 0]], [[-1, 0], [1, 0]], 1, []],
    6: [[10, 1], [], [[0, 0],[1, 0],[5, 0],[6, 0],[9, 0],[7, 0]], [[-1, 0], [1, 0]], 1, []],
    7: [[3, 3], [], [[1, 1]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]], 1, []],
    8: [[3, 3], [], [[0, 0], [2, 2], [1, 1]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]], 1, []],
    9: [[3, 3], [], [[0, 1], [2, 1], [1, 1]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]], 1, []],
    10: [[5, 5], [[3, 0], [3, 1], [3, 2], [3, 3], [0, 3], [1, 3], [2, 3]], [[1, 1], [0, 0], [2, 1], [0, 2], [0, 4], [2, 4], [4, 4], [4, 3], [4, 2]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]], 1, []],
    11: [[3, 3], [], [[1, 1]], [[1, 0], [-1, 0], [0, 1], [0, -1]], 1, []],
    12: [[3, 3], [], [[0, 1], [2, 1]], [[1, 0], [-1, 0], [0, 1], [0, -1]], 1, []],
    13: [[3, 3], [], [[0, 0], [0, 2], [1, 0]], [[1, 0], [-1, 0], [0, 1], [0, -1]], 1, []],
    14: [[3, 3], [], [[1, 1]], [[0, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    15: [[3, 3], [], [[0, 0], [0, 2], [2, 0], [2, 2], [1, 1]], [[0, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    16: [[3, 3], [], [[0, 2], [1, 0], [2, 2], [0, 1], [2, 1]], [[0, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    17: [[3, 3], [], [[1, 1]], [[1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    18: [[3, 3], [], [[0, 0], [0, 1]], [[1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    19: [[3, 3], [], [[1, 0], [1, 1], [0, 0], [0, 1]], [[1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    20: [[5, 5], [[0, 2], [1, 2], [3, 2], [4, 2], [2, 0], [2, 1], [2, 3], [2, 4]], [[4, 0], [2, 2], [0, 0], [0, 4], [4, 4],[0, 1], [0, 3], [3, 0], [3, 4]], [[0, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    21: [[3, 3], [[1, 1]], [[1, 0], [1, 2], [0, 0], [2, 0],[0, 2], [2, 2], [0, 1], [2, 1]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]], 1, []],
    22: [[3, 3], [[0, 0], [2, 1], [0, 2]], [[1, 0], [1, 1], [0, 1], [2, 2]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]], 1, []],
    23: [[5, 3], [[1, 0], [2, 0], [2, 1], [0, 3], [0, 4], [1, 4]], [[1, 0], [3, 2], [2, 1], [1, 1], [3, 1], [0, 0], [4, 2]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]], 1, []],
    24: [[5, 3], [[1, 1], [2, 1], [1, 3], [0, 3]], [[0, 2], [0, 0], [4, 0], [4, 2], [2, 1], [1, 0], [3, 2]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]], 1, []],
    25: [[5, 5], [], [[0, 0], [1, 1],[2, 2], [3, 3], [4, 4], [3, 1], [1, 3], [4, 0], [0, 4]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]], 1, []],
    26: [[3, 3], [[0, 0], [2, 2]], [[2, 0], [0, 2], [0, 1], [2, 1], [1, 0], [1, 2], [1, 1]], [[0, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    27: [[3, 3], [[1, 2], [2, 1]], [[0, 0], [2, 0], [0, 2], [1, 1]], [[0, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    28: [[4, 4], [[0, 1], [0, 3], [1, 0], [1, 2], [2, 1], [2, 3], [3, 0], [3, 2]], [[1, 1], [2, 2], [0, 0], [3, 3], [1, 1], [2, 0], [0, 2], [2, 2]], [[0, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    29: [[5, 3], [[0, 0], [0, 1], [1, 0], [0, 3], [0, 4], [1, 4]], [[1, 1], [2, 1], [2, 2], [2, 1], [1, 2], [3, 2]], [[0, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    30: [[5, 5], [], [[2, 2], [1, 1], [0, 0], [0, 4], [2, 4], [1, 3], [2, 0]], [[0, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    31: [[3, 3], [], [[1, 1]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    32: [[3, 3], [], [[0, 0], [2, 0], [0, 2], [2, 2]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    33: [[3, 3], [], [[0, 0], [2, 0], [0, 2], [2, 2], [0, 1], [1, 0], [2, 1], [1, 2], [1, 1]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    34: [[4, 4], [], [[1, 1], [2, 2], [2, 1], [1, 2], [0, 2], [3, 1], [1, 0], [2, 3], [0, 3], [3 ,0]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
    35: [[5, 5], [], [[1, 1], [1, 2], [1, 3], [2, 3], [3, 3], [3, 2], [3, 1], [2, 1], [2, 2]], [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]], 1, []],
});//[rows, columns], cancelled_blocks, prerun, rules, per_switch, fixeds

const zero_matrix = (rows, columns) => new Array(columns).fill(0).map((j, i) => new Array(rows).fill(0));

var canvasWidth = window.innerWidth*0.9;
var canvasHeight = window.innerHeight*0.9;
var gamecanvas = document.getElementById("game");
var gamectx = gamecanvas.getContext("2d");
var level = 1;
var maxlevel = window.localStorage.getItem("maxlevel");
if ((maxlevel > 0) != true) {maxlevel = 1;}
var gamePath = "menu";
var game_buttons = [];
var pushed = "Na";
var levelmap = [];

class menuButtons{
    constructor(number) {
        this.number = number;
        this.x = canvasWidth*(((this.number-1)%5)*0.18+0.065);
        this.y = canvasHeight*(Math.floor((this.number-1)/5)*0.22+0.18);
        this.width = canvasWidth*0.15;
        this.height = canvasHeight*0.18;
        this.index = 0;
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
            this.resize(CRs);
        }
        this.index = 0;
    }
    resize(CRs) {
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

window.addEventListener("resize", function() {
    canvasWidth = window.innerWidth*0.9;
    canvasHeight = window.innerHeight*0.9;
    resizeCanvas();
    if (gamePath == "menu") {
        c_H = Math.max(canvasHeight*(Math.floor((maxlevel-1)/5)*0.22+0.4), canvasHeight);
        gamecanvas.height = c_H;
    }
    else {game_buttons.forEach(buttons => {buttons.resize(LN[level][0]);});}
})

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

//36: [[60, 30], [], [
        [0, 10], [0, 11], [0, 12], [0, 13], [0, 14], [0, 15], [0, 16], [0, 17], [0, 18], [0, 19], 
        [1, 10], [1, 11], [1, 12], [1, 13], [1, 14], [1, 15], [1, 16], [1, 17], [1, 18], [1, 19], 
        [2, 10], [2, 11], [2, 12], [2, 13], [2, 14], [2, 15], [2, 16], [2, 17], [2, 18], [2, 19],
        [3, 18], [3, 19],
        [4, 18], [4, 19],
        [5, 18], [5, 19],
        [8, 10], [8, 11], [8, 12], [8, 13], [8, 14], [8, 15], [8, 16], [8, 17], [8, 18], [8, 19], 
        [9, 10], [9, 11], [9, 12], [9, 13], [9, 14], [9, 15], [9, 16], [9, 17], [9, 18], [9, 19], 
        [10, 10], [10, 11], [10, 12], [10, 13], [10, 14], [10, 15], [10, 16], [10, 17], [10, 18], [10, 19],
        [11, 18], [11, 19],
        [12, 18], [12, 19],
        [13, 18], [13, 19],
        [16, 10], [16, 11], [16, 12], [16, 13], [16, 14], [16, 15], [16, 16], [16, 17], [16, 18], [16, 19],
        [17, 10], [17, 11], [17, 12], [17, 13], [17, 14], [17, 15], [17, 16], [17, 17], [17, 18], [17, 19],
        [18, 10], [18, 11], [18, 14], [18, 15], [18, 18], [18, 19],
        [19, 10], [19, 11], [19, 14], [19, 15], [19, 18], [19, 19],
        [20, 10], [20, 11], [20, 14], [20, 15], [20, 18], [20, 19],
        [21, 10], [21, 11], [21, 12], [21, 13], [21, 14], [21, 15], [21, 16], [21, 17], [21, 18], [21, 19],
        [22, 11], [22, 12], [22, 13], [22, 16], [22, 17], [22, 18],
        [25, 11], [25, 12], [25, 13], [25, 14], [25, 15], [25, 16], [25, 17], [25, 18],
        [26, 10], [26, 11], [26, 12], [26, 13], [26, 14], [26, 15], [26, 16], [26, 17], [26, 18], [26, 19],
        [27, 10], [27, 11], [27, 18], [27, 19],
        [28, 10], [28, 11], [28, 18], [28, 19],
        [29, 10], [29, 11], [29, 18], [29, 19],
        [30, 10], [30, 11], [30, 12], [30, 17], [30, 18], [30, 19],
        [31, 11], [31, 12], [31, 17], [31, 18],
        [37, 10], [37, 13], [37, 19],
        [38, 11], [38, 13], [38, 19],
        [39, 12], [39, 13], [39, 14], [39, 15], [39, 16], [39, 17], [39, 18],
        [40, 19],
        [41, 12], [41, 15], [41, 17], [41, 19],
        [42, 10], [42, 11], [42, 12], [42, 13], [42, 14], [42, 15], [42, 16], [42, 17], [42, 18], [42, 19],
        [43, 12], [43, 14], [43, 19],
        [44, 19],
        [45, 11], [45, 12], [45, 13], [45, 14], [45, 15], [45, 16], [45, 17], [45, 18], [45, 19],
        [46, 11], [46, 12], [46, 19],
        [47, 10], [47, 12], [47, 13], [47, 14], [47, 15], [47, 16], [47, 17], [47, 18], [47, 19],
        [48, 10], [48, 12], [48, 19],
        [50, 10], [50, 14],
        [51, 11], [51, 14], [51, 19], 
        [52, 12], [52, 14], [52, 18],
        [53, 14], [53, 15], [53, 16], [53, 17],
        [54, 10], [54, 11], [54, 12], [54, 13], [54, 14],
        [55, 14],
        [56, 14], [56, 15], [56, 16], [56, 17], [56, 18],
        [57, 12], [57, 14], [57, 19],
        [58, 11], [58, 14], [58, 19],
        [59, 10], [59, 14], [59, 18],[59, 19],
        ], 
        [[0, 0]], 1, []],
