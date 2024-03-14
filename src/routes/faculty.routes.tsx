import FacultyDashboard from "../pages/faculty/FacultyDashboard";
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
]