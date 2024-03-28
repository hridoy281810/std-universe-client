import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import MyCourses from "../pages/faculty/MyCourses";
import OfferedCorses from "../pages/faculty/OfferedCorses";

export const facultyPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <FacultyDashboard />
    },
    {
        name: 'Offered Course',
        path: 'offered-course',
        element: <OfferedCorses />
    },
    {
        name: 'My Courses',
        path: 'my-courses',
        element: <MyCourses />
    },
]