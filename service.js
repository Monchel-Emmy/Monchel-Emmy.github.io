function getGrade(marks) {
  if (marks >= 80 && marks >=0) {
    return "A";
  } else if (marks >= 70 && marks < 80) {
    return "B";
  } else if (marks >= 60 && marks < 70) {
    return "C";
  } else if (marks >= 50 && marks < 60) {
    return "D";
  } else {
    return "F";
  }
}

// semester 1 marksFieds
const ictM = document.querySelector(".ictM");
const math1M = document.querySelector(".math1M");
const physics1M = document.querySelector(".physics1M");
const networkM = document.querySelector(".networkM");
const workshopM = document.querySelector(".workshopM");
const AnalogM = document.querySelector(".AnalogM");

// semester 1 gradesFieds
const ictG = document.querySelector(".ictG");
const math1G = document.querySelector(".math1G");
const physics1G = document.querySelector(".physics1G");
const networkG = document.querySelector(".networkG");
const workshopG = document.querySelector(".workshopG");
const AnalogG = document.querySelector(".AnalogG");

// semester 2 marksFieds
const englishM = document.querySelector(".englishM");
const math2M = document.querySelector(".math2M");
const physics2M = document.querySelector(".physics2M");
const drawingM = document.querySelector(".drawingM");
const cM = document.querySelector(".cM");
const discretM = document.querySelector(".discretM");
const electronicM = document.querySelector(".electronicM");
const databaseM = document.querySelector(".databaseM");
const citizenshipM = document.querySelector(".citizenshipM");

// semester 2 gradesFieds
const englishG = document.querySelector(".englishG");
const math2G = document.querySelector(".math2G");
const physics2G = document.querySelector(".physics2G");
const drawingG = document.querySelector(".drawingG");
const cG = document.querySelector(".cG");
const discretG = document.querySelector(".discretG");
const electronicG = document.querySelector(".electronicG");
const databaseG = document.querySelector(".databaseG");
const citizenshipG = document.querySelector(".citizenshipG");

// names and reg
const first = document.querySelector(".firstname");
const second = document.querySelector(".lastname");
const reg = document.querySelector(".reg");
const lowerName = document.querySelector(".lowerName");
const lowerReg = document.querySelector(".lowerReg");


const Fname = prompt('enter first name')
const Sname = prompt('enter second name')
const Reg = prompt('enter registration number')

// sem 1 marks
const ictMarks = parseFloat(prompt("Enter Ict marks"));
const math1Marks = parseFloat(prompt("Enter mathematics1 marks"));
const physics1Marks = parseFloat(prompt("Enter physics1 marks"));
const networkMarks = parseFloat(prompt("Enter network marks"));
const workshopMarks = parseFloat(prompt("Enter workshop marks"));
const AnalogMarks = parseFloat(prompt("Enter Analog marks"));

// sem 2 marks
const englishMarks = parseFloat(prompt("Enter english marks"));
const math2Marks = parseFloat(prompt("Enter math2 marks"));
const physics2Marks = parseFloat(prompt("Enter physics2 marks"));
const drawingMarks = parseFloat(prompt("Enter drawing marks"));
const cMarks = parseFloat(prompt("Enter c programming marks"));
const discretMarks = parseFloat(prompt("Enter discret Mathematics marks"));
const electronicMarks = parseFloat(prompt("Enter electronic marks"));
const databaseMarks = parseFloat(prompt("Enter database marks"));
const citizenshipMarks = parseFloat(prompt("Enter citizenship marks"));


// assigning names
first.innerHTML = Fname
second.innerHTML = Sname
reg.innerHTML = Reg
lowerName.innerHTML = Fname
lowerReg.innerHTML = Reg

// Assigning the values to the fields for sem 1
ictM.innerHTML = ictMarks;
math1M.innerHTML = math1Marks;
physics1M.innerHTML = physics1Marks;
networkM.innerHTML = networkMarks;
workshopM.innerHTML = workshopMarks;
AnalogM.innerHTML = AnalogMarks;

// Assigning the values to the fields for sem 2
englishM.innerHTML = englishMarks;
math2M.innerHTML = math2Marks;
physics2M.innerHTML = physics2Marks;
drawingM.innerHTML = drawingMarks;
cM.innerHTML = cMarks;
discretM.innerHTML = discretMarks;
electronicM.innerHTML = electronicMarks;
databaseM.innerHTML = databaseMarks;
citizenshipM.innerHTML = citizenshipMarks;

//  grades for sem 1 based on marks
ictG.textContent = getGrade(ictMarks);
math1G.textContent = getGrade(math1Marks);
physics1G.textContent = getGrade(physics1Marks);
networkG.textContent = getGrade(networkMarks);
workshopG.textContent = getGrade(workshopMarks);
AnalogG.textContent = getGrade(AnalogMarks);

//  grades for sem 2 based on marks
englishG.textContent = getGrade(englishMarks);
math2G.textContent = getGrade(math2Marks);
physics2G.textContent = getGrade(physics2Marks);
drawingG.textContent = getGrade(drawingMarks);
cG.textContent = getGrade(cMarks);
discretG.textContent = getGrade(discretMarks);
electronicG.textContent = getGrade(electronicMarks);
databaseG.textContent = getGrade(databaseMarks);
citizenshipG.textContent = getGrade(citizenshipMarks);

//calculate average
function calculateAverage(marksArray, total) {
  const totalMarks = marksArray.reduce((sum, mark) => sum + mark, 0);
  const average = (totalMarks / total) * 100;
  return average;
}

// marks for sem 1
const semesterOneMarks = [
  ictMarks,
  math1Marks,
  physics1Marks,
  networkMarks,
  workshopMarks,
  AnalogMarks,
];

// marks for sem 2
const semesterTwoMarks = [
  englishMarks,
  math2Marks,
  physics2Marks,
  drawingMarks,
  cMarks,
  discretMarks,
  electronicMarks,
  databaseMarks,
  citizenshipMarks,
];

// averages for both sems
const semesterOneAverage = calculateAverage(semesterOneMarks, 600);
const semesterTwoAverage = calculateAverage(semesterTwoMarks, 900);
const all = (semesterOneAverage + semesterTwoAverage) / 2;

//annual average
const annualAverage = document.querySelector(".annualA");
annualAverage.innerHTML = all.toFixed(2);

// total rekakes
const grades = document.getElementsByClassName("grade");
const retakesField = document.querySelector(".retakes");
const gradesArray = [...grades];
const retakes = gradesArray.filter((item) => item.textContent == "F");
retakesField.innerHTML = retakes.length;

// progress
const remarksFiels = document.querySelector(".remarks");

if (retakes.length >= 3) {
  remarksFiels.textContent = "REPEAT";
} else if (retakes.length <= 2 && retakes.length > 0) {
  remarksFiels.textContent = "PROGRESS WITH RETAKE";
} else {
  remarksFiels.textContent = "PROGRESS";
}
