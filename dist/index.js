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
console.log(userone.name);
let IsPositive = true;
function getLength(obj) {
    return obj.length;
}
console.log(getLength(['sule', 'krap']));
//# sourceMappingURL=index.js.map