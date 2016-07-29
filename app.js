//Each employee array should become an instance of an object (probably called something like Person).
//This will also mean that you need to adjust the rest of the logic to accept properties rather than array index.
//The original employees array that was used to store each person does not need to be converted to an object. Meaning that you can put your new Person objects inside of an array.
//Once you are complete, post to GitHub and submit via this app.





var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
//current functios initilatiation is being placed in employee
var employees = [atticus, jem, boo, scout];
//EmployeeInfo stores data from function call with employees in parameter
var employeeInfo = [];
//employeeIncomeOutlook stores objects
var employeeIncomeOutlook = [];

function calculateSTI(empInfo){
    var name = empInfo[0];
    var empNumber = empInfo[1];
    var currentSalary = Math.round(parseFloat(empInfo[2]));
    var rating = empInfo[3];

    var bonusPercent = 0;

    var processedEmployee = [];

    var bonusMoney = 0;

    var totalSalary = 0;

    switch(rating){
        case 0:
        case 1:
        case 2:
            bonusPercent = 0;
            break;
        case 3:
            bonusPercent = .04;
            break;
        case 4:
            bonusPercent = .06;
            break;
        case 5:
            bonusPercent = .10;
            break;
        default:
            bonusPercent = 0;
    }

    bonusPercent = adjustBonusPercent(empNumber, bonusPercent, currentSalary);
  //  console.log(bonusPercent);

    processedEmployee[0] = name;
    processedEmployee[1] = bonusPercent;

    bonusMoney = Math.round(bonusPercent * currentSalary);
    totalSalary = bonusMoney + currentSalary;

    processedEmployee[2] = totalSalary;
    processedEmployee[3] = bonusMoney;

    return processedEmployee;

}

function adjustBonusPercent(empNumber, bonusPercent, currentSalary){
    //console.log("first parameter check ", bonusPercent)
    if(empNumber.length == 4){
        bonusPercent += .05;
      //  console.log(bonusPercent);
    }

    if(currentSalary > 65000){
        bonusPercent -= .01;
    }

    if(bonusPercent > .13){
        bonusPercent = .13;
    }
    return bonusPercent;
}
//This is the function above that loops through employee array
for(var i = 0; i < employees.length ; i++){
    employeeInfo.push(calculateSTI(employees[i]));
    console.log(calculateSTI(employees[i]));
}



function Person(nameOfEmp, empNumber, salary, rating){
  this.nameOfEmp = nameOfEmp;
  this.empNumber = empNumber;
  this.salary = salary;
  this.rating = rating;

}

var emAtticus = new Person("Atticus", "2405", "47000", 3);
  emAtticus.bonusPercent = employeeInfo[0][1];
  emAtticus.totalIncome = employeeInfo[0][2];
  emAtticus.totalBonus = employeeInfo[0][3];
  //console.log(emAtticus);
var emJem = new Person("Jem", "62347", "63500", 4);
emJem.bonusPercent = employeeInfo[1][1];
emJem.totalIncome = employeeInfo[1][2];
emJem.totalBonus = employeeInfo[1][3];
//console.log(emJem);

var emBoo = new Person("Boo", "11435", "54000", 3);
emBoo.bonusPercent = employeeInfo[2][1];
emBoo.totalIncome = employeeInfo[2][2];
emBoo.totalBonus = employeeInfo[2][3];
//console.log(emBoo);
var emScout = new Person("Scout", "6243", "74750", 5);
emScout.bonusPercent = employeeInfo[3][1];
emScout.totalIncome = employeeInfo[3][2];
emScout.totalBonus = employeeInfo[3][3];
//console.log(emScout);

employeeIncomeOutlook.push(emAtticus, emJem, emBoo, emScout);
console.log(employeeIncomeOutlook);
