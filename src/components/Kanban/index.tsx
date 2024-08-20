"use client"

import React, {useCallback, useState} from 'react';
import ScrollView from 'devextreme-react/scroll-view';
import Sortable from 'devextreme-react/sortable';
import {Employee, employees, Task, useTasks,} from './data';
import './style.css';
import {motion} from 'framer-motion';
import {Check, Plus} from "@phosphor-icons/react";


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

const employeesRecord = getEmployeesMap(employees);

const Card: React.FC<{ task: Task, employeesMap: Record<string, string> }> = ({
                                                                                  task, employeesMap,
                                                                              }) => <div className="card dx-card">
    <div className={`card-priority priority-${task.Task_Priority}`}></div>
    <div className="card-subject">{task.Task_Subject}</div>
    <div className="card-assignee">{employeesMap[task.Task_Assigned_Employee_ID]}</div>
</div>;

const List: React.FC<{
    title: any,
    index: any,
    tasks: any,
    employeesMap: any,
    onTaskDrop: any,
    lists: any,
    setLists: any
}> = ({
          title,
          index,
          tasks,
          lists,
          setLists,
          employeesMap,
          onTaskDrop,
      }) => {

    function add(qualqeuto: Task[]) {
        return () => {
            const elementValue: any = document.getElementById('input-card')?.value;
            const aux = lists;

            lists.forEach((list: any, index: number) => {

                const target = list.findIndex((task: any) => task.Task_Status === qualqeuto[0].Task_Status)
                if (target === -1) {
                    return;
                }
                aux[target] = [...aux[target], qualqeuto[0]]
            })
            setLists(aux);
        }
    }

    return <div
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
                <div style={{
                    width: '100%',
                    backgroundColor: '#333',
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: "space-between"
                }}
                     onClick={add(tasks)}>
                    <input placeholder='Adicionar card' id='input-card'/>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                         viewBox="0 -960 960 960"
                         width="24px"
                         fill="#e8eaed">
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                    </svg>
                </div>
            </Sortable>
        </ScrollView>
    </div>;
}

function Kanban() {
    const taskStatuses = ['Lead', 'Contato Feito', 'Aguardando definição', 'Proposta enviada', 'Concluído'];
    const {lists, setLists} = useTasks();
    const [statuses, setStatuses] = useState(taskStatuses);
    const [newColumn, setNewColumn] = useState(false);
    const [inputValue, setInputValue] = useState('');

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
            console.log(updatedLists[toData]);
            console.log(item);
            console.log(toIndex);
            updatedLists[toData] = insertItem(updatedLists[toData], item, toIndex);

            setLists(updatedLists);
        },
        [lists],
    );

    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10
            }}>
                {newColumn && <motion.input style={{
                    backgroundColor: 'transparent',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    color: 'white',
                    border: '1px solid white',
                    marginLeft: 10,
                }} placeholder='Nome da coluna' onChange={(v) => setInputValue(v.target.value)}/>}
                <motion.button onClick={() => {
                    if (!newColumn) {
                        setNewColumn(true);
                        return;
                    }

                    if (newColumn && inputValue) {
                        setStatuses([...statuses, inputValue]);
                        setLists([...lists, []]);
                        setNewColumn(false);
                        setInputValue('');
                    }

                }} whileHover={{
                    scale: 1.02,
                }} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    backgroundColor: 'transparent',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    color: 'white',
                    border: '1px solid white',
                }}>
                    {newColumn ? 'Adicionar' : 'Nova coluna'}
                    {newColumn ? <Check size={20}/> : <Plus size={20}/>}
                </motion.button>
            </div>
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
                                lists={lists}
                                setLists={setLists}
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
        </>

    );
}

export default Kanban;
