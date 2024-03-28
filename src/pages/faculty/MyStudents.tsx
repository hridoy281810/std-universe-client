import { useParams } from "react-router-dom";
import { useAddMarkMutation, useGetAllFacultyCoursesQuery } from "../../redux/features/faculty/facultyCourses.api";
import { Button, Modal, Table, TableColumnsType } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import StdUniInput from "../../components/form/StdUniInput";
import StdUniForm from "../../components/form/StdUniForm";
import { toast } from "sonner";
import { TResponse } from "../../typs";

type TFacultyInfo = {
    key:string
    name:string
    roll:string
    semesterRegistration:string
    offeredCourse:string
    student:string,
    message?:string
  }
  type TFacultyInfo2 ={
    studentInfo:TFacultyInfo
  }

const MyStudents = () => {
    const {registerSemesterId,courseId} = useParams()
    console.log(registerSemesterId,courseId);
    const {data:facultyData,isFetching} = useGetAllFacultyCoursesQuery([
        {name:'semesterRegistration',value:registerSemesterId},
        {name:'course',value:courseId},
    ])
    const tableData = facultyData?.data?.map(({_id,student,semesterRegistration,offeredCourse})=> ({
        key: _id,
        name:student.fullName,
        roll:student.id,
        semesterRegistration:semesterRegistration._id,
        offeredCourse:offeredCourse._id,
        student:student._id
      }))
    console.log(facultyData);
    const columns: TableColumnsType<TFacultyInfo> = [
        {
          title: 'Name',
          key: "name",
          dataIndex: 'name',
        },
        {
          title: 'Roll',
          key: "roll",
          dataIndex: 'roll',
        },
        {
            title: 'Action',
            key: "X",
           render:(item:TFacultyInfo)=>{
            console.log(item,'ety t dorkar');
            
            return(
              <AddMarksModal  studentInfo={item} />
            )
           },
           
          },
      ];
      
  return (
    <Table  scroll={{ x: 10}}loading={isFetching} columns={columns} dataSource={tableData}  />
  );
};
const AddMarksModal = ({studentInfo}:TFacultyInfo2)=>{
    const [isModalOpen,setIsModalOpen] = useState(false)
  const [addMark] = useAddMarkMutation()
      
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const handleSubmit:SubmitHandler<FieldValues> = async(data)=>{
      const toastId = toast.loading("Updating Mark...")
     try {
        const studentMarksData = {
            semesterRegistration:studentInfo.semesterRegistration,
            offeredCourse:studentInfo.offeredCourse,
            student:studentInfo.student,
            courseMarks: {
                classTest1: Number(data.classTest1 ) ,
                midTerm: Number(data.midTerm),
                classTest2: Number(data.classTest2),
                finalTerm:Number(data.finalTerm)
            }
          }
          const res = await  addMark(studentMarksData) as TResponse<TFacultyInfo>
          console.log(res);
          
          if(res.error){
            toast.error(res.error.data.message, {id: toastId})
           }else{
            toast.success(res?.data?.message, {id: toastId})
           }
      } catch (error) {
        console.error('Failed to update student mark:', error);
      }
    }
 
    return(
      <>
      <Button onClick={showModal}>
       Add Faculty
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} footer={null} onCancel={handleCancel}>
     <StdUniForm onSubmit={handleSubmit}>
        <StdUniInput type="number" name="classTest1" label="Class Test 1" />
        <StdUniInput type="number" name="midTerm" label="Mid Term" />
        <StdUniInput type="number" name="classTest2" label="Class Test 2" />
        <StdUniInput type="number" name="finalTerm" label="Final Term" />
     <Button htmlType="submit">Submit</Button>
     </StdUniForm>
      </Modal>
    </>
    )
  }
export default MyStudents;