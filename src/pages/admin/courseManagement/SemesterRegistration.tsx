import { Button, Col, Flex } from "antd";
import StdUniForm from "../../../components/form/StdUniForm";
import StdUniSelect from "../../../components/form/StdUniSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {  semesterStatusOptions } from "../../../components/constants/semester";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../typs";
import StdUniInput from "../../../components/form/StdUniInput";
import StdUniDatePicker from "../../../components/form/StdUniDatePicker";
import { useAddRegisterSemesterMutation } from "../../../redux/features/admin/courseManagement";
// const semester = {
//     "academicSemester": "65b0104110b74fcbd7a25d92",
//     "status": "UPCOMING",
//     "startDate": "2025-01-10T04:00:01Z",
//     "endDate": "2025-04-24T17:59:59Z",
//     "minCredit": 6,
//     "maxCredit": 16
// }
const SemesterRegistration = () => {
  const [addRegisterSemester, {data,error}] = useAddRegisterSemesterMutation()
  console.log("Register data=> ",data,error);
  
    const {data:academicSemester} = useGetAllSemesterQuery([{
        name:'sort',value:'year'
    }])
    console.log(academicSemester);
    const academicSemesterOptions= academicSemester?.data?.map((item)=> ({
        value:item._id,
        label: `${item.name} ${item.year}`
    }))
    console.log(academicSemesterOptions);
    
  const onSubmit: SubmitHandler<FieldValues> =async(data)=>{
    const toastId = toast.loading("Creating...")
    const semesterData = {
     ...data,
     minCredit:Number(data.minCredit),
     maxCredit:Number(data.maxCredit)

    }
    console.log(semesterData);
    
    try{
      console.log(semesterData);
      const res =  (await addRegisterSemester(semesterData) )as TResponse<any>
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
    <StdUniSelect options={academicSemesterOptions} label='Academic Semester' name="academicSemester"/>
    <StdUniSelect options={semesterStatusOptions} label='Status' name="status"/>
    <StdUniDatePicker name="startDate" label="Start Date"/>
    <StdUniDatePicker name="endDate" label="End Date"/>
    <StdUniInput type="text" name="minCredit" label="Min Credit" />
    <StdUniInput type="text" name="maxCredit" label="Max Credit" />
    <Button htmlType="submit">submit</Button>
   </StdUniForm>
    </Col>
</Flex>
  );
};

export default SemesterRegistration;