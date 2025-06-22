var student = {  
name : "David Rayy",  
sclass : "VI",  
rollno : 12 }; 

var filtered = Object.fromEntries(
    Object.entries(student).filter(([key]) => key !== 'rollno')
)

console.log(filtered);