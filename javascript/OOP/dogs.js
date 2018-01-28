function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function() {
        console.log(this.name + " barks. Woof! Woof!")
    }
}

let rusty = new Dog("Rusty", 3);
let fido = new Dog("Fido", 1);

rusty.bark(); //"Rusty barks. Woof! Woof!""
rusty.age //"Rusty"