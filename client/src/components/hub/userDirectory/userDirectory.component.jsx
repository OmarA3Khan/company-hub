import React from 'react';
import {useState, useEffect} from 'react';
import InformationRow from "../informationRow/informationRow.component";
import StatusOverview from '../statusOverview/statusOverview.component';
import Icon from '../../base/icon/icon.component';


import './userDirectory.styles.scss';

const UserDirectory = () => {
    const [employeeData, setEmployeeData] = useState([]);
    const [overviewData] = useState([
        {
            status: 'sick',
            iconName: 'pill',
            iconSize: 20,
            iconCount: 2,
            iconColor: '#4186ffba'
        }, {
            status: 'vacation',
            iconName: 'airplane',
            iconSize: 22,
            iconCount: 2,
            iconColor: '#4186ffba'
        }, {
            status: 'Day off',
            iconName: 'pin',
            iconSize: 22,
            iconCount: 2,
            iconColor: '#4186ffba'
        }, {
            status: 'Available',
            iconName: 'availableUser',
            iconSize: 20,
            iconCount: 2,
            iconColor: '#4186ffba'
        },
    ]);

    useEffect(() => {
        setEmployeeData([
            {
                id: "1",
                firstName: "John",
                lastName: "Doe",
                designation: "FE Developer",
                project: "project1",
                unit: "Development",
                status: "Busy",
                assignmentStatus: "Client Side",
                timeZone: "UTC+2",
                imgSrc: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
            },
            {
                id: "2",
                firstName: "Jane",
                lastName: "Smith",
                designation: "FE Developer",
                project: "project2",
                unit: "Development",
                status: "Holiday",
                assignmentStatus: "Internal project",
                timeZone: "UTC-3",
                imgSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            },
            {
                id: "3",
                firstName: "Bob",
                lastName: "Johnson",
                designation: "DevOps",
                project: "project3",
                unit: "Devops",
                status: "available",
                assignmentStatus: "Client Side",
                timeZone: "UTC+5"
            },
            {
                id: "4",
                firstName: "Alice",
                lastName: "Lee",
                designation: "UI/UX",
                project: "project3",
                unit: "Design",
                status: "Busy",
                assignmentStatus: "Internal project",
                timeZone: "UTC-10"
            }, {
                id: "5",
                firstName: "Sahana",
                lastName: "J",
                designation: "UI/UX",
                project: "project4",
                unit: "Design",
                status: "Busy",
                assignmentStatus: "Internal project",
                timeZone: "UTC+5"
            }, {
                id: "6",
                firstName: "John",
                lastName: "Doe",
                designation: "FE Developer",
                project: "project1",
                unit: "Development",
                status: "Busy",
                assignmentStatus: "Client Side",
                timeZone: "UTC+2",
                imgSrc: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
            }, {
                id: "7",
                firstName: "Jane",
                lastName: "Smith",
                designation: "FE Developer",
                project: "project2",
                unit: "Development",
                status: "Holiday",
                assignmentStatus: "Internal project",
                timeZone: "UTC-3",
                imgSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            }, {
                id: "8",
                firstName: "Bob",
                lastName: "Johnson",
                designation: "DevOps",
                project: "project3",
                unit: "Devops",
                status: "available",
                assignmentStatus: "Client Side",
                timeZone: "UTC+5"
            }

        ]);
    }, []);

    return (
        <div className='dashboard'>
            <div className="dashboard__col">
                <div className='dashboard__container dashboard__container--employees'>
                    <div className='dashboard__row'>
                        <Icon color={'#6A6D72'}
                            className='employees-icon'
                            icon={'users'}
                            size={24}/>
                        <h4>Employees
                            <span className='employee-count'>
                                {
                                employeeData.length
                            }</span>
                        </h4>
                    </div>
                    <div className='dashboard__row'>
                        <StatusOverview overViewData={overviewData}/>
                    </div>
                    <div className='information-row__header'>
                        <span className='header__element'></span>
                        <span className='header__element'></span>
                        <span className='header__element'>Project</span>
                        <span className='header__element'>Unit</span>
                        <span className='header__element'>Time Zone</span>
                        <span>Status</span>
                        <span className='header__element'>Assignment</span>
                    </div>
                    {
                    employeeData.map((employee, index) => {
                        const {
                            firstName,
                            lastName,
                            designation,
                            project,
                            unit,
                            status,
                            assignmentStatus,
                            timeZone,
                            imgSrc
                        } = employee;
                        const metaData = {
                            firstName,
                            lastName,
                            designation,
                            project,
                            unit,
                            status,
                            assignmentStatus,
                            timeZone,
                            imgSrc
                        };
                        return (
                            <InformationRow key={index}
                                employeeInfo={metaData}/>
                        )
                    })
                } </div>
            </div>
        </div>
    )
}

export default UserDirectory;
