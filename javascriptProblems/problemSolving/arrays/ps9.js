// Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students assigned to different bus routes,
// calculate the total number of buses required if each bus can hold a maximum of 50 students.

studentsPerRoute=[45, 55, 30, 60, 40];
add=0;
for(i=0;i<studentsPerRoute.length;i++){
    add=add+studentsPerRoute[i];
}

busCount=add/50;

ans=Math.ceil(busCount)

console.log(ans)