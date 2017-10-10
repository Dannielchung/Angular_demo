// class
class Person {
    private id;
    protected phone;

    constructor(public name: string) {
        this.name = name;
        console.log(this.name);
    }
    // constructor() {
    //     console.log("haha");
    // }
    public eat() {
        console.log(this.name + " is eating");
    }
    private make() {
        console.log(this.name + " make");
    }
}

class Employee extends Person {
    constructor(name: string, code: string) {
        super(name);
        this.code = code;
        console.log(this.code);
    }
    code: string;
    work() {
        super.eat();
        this.doWork();
    }

    private doWork() {
        console.log(`${this.name} is working`);
    }
}
var e1 = new Employee("name","1");
e1.work();

var p = new Person("xxxx");
p.name = "091234923";
p.eat();

var p2 = new Person("xxxx");
p2.eat();

/**************************************************/
//Generic
var workers: Array<Person> = [];
workers[0] = new Person("Danniel");
workers[1] = new Employee("Danniel","1");
// workers[2] = 2;

