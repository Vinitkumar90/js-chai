const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor

const {courseInstructor} = course
const {courseInstructor: instructor} = course  //destructuring of object

console.log(courseInstructor);
console.log(instructor);