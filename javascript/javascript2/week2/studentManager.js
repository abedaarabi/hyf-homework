
//Student manager
const class07Students = [];
let studentName = ' Abd ';
function addStudentToClass(studentName) {
    if(getNumberOfStudents() === 6 & studentName != "Queen "){
        return ' class more than 6 ' + 'ERROR'
    }
    if(studentName === 'Queen '){
        class07Students.push(studentName);
        return ' Student already exist '
    }
    else class07Students.push(studentName);
    return studentName;
}
console.log(addStudentToClass( 'Student' + studentName) + ' have been added ');



function getNumberOfStudents() {
    return class07Students.length;
}
console.log(getNumberOfStudents());