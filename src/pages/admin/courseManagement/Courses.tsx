import { Button, Modal, Table } from "antd";
import { useAddCourseFacultiesMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement";
import { useState } from "react";
import StdUniForm from "../../../components/form/StdUniForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import StdUniSelect from "../../../components/form/StdUniSelect";
import { useGetAllFacultyQuery } from "../../../redux/features/admin/userManagement.api";


const Courses = () => {
  const {data:courseData, isLoading,isFetching } = useGetAllCoursesQuery(undefined)
  console.log(courseData?.data,'full data');
   const tableData = courseData?.data?.map(({_id,title,prefix,code})=>({
    key:_id,
    title,
    code:`${prefix} ${code}`
   }))
  const columns = [
    {
      title: "Title",
      key: 'title',
      dataIndex:'title'
    },
    {
      title: "Code",
      key: 'code',
      dataIndex:'code'
    },
    {
      title: 'Action',
      key: "X",
     render:(item)=>{
      console.log(item);
      
      return(
        <AddFacultyModal  facultyInfo={item} />
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
    <Table loading={isFetching} columns={columns} dataSource={tableData}  />
  );
};
const AddFacultyModal = ({facultyInfo})=>{
  const {data:academicFacultyData} = useGetAllFacultyQuery(undefined)
  console.log(academicFacultyData?.data);
  const [addCourseFaculties,{data:update,error}] =useAddCourseFacultiesMutation()
   console.log('update faculty=>',update,error);
   
  const [isModalOpen,setIsModalOpen] = useState(false)
    const modalFacultyOptions  = academicFacultyData?.data?.map((item)=>(
    {
      value:item._id,
      label:`${item.name.firstName} ${item.name.middleName} ${item.name.lastName}`
    }))
    console.log(modalFacultyOptions);
    
  const showModal = () => {
    setIsModalOpen(true);
  };

  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit:SubmitHandler<FieldValues> = (data)=>{
    console.log(data,'handle submit');
    const facultyData = {
      courseId: facultyInfo.key,
      data
    }
    console.log(facultyData,'facultyData');
    
    addCourseFaculties(facultyData)
  }
  return(
    <>
    <Button onClick={showModal}>
     Add Faculty
    </Button>
    <Modal title="Basic Modal" open={isModalOpen} footer={null} onCancel={handleCancel}>
   <StdUniForm onSubmit={handleSubmit}>
   <StdUniSelect mode="multiple" options={modalFacultyOptions} name="faculties" label="Faculties"/>
   <Button htmlType="submit">Submit</Button>
   </StdUniForm>
    </Modal>
  </>
  )
}
export default Courses;