import { Button, Table, TableColumnsType } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
type TTableData ={
  index: number,
  name:string
}
const AcademicFaculty = () => {
  const {data: facultyData,isFetching,isLoading} = useGetAllAcademicFacultyQuery(undefined)
  console.log(facultyData,isFetching,isLoading);
  
  const tableData = facultyData?.data?.map(({_id,name},index )=> ({
    key: _id,name,index: index +1 
  }))
const columns: TableColumnsType<TTableData> = [
  {
    title: 'Index',
    key: "index",
    dataIndex: 'index',
   
  },
  {
    title: 'Faculty Name',
    key: "name",
    dataIndex: 'name',
  },

  {
    title: 'Action',
    key: "X",
   render:()=>{
    return(
      <div>
        <Button>Update</Button>
      </div>
    )
   },
   
  },
];
 if(isLoading){
    return <p>Loading...</p>
  }
  return (
 
      <Table  columns={columns} dataSource={tableData}  />
   
  );
};

export default AcademicFaculty;