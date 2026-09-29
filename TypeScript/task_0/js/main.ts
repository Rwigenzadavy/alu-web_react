interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


const student1: student= {
    firstName: 'will',
    lastName: 'Smith',
    age: 30,
    location: 'USA',
};

const student2: student= {
    firstName: 'Jaden',
    secondName: 'smith',
    age: 25,
    location: 'Kigali',
};

const studentList[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableElement = document.createElement('thead');
const headerRow: HTMLTableRowElement = document.createElement('tr');

const thFirstname: HTMLTableCellElement = document.createElement('th');
thFirstName.textContent = 'First Name';

const thLocation: HTMLTableCellElement = document.createElement('th');
thLocation.textContent = 'Location';


