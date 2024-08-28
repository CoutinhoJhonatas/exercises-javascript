import {tax} from "./tax-service.js";
import {discount} from "./pension-service.js";

export function netSalary(employee) {
    const salaryTax = tax(employee.grossSalary);
    const salaryPension = discount(employee.grossSalary);
    return employee.grossSalary - salaryTax - salaryPension;
}

//Outra forma de escrever:

/* import * as pensionService from './pension-service.js';
import * as taxService from './tax-service.js';

export function netSalary(employee) {

    const pension = pensionService.discount(employee.grossSalary);
    const tax = taxService.tax(employee.grossSalary);
    
    return employee.grossSalary - pension - tax;
} */