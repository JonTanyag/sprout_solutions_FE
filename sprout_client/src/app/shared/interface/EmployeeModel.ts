import { EmployeeType } from "./EmployeeType";

export interface EmployeeModel {
    id: string;
    name: string;
    birthday: string;
    tin: string;
    basicSalary: number;
    netSalary: any;
    employeeType: EmployeeType
}
