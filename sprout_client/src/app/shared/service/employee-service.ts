import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../interface/EmployeeModel';

class GetDataService {

    getEmployees(): Observable<EmployeeModel[]> {

        return ajax('https://localhost:44336/api/Employee').pipe(
            map(res => res?.response?.employees.map((item :EmployeeModel[]) => {
                // item.name = '';
                return item;
            }) || [])
        );
    }

    getEmployeeDetails(id: string) {

        return ajax('https://localhost:44336/api/Employee/' + id).pipe(
            map(res => res?.response?.employees.map((item :EmployeeModel) => {
                item.name = '';
                return item;
            }) || [])
        );
    }
}

export const $GetDataService = new GetDataService();