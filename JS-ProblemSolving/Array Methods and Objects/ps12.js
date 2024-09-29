// You have an array of 5 objects, each representing a student with properties name and grade.
// Write a program to find and print the name of the student whose grade is "A".

student=[
    {
        nam:"Harikrisnan",
        grade:"A"
    },
    {
        nam:"Muruga",
        grade:"B"
    },
    {
        nam:"Manoj",
        grade:"C"
    },
    {
        nam:"Kesan",
        grade:"D"
    },
    {
        nam:"Dhanu",
        grade:"E"
    }
]
for(i=0;i<student.length;i++){
    if(student[i].grade=="E"){
       console.log(student[i].nam);
    }
}

