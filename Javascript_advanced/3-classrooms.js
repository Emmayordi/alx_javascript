function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        // Returns a function that returns the seat number
        return function () {
            return seat;
        };
    }

    // Create and populate students array
    let students = [];
    for (let i = 0; i < numberOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }

    // Returns the students array
    return students;
}

// Create a closure classRoom with 10 students
let classRoom = createClassRoom(10);

// Test the functions
console.log(classRoom[0]()); // Should return 1
console.log(classRoom[3]()); // Should return 4
console.log(classRoom[9]()); // Should return 10
