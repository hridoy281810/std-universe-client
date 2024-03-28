import MySchedule from "../pages/student/MySchedule";
import StudentDashboard from "../pages/student/StudentDashboard";
import StudentOfferedCourse from "../pages/student/StudentOfferedCourse";

export const studentPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <StudentDashboard />
    },
    {
        name: 'Course Management',
        children: [
          {
            name:'Offered Course',
            path: "my-offered-course", 
            element: <StudentOfferedCourse />,
          },
          {
            name:'MySchedule',
            path: "my-schedule", 
            element: <MySchedule />,
          },
        ]
         }
]