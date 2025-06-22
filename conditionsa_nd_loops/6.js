let students = [

    { name: prompt("Enter name of student 1:"), marks: parseInt(prompt("Enter marks of student 1:")) },

    { name: prompt("Enter name of student 2:"), marks: parseInt(prompt("Enter marks of student 2:")) },

    { name: prompt("Enter name of student 3:"), marks: parseInt(prompt("Enter marks of student 3:")) },

    { name: prompt("Enter name of student 4:"), marks: parseInt(prompt("Enter marks of student 4:")) },

    { name: prompt("Enter name of student 5:"), marks: parseInt(prompt("Enter marks of student 5:")) }

];



function helper(students) {
    let total = 0;



    for (let i = 0; i < students.length; i++) {
        if(isNaN(students[i].marks)) {
            alert(`Invalid Marks for student - ${students[i].name}`);
            return;
        }
        total += students[i].marks;
    
    }
    
    
    
    let average = total / students.length;
    
    let grade;
    
    
    
    if (average < 60) {
    
        grade = 'F';
    
    } else if (average < 70) {
    
        grade = 'D';
    
    } else if (average < 80) {
    
        grade = 'C';
    
    } else if (average < 90) {
    
        grade = 'B';
    
    } else {
    
        grade = 'A';
    
    }
    
    
    
    alert("Average Marks: " + average + "\nGrade: " + grade);
}