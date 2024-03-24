import { useParams } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import { useGetSingleStudentQuery } from "../../../../redux/features/admin/userManagement.api";
import {  TStudent } from '../../../../typs';
const StudentDetails = () => {
    const {studentId} = useParams()
    const {data: studentData,isLoading} = useGetSingleStudentQuery<TStudent >(studentId)
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
 <>
    <Row  gutter={16} >
    <Col style={{ marginTop: 16 }} span={24} md={{span: 12}} lg={{span: 8}}>
      <Card style={{ marginTop: 16 ,height:'100%'}} title="Personal Info" bordered={false}>
      <p>Name: {studentData?.data.fullName}</p>
      <p>Date of Birth: {studentData?.data.dateOfBirth}</p>
      <p>Blood Group: {studentData?.data.gender}</p>
      </Card>
    </Col>
    <Col style={{ marginTop: 16 }} span={24} md={{span: 12}} lg={{span: 8}}>
      <Card style={{ marginTop: 16 ,height:'100%'}} title="Contact Info" bordered={false}>
       <p>Email: {studentData?.data.email}</p>
       <p>Contact Number: {studentData?.data.contactNo}</p>
       <p>Emergency Contact Number: {studentData?.data.emergencyContactNo}</p>
       <p>Present Address: {studentData?.data.presentAddress}</p>
       <p>permanent Address: {studentData?.data.permanentAddress}</p>
      </Card>
    </Col>
    <Col style={{ marginTop: 16 }} span={24} md={{span: 12}} lg={{span: 8}}>
      <Card style={{ marginTop: 16 ,height:'100%'}} title="Guardian" bordered={false}>
       <p>fatherName: {studentData?.data.guardian.fatherName}</p>
       <p>fatherContactNo: {studentData?.data.guardian.fatherContactNo}</p>
       <p>fatherOccupation: {studentData?.data.guardian.fatherOccupation}</p>
       <p>motherName: {studentData?.data.guardian.motherName}</p>
       <p>motherContactNo: {studentData?.data.guardian.motherContactNo}</p>
       <p>motherOccupation: {studentData?.data.guardian.motherOccupation}</p>
      </Card>
    </Col>
    
    <Col style={{ marginTop: 16 }} span={24} md={{span: 12}} lg={{span: 8}} >
      <Card   style={{ marginTop: 16 ,height:'100%'}}title="Local Guardian" bordered={false}>
       <p>fatherName: {studentData?.data.localGuardian.name}</p>
       <p>fatherName: {studentData?.data.localGuardian.contactNo}</p>
       <p>fatherName: {studentData?.data.localGuardian.occupation}</p>
       <p>fatherName: {studentData?.data.localGuardian.address}</p>
      </Card>
    </Col>
    <Col style={{ marginTop: 16 }}  span={24} md={{span: 12}} lg={{span: 8}} >
      <Card  style={{ marginTop: 16 ,height:'100%'}}  title="Academic Info" bordered={false}>
       <p>Admission Semester: {studentData?.data.admissionSemester.name}</p>
       <p>Academic Department: {studentData?.data.academicDepartment.name}</p>
      </Card>
    </Col>
   
  </Row>
 </>
);
};

export default StudentDetails;