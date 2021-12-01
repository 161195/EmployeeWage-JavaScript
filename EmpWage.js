//UC-6//calculating monthly wage of employee
const IS_PRESENT=1;
const FULL_TIME = 1; //constant variables
const PART_TIME = 2;
const EMP_RATE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;
let empHrs = 0;
let empWageArray=new Array();

//This function for return working hours
function getWorkingHrs(empAtt)
{
    switch(empAtt)
    {
        case FULL_TIME:
            empHrs=8
            return empHrs;
        case PART_TIME:
            empHrs=4
            return empHrs;
        default:
            empHrs=0
            return empHrs;
    }
}

for(var i=0; i<NUM_OF_WORKING_DAYS; i++)
{  
    let empAtt= Math.floor(Math.random() * 10) % 3;
    empHrs+=getWorkingHrs(empAtt);  
} 
empWage=EMP_RATE_PER_HR*empHrs;
console.log("UC4 forloop results:Total employee wage is " +empWage); 

const MAX_WORKING_HRS=100;
let totalEmpHrs=0;
let totalWorkingDays=1;
let totalEmpWage=0;

function getEmployeeWage(hrs)
{
    return hrs*EMP_RATE_PER_HR;
}
while (totalEmpHrs<=MAX_WORKING_HRS && totalWorkingDays<=NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    //gives random value
    let empAtt = Math.floor(Math.random() * 10) % 3;
    //calling function
    empHrs= getWorkingHrs(empAtt);
    totalEmpHrs+=totalEmpHrs+empHrs;
    totalWorkingDays++;
    empWageArray.push(getEmployeeWage(empHrs));  
}
totalEmpWage=getEmployeeWage(totalEmpHrs);
console.log("UC5 whileloop Result: Total Working Days: "+ NUM_OF_WORKING_DAYS +" Total working hours: "+ totalEmpHrs +" Total Employee Wage: " + empWage);
console.log("UC6 usingArray: " +totalEmpWage);
console.log("Daily Wage Array: " +empWageArray.join(" "));
