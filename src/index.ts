// Describing an interface for object shape

interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Shaaibu",
    id: 12,
}

// interface declaration with classes

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id
    }
}

const userone: User = new UserAccount('Murphy', 1)

console.log(userone.name)

