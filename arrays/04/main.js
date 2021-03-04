;const auditories = [
  { name: "Big", seats: 20, faculty: "Management", },
  { name: "Small", seats: 10, faculty: "Philosophy", },
  { name: "Medium", seats: 15, faculty: "Biology", },
  { name: "Large", seats: 17, faculty: "Management", },
  { name: "Small-Medium", seats: 13, faculty: "Philosophy", },
];

// First task
const showAuditories = function(list) {
  list.forEach(element => { console.log(element.name + " auditory, with " + element.seats + " seats, for faculty - " + element.faculty);
  });
};

showAuditories(auditories);

// Second task
const findAuditoryForFaculty = function(faculty) {
  let result = " ";
auditories.find(element => { 
if (element.faculty === faculty) {
   result = result + element.name +  ". ";
}
});
console.log("For faculty " + faculty + " we have next auditory:" + result);
};


findAuditoryForFaculty("Philosophy");

// Third task
const myGroup = {
  name: "Bachelor",
  students: 12,
  faculty: "Management",
};

const findAuditoryForGroup = function(auditory, group) {
auditory.forEach(element => {
  if (element.faculty === group.faculty && element.seats >= group.students) {
  console.log(element);
  }
});
};

findAuditoryForGroup(auditories, myGroup);

// Fourth task 
const sortSeatsAuditories = function(a, b) {
  return a.seats - b.seats ? 1 : -1;
 }
 
 console.log(auditories.sort(sortSeatsAuditories));

 //Fifth task
 auditories.sort(function (a,b) {
  return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
 });
 
 console.log(auditories);
