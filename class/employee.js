class Employee
{
    constructor(name, role)
    {
        this.name = name;
        this.role = role;
    }
    getRoleInfo()
    {
        return `${this.name} works as a ${this.role}.`;
    }
}

const employee = new Employee("Zansi", "Full-Stack Developer");
console.log(employee.getRoleInfo());