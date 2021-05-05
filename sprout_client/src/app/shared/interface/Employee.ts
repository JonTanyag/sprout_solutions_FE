import { EmployeeType } from "./EmployeeType";

export interface Employee {
    id: string;
    name: string;
    birthday: string;
    tin: string;
    basicSalary: number;
    netSalary: any;
    employeeType: EmployeeType;
}


