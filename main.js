/**
 * Array methods
 *  forEach()
 *  every()
 *  some()
 *  find()
 *  fillter()
 *  map()
 *  reduce()
 */
var courses = [
    {
       id: 567,
       name: 'Nguyen Nghia',
       language: 0,
    },
    {
        id: 568,
        name: 'Hoang Van Tung',
        language: 2,
     },
     {
        id: 569,
        name: 'Nguyen Dat',
        language: 0,
     },
     {
        id: 570,
        name: 'Tran Phuong',
        language: 0,
     },
     {
        id: 571,
        name: 'Minh Tram',
        language: 0,
     },
     {
        id: 567,
        name: 'Nguyen Nghia',
        language: 0,
     },
];

//ForEach
// courses.forEach(function(course, index) {
//     console.log(index,course);
// });

//Every
// var isPro = courses.every(function(course, index) {
//     console.log(index,course);
//     return course.language === 0;

// });
// console.log(isPro);

//Some() // co 1 truong hop dung la true
// var isIT = courses.some(function(course, index) {
//     console.log(index,course);
//     return course.language === 0;

// });
// console.log(isIT);

//Find() // tim 1 phan tu
// var course = courses.find(function(course, index) {
//     return course.name === 'NguyenNghia';

// });
// console.log(course);

//Fillter() tim phan tu trung nhau
// var Listcourse = courses.filter(function(course, index) {
//     return course.name === 'Nguyen Nghia';

// });
// console.log(Listcourse);

//map()
// function courseHandler(course, index) {
    // console.log(course);
//     return {
//         id: course.id,
//         name: `Ho Ten: ${course.name}`,
//         language: course.language,
//         language2: `English: ${course.language}`,
//         index: index,
//     };

// }
// var newCourse = courses.map(courseHandler);

// console.log(newCourse);

//Reduce()
// De hieu 

//Bien luu tru
var totalLang = 0;
// Lap cac phan tu
// for (var course of courses) {
//     //Tinh tong so ngon ngu
//     // thuc hien viec luu tru
//     totalLang += course.language;  //( a = a - 2 (a=1) => a = -1 )
// }
// console.log(totalLang);

////////////////////////////////////////////////////////////////
var Andree = 0;
function Righthand(accumulator, currentValue, currentIndex, array){
    Andree ++;
    tong = accumulator + currentValue.language;
    // console.log(Andree);
    console.table({
        'Luot chay: ' : Andree,
        'Bien tich tru: ' : accumulator,
        'Ngon ngu: ' : currentValue.language,
        'Tich tru duoc': tong,
    });

    // console.log(currentValue);
    // console.log(currentIndex);
    // console.log(array);
    return tong;

}
var totalLang2 = courses.reduce(Righthand,0);
console.log(totalLang2);
// Rut gon
var TongRH = courses.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.language;
},0);
console.log(TongRH);
// Nhanh
var Nhanh = courses.reduce((a,b)=>
a + b.language,0
);
console.log(Nhanh);

////////////////
 var numbers = [100, 200, 300, 400];
 var tongso = numbers.reduce(function(tuto, number){
        return tuto + number;

 });
 console.log(tongso);
 ////////////////
 // Flat- "Lam phang" mang tu Depth Array - "Mang sau"
 var depthArray = [1,2,[3,4],5,6,[7,8,9]];

 var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
           
 },[]);
 console.log(flatArray);
 ////////////////
 // Lay ra cac khoa hoc dua vao 1 mang moi
 var topics = [
    {
        topic: "Frontend",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Backend",
        courses: [
            {
                id:1,
                title: "PHP"
            },
            {
                id:2,
                title: "NodeJs"
            }
        ]
    },

 ];
  var newCourses = topics.reduce(function(courses, topic){
    return courses.concat(topic.courses);

  }, []);
  console.log(newCourses);

  var html = newCourses.map(function(course){
    return `
    <div>
      <h2>${course.title}</h2>
      <p>${course.id}</p>
    </div>
    `;
  });
  console.log(html.join(''));


  //includes method
//   console.log(Array.prototype.includes);
var title = 'Responsive web design';
console.log(title.includes('R',1));

var khoahoc = ['Java','PHP','Javascript','Ruby'];

// 4 -1 = 3
console.log(khoahoc.includes('Javascript',-1))

/**
 * Math object
 *  - Math.PI
 *  - Math.round()
 *  - Math.abs()
 *  - Math.ceil()
 *  - Math.floor()
 *  - Math.random()
 *  - Math.min()
 *  - Math.max()
 * 
 */
 
console.log(Math.PI);
console.log(Math.round(1.6));
console.log(Math.abs(-4));
console.log(Math.ceil(4.1));// lam tron tren
console.log(Math.floor(4.9));// lam tron duoi
console.log(Math.random());// random 0 - 1
console.log(Math.floor(Math.random() * 10));// random 0 - 10

var random = Math.floor(Math.random() * 100);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
]
if(random<50){
    console.log('Nap card thanh cong');
}

// console.log(bonus[random]); //cho ramdom*5
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));

/**
 * Callback ?
 * La ham  (function) duoc truyen qua doi so
 * khi goi ham khac
 * 
 * 1. La ham
 * 2. Duoc truyen qua doi so
 * 
 */
 
function myFunction(param) {
    // console.log(param);
    if(typeof param === 'function') {
        param('Hoc Nihongo');
    }
    

}
function myCallback(value) {
    console.log('Value: ',value);
  
}
myCallback('Hello')

myFunction(myCallback); // truyen doi so

