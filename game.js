const LN = ({
    1: [[3, 3], [], [[1, 1]], [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]], 1],
    2: [[5, 5], [], [[3, 3]], [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]], 1],
});//[row, column], cancelled_blocks, prerun, rules, per_switch

const zero_matrix = (rows, columns) => new Array(columns).fill(0).map((o, i) => new Array(rows).fill(0));

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

function overclick() {
    let sum = 0;
    lights.forEach(value => {sum += value;});
    if (sum == 0) {
        setTimeout(function() {
            if (confirm("n") == true) {
            location.href = "";
            }
        }, 10);
    }
}

function creatmap(content) {
    let map = zero_matrix(content[0][0], content[0][1]);
    content[1].forEach(point => {
        if (point[0] == "c") {map[point[1]].fill("Na");}
        else if (point[0] == "r") {map.forEach(columns => {columns[point[1]] = "Na"});}
        else {map[point[0]][point[1]] = "Na";}
    });
    content[2].forEach(point => {map = turnlight(map, content, point);});
    
    return(map);
}

console.log(creatmap(LN[1]));