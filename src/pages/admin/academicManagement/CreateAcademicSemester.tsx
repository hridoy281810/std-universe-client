import { Button, Col, Flex } from "antd";
import StdUniForm from "../../../components/form/StdUniForm";
import StdUniSelect from "../../../components/form/StdUniSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { semesterOptions } from "../../../components/constants/semester";
import {monthOptions } from "../../../components/constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/AcademicManagement.Schena";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../typs";
import { TAcademicSemester } from "../../../typs/academicManagement.type";

const currentYear = new Date().getFullYear();
const yearOption = [0,1,2,3,4,5].map((number)=> ({
  value:String( currentYear + number),
  label: String( currentYear + number)
}))
const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation()
  const onSubmit: SubmitHandler<FieldValues> =async(data)=>{
    const toastId = toast.loading("Creating...")
    const name = semesterOptions[Number(data?.name) -1]?.label
    const semesterData = {
      name,
      code:data.name,
      year: data.year,
      startMonth:data.startMonth,
      endMonth:data.endMonth
    }
    try{
      console.log(semesterData);
      const res =  (await addAcademicSemester(semesterData) )as TResponse<TAcademicSemester[]>
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
   <StdUniForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
    <StdUniSelect options={semesterOptions} label='Name' name="name"/>
    <StdUniSelect options={yearOption} label='Year' name="year"/>
    <StdUniSelect options={monthOptions} label='Start Year' name="startMonth"/>
    <StdUniSelect options={monthOptions} label='End Year' name="endMonth"/>
    <Button htmlType="submit">submit</Button>
   </StdUniForm>
    </Col>
</Flex>
  );
};

export default CreateAcademicSemester;