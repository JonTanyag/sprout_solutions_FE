import React, { forwardRef, useState, useEffect, memo, useCallback } from 'react';
import './employee-list.component.scss';
import { $GetDataService } from '../shared/service/employee-service';
import { Employee } from '../shared/interface/Employee';
import { EmployeeModel } from '../shared/interface/EmployeeModel';
import { Ref } from '../shared/interface/Ref';
import { Props } from '../shared/interface/Props';
import { cloneDeep } from "lodash";
import { useRxEffect } from "../shared/utils/utils";
import { Button, Icon, Image, Input, List } from "semantic-ui-react";
import { of } from 'rxjs';

interface State {
    loading: boolean;
    sourcesList: EmployeeModel[];
    list: EmployeeModel[];
    expandedList: number[];
}

const initialState = (props: Props) => {
    return {
        loading: false,
        sourcesList: [],
        list: [],
        expandedList: []
    }
}

export const EmployeesComponent = memo(
    forwardRef<Ref, Props>((props, ref) => {
        const [state, setState] = useState<State>(initialState(props));

        useRxEffect(() => $GetDataService.getEmployees().subscribe(res => {
            const list = cloneDeep(res);
            const sourcesList = cloneDeep(res);

            setState(prevState => ({ ...prevState, list, sourcesList }));

        }), []);


        const handleViewDetails = useCallback((item) => {
            return () => {
                console.log('gagagagag', item)
                
            }
        }, [state])

        return (
            <>
                <div className="main">
                    {state.list.map((item, index) => {
                        return (
                            <Button
                                onClick={handleViewDetails(item)}
                                className="container"
                                key={index}>
                                    
                                <div>
                                    <div className="details-section">
                                        <div className="name">
                                            <span>Name: {item.name} </span>
                                        </div>
                                        <div className="attributes">
                                            <div>
                                                <span>
                                                    Basic Salary: {item.basicSalary}
                                                </span>
                                            </div>
                                            <div>
                                                <span>
                                                    Birthday: {item.birthday}
                                                </span>
                                            </div>
                                            <div>
                                                <span>
                                                    TIN: {item.tin}
                                                </span>
                                            </div>
                                            
                                            <div>
                                                <span>
                                                    Employee Type: {item.employeeType}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Button>

                        )
                    })}
                </div>
            </>
        )
    })
)