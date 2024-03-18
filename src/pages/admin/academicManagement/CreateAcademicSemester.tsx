import { Button, Col, Flex } from "antd";
import StdUniForm from "../../../components/form/StdUniForm";
import StdUniInput from "../../../components/form/StdUniInput";
import StdUniSelect from "../../../components/form/StdUniSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { semesterOptions } from "../../../components/constants/semester";
import {monthOptions } from "../../../components/constants/global";

const currentYear = new Date().getFullYear();
const yearOption = [0,1,2,3,4,5].map((number)=> ({
  value:String( currentYear + number),
  label: String( currentYear + number)
}))
const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data)=>{
    const name = semesterOptions[Number(data?.name) -1].label
    const semesterData = {
      name,
      code:data.name,
      year: data.year,
      startMonth:data.startMonth,
      endMonth:data.endMonth
    }
    console.log(semesterData,data);
    
  }


  // "name": "Fall",
  // "year": "2025",
  // "code": "03",
  // "startMonth": "September",
  // "endMonth": "December"
  return (
<Flex justify="center" align="center">
<Col span={9}>
   <StdUniForm onSubmit={onSubmit}>
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