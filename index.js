let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function sort([min,max]) {
  return courses.filter(course=>{
    const [courseMin, courseMax] = course.prices;
    return (courseMin >= min) && ((courseMax || Infinity) <= (max || Infinity))
  })
}
console.log(sort(requiredRange1))
console.log(sort(requiredRange2))
console.log(sort(requiredRange3))

// [
//   { name: 'Courses in England', prices: [ 0, 100 ] },
//   { name: 'Courses in Italy', prices: [ 100, 200 ] }
// ]
// [ { name: 'Courses in Italy', prices: [ 100, 200 ] } ]
// [
//   { name: 'Courses in Germany', prices: [ 500, null ] },
// 	 { name: 'Courses in USA', prices: [ 200, null ] }
// ]