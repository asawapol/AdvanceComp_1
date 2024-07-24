class Dog {
    constructor(name){
        this._name = name;
    }
    introdue(){
        console.log("This is" + this._name +" !");

    }
    //A static method
    static bark(){
        console.log("Woof!");
    }
}

const myDog = new Dog("Buter");
myDog.introdue();

Dog.bark();