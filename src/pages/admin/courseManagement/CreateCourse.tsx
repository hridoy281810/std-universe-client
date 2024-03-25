import { Button, Col, Flex } from "antd";
import StdUniForm from "../../../components/form/StdUniForm";
import StdUniSelect from "../../../components/form/StdUniSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { toast } from "sonner";
import { TResponse } from "../../../typs";
import StdUniInput from "../../../components/form/StdUniInput";
import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement";
const course = {
  "data": [
{
  "title": "Dom Manipulation",
  "prefix": "JS",
  "code": 108,
  "credits": 3,
  "isDeleted": false,
  "preRequisiteCourses": [
      {
          "course": "null",
          "isDeleted": false
      },
       {
          "course": "null",
          "isDeleted": false
      }
  ]
}
  ]
 
}
type TItem = {
  course:string,
  isDeleted: boolean
}
const CreateCourse = () => {
  const [addCourse, {data,error}] = useAddCourseMutation()
  console.log("Register data=> ",data,error);
  const {data:allCourses} = useGetAllCoursesQuery(undefined)
    console.log(allCourses);
    const academicSemesterOptions= allCourses?.data?.map((item)=> ({
        value:item._id,
        label:item.title
    }))
    console.log(academicSemesterOptions);
    
  const onSubmit: SubmitHandler<FieldValues> =async(data)=>{
    const toastId = toast.loading("Creating...")
    const courseData = {
     ...data,
     code:Number(data.code),
     credits:Number(data.credits),
     preRequisiteCourses: data.preRequisiteCourses?  data?.preRequisiteCourses?.map((item:TItem)=>({
      course:item,
      isDeleted:false

     })) : []
    }
    console.log(courseData);
    
    try{
      console.log(courseData);
      const res =  (await addCourse(courseData) )as TResponse<any>
      console.log(res);
      if(res.error){
        toast.error(`server error ${res.error.data.message}`,{id:toastId})
      }else{
        toast.success("Semester Created!",{id:toastId})
      }
      
    }catch(err){
 toast.error("something went wrong",{id:toastId})
  
    }
  }
  return (
<Flex justify="center" align="center">
<Col span={9}>
   <StdUniForm onSubmit={onSubmit}>
    <StdUniInput type="text" name="title" label="Title" />
    <StdUniInput type="text" name="prefix" label="Prefix" />
    <StdUniInput type="text" name="code" label="Code" />
    <StdUniInput type="text" name="credits" label="Credits" />
    <StdUniSelect mode="multiple" options={academicSemesterOptions} name="preRequisiteCourses" label="Pre Requisite Courses" />
    <Button htmlType="submit">submit</Button>
   </StdUniForm>
    </Col>
</Flex>
  );
};



export default CreateCourse;