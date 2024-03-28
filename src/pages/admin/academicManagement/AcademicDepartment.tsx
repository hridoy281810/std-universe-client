import { Button, Table, TableColumnsType } from "antd";
import { useGetAllDepartmentQuery} from "../../../redux/features/admin/academicManagement.api";
type TTableData ={
  index: number,
  name:string,

}
const AcademicDepartment = () => {
  const {data: departmentData,isFetching,isLoading} = useGetAllDepartmentQuery(undefined,{refetchOnMountOrArgChange:true})
  console.log(departmentData,isFetching,isLoading);
  
  const tableData = departmentData?.data?.map(({_id,name},index )=> ({
    key: _id,name,index: index +1 
  }))
const columns: TableColumnsType<TTableData> = [
  {
    title: 'Index',
    key: "index",
    dataIndex: 'index',
   
  },
  {
    title: 'Department Name',
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
 
      <Table  scroll={{ x: 10}}  columns={columns} dataSource={tableData}  />
   
  );
};

export default AcademicDepartment;