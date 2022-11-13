let o = {
    name: "Ken",
    age: 27,
    skill: "coding",
    say() {
        console.log(`my name is ${this.name}, ${this.age} years old.`);
    }
}

let { name, skill, age } = o;
console.log(name);
console.log(age);