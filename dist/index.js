"use strict";
const user = {
    name: "Shaaibu",
    id: 12,
};
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const userone = new UserAccount("Murphy", 1);
let IsPositive = true;
function getLength(obj) {
    return obj.length;
}
function logPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
const point = { x: 12, y: 26, };
logPoint(point);
class Virtual {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newPoint = new Virtual(13, 33);
console.log(newPoint);
//# sourceMappingURL=index.js.map