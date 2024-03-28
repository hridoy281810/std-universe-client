import { Button, Col, Flex } from "antd";
import StdUniForm from "../../../components/form/StdUniForm";
import StdUniSelect from "../../../components/form/StdUniSelect";
import { useGetAllAcademicFacultyQuery, useGetAllDepartmentQuery } from "../../../redux/features/admin/academicManagement.api";
import StdUniInput from "../../../components/form/StdUniInput";
import StdUniSelectWithWatch from "../../../components/form/StdUniSelectWithWatch";
import { useAddOfferCourseMutation, useGetAllCoursesQuery, useGetAllFacultiesQuery, useGetAllRegisterSemesterQuery } from "../../../redux/features/admin/courseManagement";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { daysOptions } from "../../../components/constants/course";
import { toast } from "sonner";
import { TResponse } from "../../../typs";

type TFacultyDataOptions = {
  _id:string
  fullName:string
}
const OfferCourse = () => {
  const [id,setId] = useState('')
  const [addOfferCourse] = useAddOfferCourseMutation()
  const {data:academicFaculty} = useGetAllAcademicFacultyQuery(undefined)
  // console.log(academicFaculty?.data,'anis');

  const {data:academicDepartment} = useGetAllDepartmentQuery(undefined)
  const {data:semesterData} = useGetAllRegisterSemesterQuery(undefined)
  const {data:courseData} = useGetAllCoursesQuery(undefined)
  const {data:facultiesData,isFetching:fetchingFaculty} = useGetAllFacultiesQuery(id,{skip:!id})
console.log(facultiesData?.data,'etai dorkar');
const facultyDataOptions= facultiesData? facultiesData.data?.faculties?.map((item: TFacultyDataOptions)=> ({
    value:item._id,
    label: item.fullName
})) : [];
console.log(facultyDataOptions);

const courseDataOptions= courseData?.data?.map((item)=> ({
    value:item._id,
    label: item.title
}))


const semesterDataOptions= semesterData?.data?.map((item)=> ({
    value:item._id,
    label: `${item.academicSemester.name} ${item.academicSemester.year} `
}))
const academicFacultyOptions= academicFaculty?.data?.map((item)=> ({
    value:item._id,
    label: `${item.name} `
}))
const academicDepartmentOptions= academicDepartment?.data?.map((item)=> ({
    value:item._id,
    label: `${item.name} `
}))
console.log(academicFacultyOptions);
  const onSubmit:SubmitHandler<FieldValues>=async(data)=>{
    const toastId = toast.loading("Creating...")
    const offerCourse = {
      ...data,
      section:Number(data.section),
      maxCapacity:Number(data.maxCapacity),
  
    }
    try{
     const res =  (await addOfferCourse(offerCourse))as TResponse<any>
     if(res.error){
       toast.error(`server error ${res.error.data.message}`,{id:toastId})
     }else{
       toast.success(res.data.message,{id:toastId})
     }
     
   }catch(err){
 toast.error("something went wrong",{id:toastId})
 
   }
  
    
  }
  return (
<Flex justify="center" align="center">    
<Col span={9}>
   <StdUniForm onSubmit={onSubmit}>
    <StdUniSelect options={semesterDataOptions} label='Semester Registration' name="semesterRegistration"/>
    <StdUniSelect options={academicFacultyOptions} label='Academic Faculty' name="academicFaculty"/>
    <StdUniSelect options={academicDepartmentOptions} label='Academic Department' name="academicDepartment" />
    <StdUniSelectWithWatch onValueChange={setId} options={courseDataOptions} label='Course' name="course" />
    <StdUniSelect  disabled={!id || fetchingFaculty} options={facultyDataOptions} label='Faculty' name="faculty" />
    <StdUniInput   name="section" type="number" label="Section" />
    <StdUniInput   name="maxCapacity" type="number" label="Max Capacity" />
    <StdUniSelect mode="multiple" options={daysOptions} label='Days' name="days"/>
    <StdUniInput   name="startTime" type="time" label="Start Time" />
    <StdUniInput   name="endTime" type="time" label="End Time" />
    <Button htmlType="submit">submit</Button>
   </StdUniForm>
    </Col>
</Flex>
  );
};

export default OfferCourse;