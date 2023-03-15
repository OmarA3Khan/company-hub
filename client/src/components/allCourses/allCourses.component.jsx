// import React from "react";
// import "./allCourses.style.scss";
// import Img1 from "../../assets/home/course1.jpeg";

// const courses = [
//   {
//     id: 1,
//     name: "Introduction to React",
//     instructor: "John Smith",
//     duration: "2 hours",
//     description:
//       "Learn the basics of React and start building your own web applications.",
//   },
//   {
//     id: 2,
//     name: "Intermediate React",
//     instructor: "Jane Doe",
//     duration: "3 hours",
//     description:
//       "Take your React skills to the next level and learn advanced techniques.",
//   },
//   {
//     id: 3,
//     name: "React Native",
//     instructor: "Bob Johnson",
//     duration: "4 hours",
//     description:
//       "Learn how to use React to build native mobile applications for iOS and Android.",
//   },
//   // Add more courses as needed
// ];

// function AllCourses() {
//   return (
//     <section className="all-courses">
//       <h2 className="all-courses__heading">All Courses</h2>
//       <div className="all-courses__card-container">
//         {courses.map((course) => (
//           <div key={course.id} className="all-courses__card">
//             <img src="../../assets/home/course1.jpeg" alt="course-img"/>
//             <h3 className="all-courses__card-title">{course.name}</h3>
//             <p className="all-courses__card-instructor">
//               Instructor: {course.instructor}
//             </p>
//             <p className="all-courses__card-duration">
//               Duration: {course.duration}
//             </p>
//             <p className="all-courses__card-description">
//               {course.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default AllCourses;

import React from "react";
import "./allCourses.style.scss";

import Image1 from "../../assets/home/course1.jpeg";
import { ReactComponent as RightArrow} from '../../assets/icons/rightArrow.svg';


const courses = [
  {
    id: 1,
    name: "Introduction to React",
    instructor: "John Smith",
    duration: "2 hours",
    description:
      "Learn the basics of React and start building your own web applications.",
    image: Image1,
  },
  {
    id: 2,
    name: "Intermediate React",
    instructor: "Jane Doe",
    duration: "3 hours",
    description:
      "Take your React skills to the next level and learn advanced techniques.",
    image: Image1,
  },
  {
    id: 3,
    name: "React Native",
    instructor: "Bob Johnson",
    duration: "4 hours",
    description:
      "Learn how to use React to build native mobile applications for iOS and Android.",
    image: Image1,
  },
  {
    id: 4,
    name: "React Native",
    instructor: "Bob Johnson",
    duration: "4 hours",
    description:
      "Learn how to use React to build native mobile applications for iOS and Android.",
    image: Image1,
  }
  // Add more courses as needed
];

function AllCourses() {
  return (
    <section className="all-courses">
      <h2 className="all-courses__heading">All Courses</h2>
      <button className="view-all"><span>VIEW ALL</span><RightArrow /></button>
      <div className="all-courses__card-container">
        {courses.map((course) => (
          <div key={course.id} className="all-courses__card">
            <img src={course.image} alt={course.name} />
            <h3 className="all-courses__card-title">{course.name}</h3>
            <p className="all-courses__card-instructor">
              Instructor: {course.instructor}
            </p>
            <p className="all-courses__card-duration">
              Duration: {course.duration}
            </p>
            <p className="all-courses__card-description">
              {course.description}
            </p>
            <button className="btn"><span>VIEW </span><RightArrow /></button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllCourses;
