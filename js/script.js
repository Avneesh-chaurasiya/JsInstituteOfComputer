// searchButton 
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});



// testmonial 
(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();


// Add more button function  gallary section 
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View less";
    moreText.style.display = "inline";
  }
}


// /* contact us form course js
//  ========================*/


// // Retrieve courses from the backend API
// async function getCourses() {
//   try {
//     const response = await fetch('/api/courses');
//     const courses = await response.json();
//     return courses;
//   } catch (error) {
//     console.error('Error retrieving courses:', error);
//     return [];
//   }
// }

// // Display courses in the frontend
// function displayCourses(courses) {
//   const coursesContainer = document.getElementById('courses');

//   // Clear existing course items
//   coursesContainer.innerHTML = '';

//   // Create and append course items
//   courses.forEach(course => {
//     const courseItem = document.createElement('li');
//     courseItem.classList.add('list-group-item');
//     courseItem.textContent = course.name;
//     coursesContainer.appendChild(courseItem);
//   });
// }

// // Filter courses based on language and subject
// function filterCourses(courses, language, subject) {
//   return courses.filter(course => {
//     if (language && course.language !== language) {
//       return false;
//     }
//     if (subject && course.subject !== subject) {
//       return false;
//     }
//     return true;
//   });
// }

// // Fetch and display courses when the page loads
// document.addEventListener('DOMContentLoaded', async () => {
//   const courses = await getCourses();
//   displayCourses(courses);

//   const languageFilter = document.getElementById('languageFilter');
//   const subjectFilter = document.getElementById('subjectFilter');

//   // Apply filters when they change
//   languageFilter.addEventListener('change', () => {
//     const selectedLanguage = languageFilter.value;
//     const selectedSubject = subjectFilter.value;
//     const filteredCourses = filterCourses(courses, selectedLanguage, selectedSubject);
//     displayCourses(filteredCourses);
//   });

//   subjectFilter.addEventListener('change', () => {
//     const selectedLanguage = languageFilter.value;
//     const selectedSubject = subjectFilter.value;
//     const filteredCourses = filterCourses(courses, selectedLanguage, selectedSubject
//       displayCourses(filteredCourses);
//   });
// });
