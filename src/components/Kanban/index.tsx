"use client"

import React, {useCallback, useState} from 'react';
import ScrollView from 'devextreme-react/scroll-view';
import Sortable from 'devextreme-react/sortable';
import {
    tasks as taskList, employees, Employee, Task,
} from './data';
import './style.css';

function getLists(statusArray: string[], taskArray: Task[]) {
    const tasksMap = taskArray.reduce((result: { [x: string]: any[]; }, task: { Task_Status: string | number; }) => {
        if (result[task.Task_Status]) {
            result[task.Task_Status].push(task);
        } else {
            result[task.Task_Status] = [task];
        }

        return result;
    }, {});
    return statusArray.map((status: string | number) => tasksMap[status]);
}

function getEmployeesMap(employeesArray: Employee[]): Record<string, string> {
    return employeesArray.reduce((result: any, employee) => {
        result[employee.ID] = employee.Name;
        return result;
    }, {});
}

function removeItem(array: any[], removeIdx: number) {
    return array.filter((_, idx) => idx !== removeIdx);
}

function insertItem(array: any[], item: any, insertIdx: number) {
    const newArray = [...array];
    newArray.splice(insertIdx, 0, item);
    return newArray;
}

function reorderItem(array: any[], fromIdx: number, toIdx: number) {
    const item = array[fromIdx];
    const result = removeItem(array, fromIdx);
    return insertItem(result, item, toIdx);
}

const taskStatuses = ['Lead', 'Contato Feito', 'Aguardando definição', 'Proposta enviada', 'Concluído'];
const employeesRecord = getEmployeesMap(employees);

const Card: React.FC<{ task: Task, employeesMap: Record<string, string> }> = ({
                                                                                  task, employeesMap,
                                                                              }) => <div className="card dx-card">
    <div className={`card-priority priority-${task.Task_Priority}`}></div>
    <div className="card-subject">{task.Task_Subject}</div>
    <div className="card-assignee">{employeesMap[task.Task_Assigned_Employee_ID]}</div>
</div>;

const List: React.FC<{ title: any, index: any, tasks: any, employeesMap: any, onTaskDrop: any }> = ({
                                                                                                        title,
                                                                                                        index,
                                                                                                        tasks,
                                                                                                        employeesMap,
                                                                                                        onTaskDrop,
                                                                                                    }) => <div
    className="list">
    <div className="list-title">{title}</div>
    <ScrollView
        className="scrollable-list"
        direction="vertical"
        showScrollbar="always">
        <Sortable
            className="sortable-cards"
            group="cardsGroup"
            data={index}
            onReorder={onTaskDrop}
            onAdd={onTaskDrop}>
            {tasks.map((task: any) => <Card
                key={task.Task_ID}
                task={task}
                employeesMap={employeesMap}>
            </Card>)}
        </Sortable>
    </ScrollView>
</div>;

function Kanban() {
    const [statuses, setStatuses] = useState(taskStatuses);
    const [lists, setLists] = useState(getLists(taskStatuses, taskList));

    const onListReorder = useCallback(({fromIndex, toIndex}: { fromIndex: any, toIndex: any }) => {
        setLists((state) => reorderItem(state, fromIndex, toIndex));
        setStatuses((state) => reorderItem(state, fromIndex, toIndex));
    }, []);

    const onTaskDrop = useCallback(
        ({
             fromData, toData, fromIndex, toIndex,
         }: { fromData: any, toData: any, fromIndex: any, toIndex: any },
        ) => {
            const updatedLists = [...lists];

            const item = updatedLists[fromData][fromIndex];
            updatedLists[fromData] = removeItem(updatedLists[fromData], fromIndex);
            updatedLists[toData] = insertItem(updatedLists[toData], item, toIndex);

            setLists(updatedLists);
        },
        [lists],
    );

    return (
        <div id="kanban" style={{paddingRight: '2rem'}}>
            <ScrollView
                className="scrollable-board"
                direction="horizontal"
                showScrollbar="always"
            >
                <Sortable
                    className="sortable-lists"
                    itemOrientation="horizontal"
                    handle=".list-title"
                    onReorder={onListReorder}>
                    {lists.map((tasks, listIndex: number) => {
                        const status = statuses[listIndex];
                        return <List
                            key={status}
                            title={status}
                            index={listIndex}
                            tasks={tasks}
                            employeesMap={employeesRecord}
                            onTaskDrop={onTaskDrop}>
                        </List>;
                    })}
                </Sortable>
            </ScrollView>
        </div>
    );
}

export default Kanban;
