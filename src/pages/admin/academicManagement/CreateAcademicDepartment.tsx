import {  FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicDepartmentMutation, useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { Button, Col, Flex } from "antd";
import StdUniForm from "../../../components/form/StdUniForm";
import StdUniSelect from "../../../components/form/StdUniSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicDepartmentSchema } from "../../../schemas/AcademicManagement.Schena";
import { TAcademicDepartment, TResponse } from "../../../typs";
import { toast } from "sonner";

const CreateAcademicDepartment = () => {
const {data:fData}= useGetAllAcademicFacultyQuery(undefined)
    const departmentOptions = fData?.data?.map(faculty =>({
      value: `Department of ${ faculty.name.replace('Faculty of ', '')}`,
      label: `Department of ${ faculty.name.replace('Faculty of ', '')}`
    }));
      console.log(departmentOptions);
      
    const facultyIdOption =fData?.data?.map((item)=> ({
  value: item._id,
  label:`${item._id} ${item.name.replace('Faculty of ', '')}`
    }))
  console.log(facultyIdOption);
  
     const [addAcademicDepartment] = useAddAcademicDepartmentMutation()
     const onSubmit:SubmitHandler<FieldValues> = async(data)=>{
      const toastId = toast.loading("Creating...")
       const departmentData = {
        name: data.name,
        academicFaculty: data.academicFaculty
       }
       try{
        const res =await addAcademicDepartment(departmentData) as TResponse<TAcademicDepartment[]>
         if(res.error){
          toast.error(res.error.data.message, {id: toastId})
         }else{
          toast.success("Department Created", {id: toastId})
         }
       }catch(error){
        toast.error("something went wrong", {id: toastId})
       }
      
          
        
          
     }
 
  return (
    <Flex justify="center" align="center">
    <Col span={9}>
      <StdUniForm onSubmit={onSubmit}  resolver={zodResolver(academicDepartmentSchema)}>
      <StdUniSelect options={departmentOptions} label="name" name="name"/>                       
      <StdUniSelect options={facultyIdOption} label="Academic Faculty" name="academicFaculty"/>                       
      <Button htmlType="submit">Submit</Button>
      </StdUniForm>
    </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;