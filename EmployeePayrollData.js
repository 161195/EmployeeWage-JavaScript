class EmployeePayrollData
{
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor (...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3]
        this.startDate = params[4];
    }
    //getter and setter method
    get name() 
    {
        return this._name;
    }
    set name(name) 
    {
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{1}$');
        if (namePattern.test(name))
        this._name = name;
        else
        throw new "Please enter valid name";
    }
    
    //method
    toString()
    {
        return "id=" +this.id + ", name=" +this.name +", salary=" +this.salary;
    }
}
let EmployeePayroll = new EmployeePayrollData(1, "Ms",33333333);
console.log(EmployeePayroll.toString());
let newEmployeePayroll = new EmployeePayrollData(3,"As",3333333,"F",new Date());
console.log(newEmployeePayroll);