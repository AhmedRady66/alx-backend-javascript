interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ali",
  lastName: "Belal",
  age: 22,
  location: "Pittsburgh",
};

const student2: Student = {
  firstName: "Ahmed",
  lastName: "Tarek",
  age: 33,
  location: "Cairo",
};

const studentsList: Student[] = [student1, student2];

const body = document.querySelector("body");
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const headerRow = document.createElement("tr");

const headers = ["First Name", "Location"];
headers.forEach(headerText => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
});
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

const tableBody = document.createElement("tbody");
studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tableBody.appendChild(row);
});

table.appendChild(tableBody);
body?.appendChild(table);
