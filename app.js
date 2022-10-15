 
              //ES6 Classes Assignment



// 2.Create an Automobile class. The class will have name, model, color, type properties and create different methods e.g openOrCloseDoor() logs doors are opened or closed, start() logs car is ready for drive. 
 
class Automobile{
    constructor(color,name,model,type){
    this.color=color;
    this.name=name;
    this.model=model;
    this.type=type;
    }

    OpenDoors(){


    console.log(this.name+" Doors are  opened")


    }
    ClosedDoors(){


        console.log(this.name+" Doors are  closed")
    
    
        }
        Start(){


            console.log(this.name+" Automobile is ready to drive")
        
        
            }
}

let Mobile1=new Automobile("blue","corolla",2014,"4weheel")

console.log(Mobile1);

// // 3.Create Car, Bus and Truck child class from the Automobile Class

class car extends Automobile{
Engine;
dimension;
wheels;
}
class bus extends Automobile{
   weigth;
   wheels;


}
class Truck extends Automobile{
    truckweigth;
    doorcolor;
    truckmirrors;

}

let truck1= new truck();
let car1= new car
();
let bus1= new bus();



// 1. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. Incomes is an array of objects income and its description and expenses is also an array of objects having expense and its description.
// class PersonAccount{
//     constructor(incomes){
//         this.firstname;
//         this.lastname;
//         this.incomes[{Salary:salary,
//         Description:description}];
//         this.expenses[{Expenses:expenses,ExpensesDescription:expdescp}]
//     }
//     totalIncome(){
    
//     }
    
//     totalexpense(){
    
//     }
//     accountinfo(){
    
//     }
    
//     addIncome(){
    
    
//     }
    
//     addexpense(){
    
//     }
    
//     accountbalance(){
    
    
//     }
    
//     }
//     let anus=new PersonAccount();
//     console.log(anus);