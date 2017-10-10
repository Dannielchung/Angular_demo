/**************************************************/
//Interface
(function(){
    //接口生成屬性
    interface IPerson {
        name: string;
        age: number;
    }
    
    class Person {
        constructor(public config: IPerson){
    
        }
    }

    var p1 = new Person({
        name: "Danniel",
        age: 18
    });

    //接口生成方法
    interface Animal{
        eat();
    }

    class Sheep implements Animal {
        eat(){
            console.log("I'm eating grass");
        }
    }

    class Tiger implements Animal {
        eat(){
            console.log("I'm eating meat");
        }
    }
})();
