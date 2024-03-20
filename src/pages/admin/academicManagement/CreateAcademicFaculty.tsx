
// {
//   "name":"Faculty of Programming"

import { Button, Col, Flex } from "antd";
import StdUniSelect from "../../../components/form/StdUniSelect";
import { facultyOptions } from "../../../components/constants/faculties";
import StdUniForm from "../../../components/form/StdUniForm";
import { useAddAcademicFacultyMutation, useGetAllFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {  TAcademicFaculty, TResponse } from "../../../typs";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "../../../schemas/AcademicManagement.Schena";


// }
const CreateAcademicFaculty = () => {
  const [addAcademicFaculty]= useAddAcademicFacultyMutation()
  // const { refetch } = useGetAllFacultyQuery(undefined, { enabled: false });
  const onSubmit:SubmitHandler<FieldValues> = async(data)=> {
    const toastId = toast.loading("Creating...")
    const facultyData= {
            name: data.name
    }
  try{
    const res = (await addAcademicFaculty(facultyData)) as TResponse<TAcademicFaculty>
    console.log(res);
    if(res.error){
      toast.error(res.error.data.message,{id:toastId})
    }else{
      toast.success("Faculty Created",{id:toastId})
 
    }
    
  }catch(error){
    toast.error("something went wrong!",{id:toastId})
    
  }
  
  }
  return (
    <Flex justify="center" align="center">
    <Col span={9}>
      <StdUniForm onSubmit={onSubmit} resolver={zodResolver(academicFacultySchema)} >
      <StdUniSelect options={facultyOptions} label="name" name="name"/>
      <Button htmlType="submit">Submit</Button>
      </StdUniForm>
    </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;