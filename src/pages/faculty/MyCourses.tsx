
import {  FieldValues, SubmitHandler } from 'react-hook-form';
import StdUniForm from '../../components/form/StdUniForm';
import StdUniSelect from '../../components/form/StdUniSelect';
import { useGetAllFacultyCoursesQuery } from '../../redux/features/faculty/facultyCourses.api';
import { Button, Col, Flex } from "antd";
import { useNavigate } from 'react-router-dom';
const MyCourses = () => {
    const {data:myCourses} = useGetAllFacultyCoursesQuery(undefined)
    console.log(myCourses);
    const navigate = useNavigate()
    const semesterOptions = myCourses!?.data?.map((item)=>({
        label:`${item?.academicSemester?.name} ${item?.academicSemester?.year}`,
        value: item?.semesterRegistration?._id
    }))
    const courseOptions = myCourses!?.data?.map((item)=>({
        label:item.course.title,
        value: item?.course?._id
    }))
    const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        console.log(data); 
        navigate(`/faculty/courses/${data.semesterRegistration}/${data.course}`)
    }
  return (
<Flex justify="center" align="center">
<Col span={9}>
   <StdUniForm onSubmit={onSubmit} >
    <StdUniSelect options={semesterOptions} label='Semester' name="semesterRegistration"/>
    <StdUniSelect options={courseOptions} label='Course' name="course"/>
    <Button htmlType="submit">submit</Button>
   </StdUniForm>
    </Col>
</Flex>
  );
};

export default MyCourses;