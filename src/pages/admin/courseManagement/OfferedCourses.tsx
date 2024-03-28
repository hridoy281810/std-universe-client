import {  Button, Table } from "antd";
import {  useGetAllOfferedCoursesQuery } from "../../../redux/features/admin/courseManagement";
const course ={
  "_id": "66017abdcb5eae338112a5fc",
  "semesterRegistration": "66002e3f905668183d4151f8",
  "academicSemester": "65f91ebea31ea9866ed1319f",
  "academicFaculty": "65f9751df09184fe0dd8cf6c",
  "academicDepartment": "65faa9e624e3230ce955e4ef",
  "course": "6600482b905668183d415248",
  "faculty": "66017383cb5eae338112a4f4",
  "maxCapacity": 54,
  "section": 2,
  "days": [
      "Thu",
      "Mon",
      "Sat"
  ],
  "startTime": "10:18",
  "endTime": "13:59",
  "createdAt": "2024-03-25T13:23:09.465Z",
  "updatedAt": "2024-03-25T13:23:09.465Z"
}

const OfferedCourses = () => {
  const {data:courseData, isLoading,isFetching } = useGetAllOfferedCoursesQuery(undefined)
  console.log(courseData?.data,'full data');
   const tableData = courseData?.data?.map(({_id,course,maxCapacity,section,startTime,endTime,days})=>({
    key:_id,
    course,
    maxCapacity,section,startTime,endTime
   }))
  const columns = [
    {
      title: "Course",
      key: 'course',
      dataIndex:'course'
    },
    {
      title: "Max Capacity",
      key: 'maxCapacity',
      dataIndex:'maxCapacity'
    },
  
    {
      title: "section",
      key: 'section',
      dataIndex:'section'
    },
    {
      title: "Start Time",
      key: 'startTime',
      dataIndex:'startTime'
    },
    {
      title: "End Time",
      key: 'endTime',
      dataIndex:'endTime'
    },
    {
      title: 'Action',
      key: "X",
     render:()=>{
      return(
        // <AddFacultyModal  facultyInfo={item} />
        <Button>Details</Button>
        )
     },
     
    },
  ]
  // const onChange: TableProps<TTableData>['onChange'] = (_pagination,filters,_sorter,  extra) => {
// if(extra.action === "filter"){
//     const queryParams:TQueryParam[] = [];
//     filters.name?.forEach((item) => (
//       queryParams.push({name: "name",value: item})
//     ));
//     filters.year?.forEach((item) => (
//       queryParams.push({name: "year",value: item})
//     ));
//     setParams(queryParams)
// }
// };
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <Table  scroll={{ x: 10}}loading={isFetching} columns={columns} dataSource={tableData}  />
  );
};
export default OfferedCourses;