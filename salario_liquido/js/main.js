import Employee from "./models/employee.js";
import {netSalary} from "./services/salary-service.js";

const dados = document.getElementById("grossSalaryInput").innerHTML.split('\n');

const employee = new Employee(dados[0], Number(dados[1]));
const salary = netSalary(employee);

console.log(`Funcionário = ${employee.name}`);
console.log(`Salário bruto = ${employee.grossSalary.toFixed(2)}`);
console.log(`Salário liquido = ${salary.toFixed(2)}`);