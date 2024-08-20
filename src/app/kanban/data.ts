export interface Employee {
    ID: number,
    Name: string,
}

export interface Task {
    Task_ID: number,
    Task_Assigned_Employee_ID: number,
    Task_Owner_ID: number,
    Task_Subject: string,
    Task_Start_Date: string | Date,
    Task_Due_Date: string | Date,
    Task_Status: string,
    Task_Priority: number,
    Task_Completion: number,
    Task_Parent_ID: number,
}
export const tasks: Task[] = [{
    Task_ID: 1,
    Task_Assigned_Employee_ID: 1,
    Task_Owner_ID: 1,
    Task_Subject: 'Plans 2015',
    Task_Start_Date: '2015-01-01T00:00:00',
    Task_Due_Date: '2015-04-01T00:00:00',
    Task_Status: 'Lead',
    Task_Priority: 4,
    Task_Completion: 100,
    Task_Parent_ID: 0,
}, {
    Task_ID: 2,
    Task_Assigned_Employee_ID: 2,
    Task_Owner_ID: 1,
    Task_Subject: 'Health Insurance',
    Task_Start_Date: '2015-02-12T00:00:00',
    Task_Due_Date: '2015-05-30T00:00:00',
    Task_Status: 'Contato Feito',
    Task_Priority: 4,
    Task_Completion: 75,
    Task_Parent_ID: 0,
}, {
    Task_ID: 3,
    Task_Assigned_Employee_ID: 4,
    Task_Owner_ID: 4,
    Task_Subject: 'New Brochures',
    Task_Start_Date: '2015-02-17T00:00:00',
    Task_Due_Date: '2015-03-01T00:00:00',
    Task_Status: 'Aguardando definição',
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 0,
}, {
    Task_ID: 4,
    Task_Assigned_Employee_ID: 31,
    Task_Owner_ID: 33,
    Task_Subject: 'Training',
    Task_Start_Date: '2015-03-02T00:00:00',
    Task_Due_Date: '2015-06-29T00:00:00',
    Task_Status: 'Proposta enviada',
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 0,
}, {
    Task_ID: 5,
    Task_Assigned_Employee_ID: 31,
    Task_Owner_ID: 33,
    Task_Subject: 'Training',
    Task_Start_Date: '2015-03-02T00:00:00',
    Task_Due_Date: '2015-06-29T00:00:00',
    Task_Status: 'Concluído',
    Task_Priority: 3,
    Task_Completion: 100,
    Task_Parent_ID: 0,
}];

export const employees: Employee[] = [{
    ID: 1,
    Name: 'John Heart',
}, {
    ID: 2,
    Name: 'Samantha Bright',
}, {
    ID: 3,
    Name: 'Arthur Miller',
}, {
    ID: 4,
    Name: 'Robert Reagan',
}, {
    ID: 5,
    Name: 'Greta Sims',
}, {
    ID: 6,
    Name: 'Brett Wade',
}, {
    ID: 7,
    Name: 'Sandra Johnson',
}, {
    ID: 8,
    Name: 'Ed Holmes',
}, {
    ID: 9,
    Name: 'Barb Banks',
}, {
    ID: 10,
    Name: 'Kevin Carter',
}, {
    ID: 11,
    Name: 'Cindy Stanwick',
}, {
    ID: 12,
    Name: 'Sammy Hill',
}, {
    ID: 13,
    Name: 'Davey Jones',
}, {
    ID: 14,
    Name: 'Victor Norris',
}, {
    ID: 15,
    Name: 'Mary Stern',
}, {
    ID: 16,
    Name: 'Robin Cosworth',
}, {
    ID: 17,
    Name: 'Kelly Rodriguez',
}, {
    ID: 18,
    Name: 'James Anderson',
}, {
    ID: 19,
    Name: 'Antony Remmen',
}, {
    ID: 20,
    Name: 'Olivia Peyton',
}, {
    ID: 21,
    Name: 'Taylor Riley',
}, {
    ID: 22,
    Name: 'Amelia Harper',
}, {
    ID: 23,
    Name: 'Wally Hobbs',
}, {
    ID: 24,
    Name: 'Brad Jameson',
}, {
    ID: 25,
    Name: 'Karen Goodson',
}, {
    ID: 26,
    Name: 'Marcus Orbison',
}, {
    ID: 27,
    Name: 'Sandy Bright',
}, {
    ID: 28,
    Name: 'Morgan Kennedy',
}, {
    ID: 29,
    Name: 'Violet Bailey',
}, {
    ID: 30,
    Name: 'Ken Samuelson',
}, {
    ID: 31,
    Name: 'Nat Maguiree',
}, {
    ID: 32,
    Name: 'Bart Arnaz',
}, {
    ID: 33,
    Name: 'Leah Simpson',
}, {
    ID: 34,
    Name: 'Arnie Schwartz',
}, {
    ID: 35,
    Name: 'Billy Zimmer',
}, {
    ID: 36,
    Name: 'Samantha Piper',
}, {
    ID: 37,
    Name: 'Maggie Boxter',
}, {
    ID: 38,
    Name: 'Terry Bradley',
}, {
    ID: 39,
    Name: 'Gabe Jones',
}, {
    ID: 40,
    Name: 'Lucy Ball',
}, {
    ID: 41,
    Name: 'Jim Packard',
}, {
    ID: 42,
    Name: 'Hannah Brookly',
}, {
    ID: 43,
    Name: 'Harv Mudd',
}, {
    ID: 44,
    Name: 'Clark Morgan',
}, {
    ID: 45,
    Name: 'Todd Hoffman',
}, {
    ID: 46,
    Name: 'Jackie Garmin',
}, {
    ID: 47,
    Name: 'Lincoln Bartlett',
}, {
    ID: 48,
    Name: 'Brad Farkus',
}, {
    ID: 49,
    Name: 'Jenny Hobbs',
}, {
    ID: 50,
    Name: 'Dallas Lou',
}, {
    ID: 51,
    Name: 'Stu Pizaro',
}];
