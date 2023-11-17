class Person{
    constructor(name='Anonymus',age=0){
        this.name = name;
        this.age = age
    }

    getGreeting(){
        return `Hi, I am ${this.name}.`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
    
}

class Student extends Person{

    constructor(name,age,major){
        super(name,age)
        this.major = major;
    }

    hasMajor(){
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()){
            return description += ` has major ${this.major}`
        }
    }
}


// test case 1

class Support extends Person{
    constructor(name,age,support){
        super(name,age)
        this.support = support
    }

    hasSupport(){
        return !!this.support
    }

    getGreeting(){
        let greeting = super.getGreeting()
        if (this.hasSupport()){
            return greeting += `I'm visiting from ${this.support}`
        }
    }


}

let me = new Support('shoaib',20,'India')
console.log(me.getGreeting())

// let me = new Student('shoaib',20,'Computer Engineering')
// console.log(me.getDescription())

// let other = new Person('shoaib',20)
// console.log(other.getDescription())