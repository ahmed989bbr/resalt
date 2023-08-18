// // قم بإنشاء كائن لتخزين معلومات الطلاب والنتائج
// const studentData = {
//   22: {
//     name: "الاسم : احمد ابراهيم السكري",
//     average: 85,
//     subjects: {
//       "ادارة الاعمال": "جيد جدًا",
//       اقتصاد: "ممتاز",
//       رياضة: "ممتاز",
//       "محاسبة تكاليف": "جيد جدًا",
//       // ... وهكذا للمواد الأخرى
//     },
//   },
//   "رقم جلوس] 2": {
//     name: "اسم الطالب 2",
//     average: 92,
//     subjects: {
//       "مادة 1": "ممتاز",
//       "مادة 2": "ممتاز",
//       // ... وهكذا للمواد الأخرى
//     },
//   },
//   // ... وهكذا للطلاب الأخرين
// };

// document.addEventListener("DOMContentLoaded", function () {
//   const seatNumberInput = document.getElementById("seat-number");
//   const searchButton = document.getElementById("search-button");
//   const resultContainer = document.getElementById("result-container");

//   if (searchButton && seatNumberInput && resultContainer) {
//     searchButton.addEventListener("click", () => {
//       const seatNumber = seatNumberInput.value;
//       const studentInfo = studentData[seatNumber];

//       if (studentInfo) {
//         // window.location.href = "results.html";
//         const resultDiv = document.createElement("div");
//         resultDiv.className = "result";
//         resultDiv.style.direction = "rtl";
//         resultDiv.innerHTML = `
//                 <h2>${studentInfo.name}</h2>
//                 <p>المعدل: ${studentInfo.average}</p>
//                 <h3>نتائج المواد:</h3>
//                 <ul style="display: flex; padding: 10px; justify-content: space-evenly; margin: 4px; align-items: center;">
//                     ${Object.entries(studentInfo.subjects)
//                       .map(
//                         ([subject, grade]) =>
//                           `<li style="padding: 10px; margin: 4px; border: 1px solid;">${subject}: ${grade}</li>`
//                       )
//                       .join("")}
//                 </ul>
//             `;
//         resultContainer.innerHTML = "";
//         resultContainer.appendChild(resultDiv);
//       } else {
//         resultContainer.innerHTML = "<p>لا توجد معلومات لهذا رقم جلوس].</p>";
//       }
//     });
//   } else {
//     console.error("One or more elements not found or not loaded properly.");
//   }
// });













// بيانات الطلاب من JSON
const jsonData = {
  "resalt": [
    {
      "التقدير العام": 2.51,
      "مبادئ المحاسبة المالية": "B",
      "تفكير الابتكاري": "B",
      "مهارات الاتصال": "B",
      "رياضة الاعمال": "C-",
      "الإنجليزية": "A",
      "علم نفس": "C+",
      "سلوك تنظيمي": "C-",
      "مبادئ إدارة الاعمال": "D+",
      "مبادئ القانون": "D",
      "مبادئ الاقتصاد": "B",
      "الاسم": "ابراهيم احمد ابراهيم التلواني",
      "رقم الجلوس": 50006
    },
       {
      "التقدير العام": 1.88,
      "مبادئ المحاسبة المالية": "B",
      "تفكير الابتكاري": "C",
      "مهارات الاتصال": "C+",
      "رياضة الاعمال": "C",
      "الإنجليزية": "F",
      "علم نفس": "C",
      "سلوك تنظيمي": "D+",
      "مبادئ إدارة الاعمال": "D-",
      "مبادئ القانون": "D-",
      "مبادئ الاقتصاد": "C+",
      "الاسم": "ابراهيم خالد ابراهيم شعبان",
      "رقم الجلوس": 50010
    },
    {
      "التقدير العام": 4,
      "مبادئ المحاسبة المالية": "A+",
      "تفكير الابتكاري": "A+",
      "مهارات الاتصال": "A+",
      "رياضة الاعمال": "A+",
      "الإنجليزية": "A=",
      "علم نفس": "A+",
      "سلوك تنظيمي": "A+",
      "مبادئ إدارة الاعمال": "A+",
      "مبادئ القانون": "A+"
      "مبادئ الاقتصاد": "C+",
      "الاسم": "حسن الشاذلي",
      "رقم الجلوس": 1
    },
    {
      "التقدير العام": 2,
      "مبادئ المحاسبة المالية": "B",
      "تفكير الابتكاري": "C-",
      "مهارات الاتصال": "C-",
      "رياضة الاعمال": "D+",
      "الإنجليزية": "D+",
      "علم نفس": "C+",
      "سلوك تنظيمي": "D-",
      "مبادئ إدارة الاعمال": "D-",
      "مبادئ القانون": "C-",
      "مبادئ الاقتصاد": "C+",
      "الاسم": "ابراهيم جالل محمد شريف",
      "رقم الجلوس": 50008
    },
    {
      "التقدير العام": 2.09,
      "مبادئ المحاسبة المالية": "B",
      "تفكير الابتكاري": "C-",
      "مهارات الاتصال": "C-",
      "رياضة الاعمال": "C",
      "الإنجليزية": "C+",
      "علم نفس": "C-",
      "سلوك تنظيمي": "C-",
      "مبادئ إدارة الاعمال": "D-",
      "مبادئ القانون": "D-",
      "مبادئ الاقتصاد": "C",
      "الاسم": "ابراهيم جمال االحمدي جمعه",
      "رقم الجلوس": 50009
    },
    {
      "التقدير العام": 1.88,
      "مبادئ المحاسبة المالية": "B",
      "تفكير الابتكاري": "C",
      "مهارات الاتصال": "C+",
      "رياضة الاعمال": "C",
      "الإنجليزية": "F",
      "علم نفس": "C",
      "سلوك تنظيمي": "D+",
      "مبادئ إدارة الاعمال": "D-",
      "مبادئ القانون": "D-",
      "مبادئ الاقتصاد": "C+",
      "الاسم": "ابراهيم خالد ابراهيم شعبان",
      "رقم الجلوس": 50010
    }
    // ... باقي الطلاب
  ]
};

// تحويل بيانات الطلاب من JSON إلى كائن
const studentData = {};

jsonData.resalt.forEach((student) => {
  const seatNumber = student["رقم الجلوس"];
  const studentName = student["الاسم"];
  const studentAverage = student["التقدير العام"];
  
  const subjects = {
    "مبادئ المحاسبة المالية": student["مبادئ المحاسبة المالية"],
    "تفكير الابتكاري": student["تفكير الابتكاري"],
    "مهارات الاتصال": student["مهارات الاتصال"],
    "رياضة الاعمال": student["رياضة الاعمال"],
    "علم نفس": student["علم نفس"],
    "مبادئ الاقتصاد": student["مبادئ الاقتصاد" ],
    "سلوك تنظيمي": student[ "سلوك تنظيمي"],
    // ... باقي المواد
  };

  studentData[seatNumber] = {
    name: studentName,
    average: studentAverage,
    subjects: subjects,
  };
});

// الجزء الذي قمت بتقديمه لإظهار نتائج الطلاب
document.addEventListener("DOMContentLoaded", function () {
  const seatNumberInput = document.getElementById("seat-number");
  const searchButton = document.getElementById("search-button");
  const resultContainer = document.getElementById("result-container");

  if (searchButton && seatNumberInput && resultContainer) {
    searchButton.addEventListener("click", () => {
      const seatNumber = seatNumberInput.value;
      const studentInfo = studentData[seatNumber];


    
    if (studentInfo) {
      let navh = document.getElementsByClassName("list-h")
      navh[0].style.display = "none"
console.log(navh)
      let nav = document.querySelectorAll("nav")
    nav[0].style.display = "none"
    nav[1].style.display = "none"


      let set = document.querySelector("input")
      set.style.display = "none"
      
      let but = document.querySelector("button")
      but.style.display = "none"

      let label = document.querySelector("label")
      label.style.display = "none"


    console.log(set)

          
        const resultDiv = document.createElement("div");
        resultDiv.className = "result";
        resultDiv.style.direction = "rtl";
        resultDiv.innerHTML = `
                <p>${studentInfo.name}</p>
                <p>المعدل: ${studentInfo.average}</p>
                
                <ul class="ude" style=" padding: 10px; justify-content: space-evenly; margin: 4px; align-items: center;">
                    ${Object.entries(studentInfo.subjects)
                      .map(
                        ([subject, grade]) =>
                          `<li  class = "degr" style="    padding: 11px;
                          box-sizing: border-box;
                          width: 80%;
                          margin: 2px;
                          border: 1px solid;">   ${subject}: ${grade}</li><br>`
                      )
                      .join("")}
                </ul>
            `;
        resultContainer.innerHTML = "";
        resultContainer.appendChild(resultDiv);
      } else {
        resultContainer.innerHTML = "<p>لا توجد معلومات  لرقم الجلوس].</p>";
      }
    });
  } else {
    console.error("One or more elements not found or not loaded properly.");
  }
});





















// searchButton.addEventListener("click", () => {
//     const seatNumber = seatNumberInput.value;
//     const studentInfo = studentData[seatNumber];

//     if (studentInfo) {
//         window.location.href = "results.html";
//         const resultDiv = document.createElement("div");
//         resultDiv.className = "result";
//         resultDiv.style.direction = "rtl";
//         resultDiv.innerHTML = `
//             <h2>${studentInfo.name}</h2>
//             <p>المعدل: ${studentInfo.average}</p>
//             <h3>نتائج المواد:</h3>
//             <ul style="display: flex; padding: 10px; justify-content: space-evenly; margin: 4px; align-items: center;">
//                 ${Object.entries(studentInfo.subjects)
//                     .map(([subject, grade]) => `<li style="padding: 10px; margin: 4px; border: 1px solid;">${subject}: ${grade}</li>`)
//                     .join("")}
//             </ul>
//         `;
//         resultContainer.innerHTML = "";
//         resultContainer.appendChild(resultDiv);
//     } else {
//         resultContainer.innerHTML = "<p>لا توجد معلومات لهذا رقم جلوس].</p>";
//     }
// });
