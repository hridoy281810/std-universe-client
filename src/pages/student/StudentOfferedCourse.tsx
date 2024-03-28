import { Button, Col, Row } from "antd";
import { useAddEnrolledOfferCourseMutation, useGetAllMyOfferCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";
type TAccCourse ={
    [index:string]: any
}
const StudentOfferedCourse = () => {
    const {data:offeredCourseData, isFetching,isLoading:Loading} = useGetAllMyOfferCoursesQuery(undefined)
    const [addEnrolledOfferCourse,{isLoading}] = useAddEnrolledOfferCourseMutation()
    console.log(offeredCourseData);
      const singleObjectData = offeredCourseData?.data?.reduce((acc:TAccCourse,item)=>{
        const key = item.course.title
        acc[key] =acc[key]  || {courseTitle:key,sections:[]};
        acc[key].sections.push({
            section: item.section,
            _id: item._id,
            days:item.days,
            startTime: item.startTime,
            endTime: item.endTime,
            maxCapacity:item.maxCapacity

        })
        return acc
      },{})
      console.log(singleObjectData,'etai t dorkar');
      const modifiedData = Object.values(singleObjectData? singleObjectData: {})
      console.log(modifiedData);
      
      const handleEnroll =async (_id)=>{
        const enrollData ={
            offeredCourse:_id
        }
        const res = await addEnrolledOfferCourse(enrollData)
        console.log(res);
        
      }
      if(!modifiedData.length){
        return <p>No Available Courses</p>
      }
      if(isLoading || Loading){
        return <p>Loading...</p>
      }
      if(isFetching){
        return <p>Fetching...</p>
      }
  return (
    <Row gutter={[0,20]} >
     {
    modifiedData?.map((item)=>(
        <Col span={24}    style={{border:'solid #d4d4d4 2px '}} >
        <div style={{padding:'10px'}}>
            <h2>{item?.courseTitle}</h2>
        </div>
        <div >
            {
                item?.sections?.map((section)=>(
                  <Row 
                  justify="space-between"
                  align="middle"
                  style={{borderTop:'solid #d4d4d4 2px ',padding:'10px'}}
                  >
                    <Col span={4}>section: {section.section}</Col>
                    <Col span={4}>Days: {section.days.map((day)=>(
                        <span>{day},{' '}</span>
                    ))}</Col>
                    <Col span={4}>Start Time: {section.startTime}</Col>
                    <Col span={4}>End Time: {section.endTime}</Col>
                    <Col span={4}>Max Capacity: {section.maxCapacity}</Col>
                    <Col span={4}><Button onClick={()=> handleEnroll(section._id)}>Enrolled</Button></Col>
                 
                  </Row>
                ))
            }
        </div>
        </Col>
    ))
     }
    </Row>
  );
};

export default StudentOfferedCourse;