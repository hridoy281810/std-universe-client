import AdminDashboard from "../pages/admin/userManagement/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/faculty/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/student/CreateStudent";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemesters from "../pages/admin/academicManagement/AcademicSemesters";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import StudentData from "../pages/admin/userManagement/student/StudentData";
import StudentDetails from "../pages/admin/userManagement/student/StudentDetails";
import UpdateStudentData from "../pages/admin/userManagement/student/UpdateStudentData";
import AdminData from "../pages/admin/userManagement/admin/AdminData";
import AdminDetails from "../pages/admin/userManagement/admin/AdminDetails";
import UpdateAdminData from "../pages/admin/userManagement/admin/UpdateAdminData";
import FacultyData from "../pages/admin/userManagement/faculty/FacultyData";
import FacultyDetails from "../pages/admin/userManagement/faculty/FacultyDetails";
import UpdateFacultyData from "../pages/admin/userManagement/faculty/UpdateFacultyData";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import RegisteredSemesters from "../pages/admin/courseManagement/RegisteredSemesters";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";

export const adminPaths =  [
  {
    name: 'Dashboard',
    path: 'dashboard', 
     element: <AdminDashboard />,
   },
   {
    name: 'Academic Management',
    children: [
      {
        name:'Create A. Semester',
        path: "create-academic-semester", 
        element: <CreateAcademicSemester />,
      },
      {
        name:'Academic Semester',
        path: "academic-semester", 
        element: <AcademicSemesters />,
      },
      {
        name:'Create A. Faculty',
        path: "create-academic-faculty", 
        element: <CreateAcademicFaculty />,
      },
      {
        name:'Academic Faculty',
        path: "academic-faculty", 
        element: <AcademicFaculty />,
      },
      {
        name:'Create A. Department',
        path: "create-academic-department", 
        element: <CreateAcademicDepartment/>,
      },
      {
        name:'Academic Department',
        path: "academic-department", 
        element: <AcademicDepartment/>,
      },
    
    ]
   },
    {
     name: 'User Management',
     children: [
      {
        name:"Create Student",
        path: "create-student", 
        element: <CreateStudent />,
      },
      {
        name:"Students",
        path: "students-data", 
        element: <StudentData />,
      },
      {
        path: "students-data/:studentId", 
        element: <StudentDetails />,
      },
      {
        path: "update-student-data/:studentId", 
        element: <UpdateStudentData />,
      },
      {
        name:'Create Admin',
        path: "create-admin", 
        element: <CreateAdmin />,
      },
      {
        name:'Admin',
        path: "admin-data", 
        element: <AdminData />,
      },
      {
        path: "admin-data/:adminId", 
        element: <AdminDetails />,
      },
      {
        path: "update-admin-data/:studentId", 
        element: <UpdateAdminData />,
      },
      {
        name:"Create Faculty",
        path: "create-faculty", 
        element: <CreateFaculty />,
      },
      {
        name:"Faculty",
        path: "faculty-data", 
        element: <FacultyData />,
      },
      {
        path: "faculty-data/:facultyId", 
        element: <FacultyDetails />,
      },
      {
        path: "update-faculty-data/:facultyId", 
        element: <UpdateFacultyData />,
      },
      
      
     ]

    },
    {
     name: 'Course Management',
     children: [
      {
        name:'Offered course',
        path: "offer-course", 
        element: <CreateAdmin />,
      },
      {
        name:'Semester Registration',
        path: "semester-registration", 
        element: <SemesterRegistration />,
      },
      {
        name:'Registered Semesters',
        path: "registered-semesters", 
        element: <RegisteredSemesters />,
      },
      {
        name:'Create Course',
        path: "create-course", 
        element: <CreateCourse />,
      },

      
     ]

    }
  ]
  // ! pogroming way

// export const adminRoutes = adminPaths.reduce((acc:TRoutes[],item)=> {
//      if(item.path && item.element){
//       acc.push({
//         path: item.path,
//         element:item.element,
//       })
//      } 
    
//      if(item.children){
//       item.children.forEach((child)=>{
//       acc.push({
//         path:child.path,
//         element: child.element
//       })

//       })
//      }
//   return acc;
// },[]);

// export const adminSidebarItem = adminPaths.reduce((acc:TSidebarItem[],item)=>{
//   if(item.path && item.name){
//     acc.push({
//       key: item.name,
//       label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//     })
//   }
//   if(item.children){
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child)=> ({
//         key: child.name,
//         label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//       }))
//     })
//   }
// return acc;
// },[])

// ! hard coded way
// export const adminPaths2 =  [
//     {
//       index:true, 
//       element: <AdminDashboard />,
//     },
//     {
//      path: 'dashboard', 
//       element: <AdminDashboard />,
//     },
//     {
//       path: "create-admin", 
//       element: <CreateAdmin />,
//     },
//     {
//       path: "create-student", 
//       element: <CreateStudent />,
//     },
//     {
//       path: "create-faculty", 
//       element: <CreateFaculty />,
//     },
    
//   ]

