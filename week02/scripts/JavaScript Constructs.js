const Days = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// 1. for loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// 2. while loop
let i = 0;

while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// 3. forEach loop
studentReport.forEach(score => {
    if (score < LIMIT) {
        console.log(score);
    }
});

// 4. for...in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// 5. Display the next 6 days
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let today = new Date();

for (let i = 0; i < Days; i++) {
    console.log(dayNames[(today.getDay() + i) % 7]);
}