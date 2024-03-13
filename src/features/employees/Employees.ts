import { Employee } from "./Employee";

export class Employees {
  private employees: Employee[];

  constructor() {
    this.employees = [];
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  //   getEmployees(): Employee[] {
  //     return this.employees;
  //   }

  getAllEmployees(): Employee[] {
    return this.employees;
  }
}
