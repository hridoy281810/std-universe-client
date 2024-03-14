import { Layout, Menu} from "antd";
const { Sider}= Layout
import { adminPaths} from "../../routes/admin.routes";
import { adminSidebarItemsGenerator } from "../../utils/sidebarItemsGenerators";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
}
const Sidebar = () => {
    const user =  useAppSelector(selectCurrentUser)
    let sidebarItems;
    switch(user!.role){
        case userRole.ADMIN:
            sidebarItems =  adminSidebarItemsGenerator(adminPaths,userRole.ADMIN);
            break;
        case userRole.FACULTY:
            sidebarItems =    adminSidebarItemsGenerator(facultyPaths,userRole.FACULTY);
            break;
        case userRole.STUDENT:
            sidebarItems =  adminSidebarItemsGenerator(studentPaths,userRole.STUDENT);
            break;
            default:
                break;
    }

  return (
    <Sider
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    <div style={{color: 'white',textAlign: 'center',height:'4rem',display:'flex',justifyContent:'center',alignItems:'center'}} >
 <h1>Student Universe</h1>
    </div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
  </Sider>
  );
};

export default Sidebar;